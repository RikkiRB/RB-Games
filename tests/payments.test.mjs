import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { createHandler, verifyStripeSignature, playPurchaseState, signLicense } from '../supabase/functions/_shared/perigee-api.mjs';
import { verifyLicense } from '../play/license.js';

const NOW = 1793354400000;
const USER = '11111111-1111-4111-8111-111111111111';
const OTHER = '22222222-2222-4222-8222-222222222222';
const AUDIENCE = 'https://rikkirb.github.io/RB-Games/play/';
const ENV = { WEB_GAME_URL: AUDIENCE, SUPABASE_URL: 'https://example.supabase.co', SUPABASE_ANON_KEY: 'public-test-key', SUPABASE_SERVICE_ROLE_KEY: 'test-service-key', STRIPE_SECRET_KEY: 'test-stripe-key', STRIPE_WEBHOOK_SECRET: 'test-whsec', STRIPE_PRICE_ID: 'price_upgrade', COMMERCE_ENABLED: 'true', PAYMENTS_LIVE: 'false' };
const paidSession = (livemode = false) => ({ id: livemode ? 'cs_live_checkout' : 'cs_test_checkout', livemode, mode: 'payment', payment_status: 'paid', currency: 'eur', amount_total: 299, client_reference_id: USER, metadata: { account_id: USER, product_id: 'full_content_upgrade' }, line_items: { data: [{ price: { id: 'price_upgrade' }, quantity: 1 }], has_more: false }, payment_intent: { id: livemode ? 'pi_livepurchase' : 'pi_purchase', status: 'succeeded', latest_charge: { id: livemode ? 'ch_livepurchase' : 'ch_purchase', paid: true, refunded: false, disputed: false, amount: 299, amount_refunded: 0 } } });
function fixture(options = {}) {
  const rows = options.rows || new Map(); const calls = [];
  const live = options.env?.PAYMENTS_LIVE === 'true';
  const fetcher = async (url, init = {}) => {
    url = String(url); calls.push({ url, method: init.method || 'GET' });
    if (url.endsWith('/auth/v1/user')) return Response.json({ id: options.user || USER, email: 'player@example.com', email_confirmed_at: '2026-01-01' }, { status: init.headers.Authorization === 'Bearer valid' ? 200 : 401 });
    if (url.includes('/rest/v1/rpc/pp_record_purchase')) {
      const data = JSON.parse(init.body), key = data.p_provider + ':' + data.p_reference;
      const prior = rows.get(key);
      if (prior && (prior.user_id !== data.p_user_id || prior.livemode !== data.p_livemode)) return Response.json({ error: 'bound' }, { status: 409 });
      if (!prior || data.p_event_time >= prior.event_time) rows.set(key, { provider: data.p_provider, reference: data.p_reference, user_id: data.p_user_id, status: data.p_status, provider_token: data.p_token, event_time: data.p_event_time, livemode: data.p_livemode });
      return Response.json(null);
    }
    if (url.includes('/rest/v1/pp_purchases')) {
      const query = new URL(url).searchParams;
      return Response.json([...rows.values()].filter(row => (!query.has('user_id') || query.get('user_id') === 'eq.' + row.user_id) && (!query.has('reference') || query.get('reference') === 'eq.' + row.reference) && (!query.has('livemode') || query.get('livemode') === 'eq.' + row.livemode)));
    }
    if (url.includes('/v1/prices/')) return Response.json({ active: true, type: 'one_time', currency: 'eur', unit_amount: options.price ?? 299, livemode: options.priceLive ?? live });
    if (url.includes('/v1/checkout/sessions/cs_')) return Response.json(options.session || paidSession(live));
    if (url.endsWith('/v1/checkout/sessions')) {
      const form = new URLSearchParams(init.body);
      assert.equal(form.get('line_items[0][price]'), ENV.STRIPE_PRICE_ID);
      assert.equal(form.get('client_reference_id'), options.user || USER);
      assert.equal(form.get('success_url'), AUDIENCE + '?checkout=complete');
      return Response.json({ url: 'https://checkout.stripe.com/c/pay/test', livemode: options.checkoutLive ?? live });
    }
    if (url.includes('/v1/charges/')) return Response.json({ payment_intent: 'pi_purchase', amount: 299, amount_refunded: options.partialRefund ? 100 : 299, refunded: !options.partialRefund, disputed: false });
    if (url === 'https://oauth2.googleapis.com/token') return Response.json({ access_token: 'mock-google-access', expires_in: 3600 });
    if (url.includes('androidpublisher.googleapis.com')) {
      if (options.googleOutage) return Response.json({}, { status: 500 });
      assert.ok(url.includes('/applications/com.rbgames.perigeepanic/purchases/productsv2/tokens/'));
      return Response.json(options.play || { purchaseStateContext: { purchaseState: 'PURCHASED' }, productLineItem: [{ productId: 'full_content_upgrade' }], acknowledgementState: 'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED' });
    }
    throw new Error('Unexpected external request: ' + url);
  };
  const handler = createHandler({ ...ENV, ...options.env }, { fetcher, clock: () => NOW });
  const request = (path, { body, method = 'GET', token = 'valid', headers = {}, origin = 'https://rikkirb.github.io' } = {}) => handler(new Request(ENV.SUPABASE_URL + '/functions/v1/perigee-api' + path, { method, headers: { origin, Authorization: 'Bearer ' + token, ...headers }, ...(body !== undefined ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {}) }));
  return { handler, request, rows, calls };
}
const signature = raw => 't=' + NOW / 1000 + ',v1=' + createHmac('sha256', ENV.STRIPE_WEBHOOK_SECRET).update(NOW / 1000 + '.' + raw).digest('hex');
const event = (type = 'checkout.session.completed', object = { id: 'cs_test_checkout' }, created = NOW / 1000) => ({ id: 'evt_test', livemode: false, type, created, data: { object } });
const webhook = (f, e = event()) => { const body = JSON.stringify(e); return f.request('/stripe-webhook', { method: 'POST', body, headers: { 'stripe-signature': signature(body) } }); };

test('webhook validates the exact raw body, rotation signatures and timestamp', async () => {
  const raw = JSON.stringify(event());
  assert.equal(await verifyStripeSignature(raw, signature(raw), ENV.STRIPE_WEBHOOK_SECRET, NOW), true);
  assert.equal(await verifyStripeSignature(raw + ' ', signature(raw), ENV.STRIPE_WEBHOOK_SECRET, NOW), false);
  assert.equal(await verifyStripeSignature(raw, signature(raw), ENV.STRIPE_WEBHOOK_SECRET, NOW + 301000), false);
  assert.equal(await verifyStripeSignature(raw, signature(raw) + ',v1=' + '0'.repeat(64), ENV.STRIPE_WEBHOOK_SECRET, NOW), true);
});
test('unsigned webhooks and forged success URLs cannot grant ownership', async () => {
  const f = fixture();
  assert.equal((await f.request('/stripe-webhook', { method: 'POST', body: event() })).status, 400);
  const me = await (await f.request('/me?checkout=complete&owned=true')).json();
  assert.equal(me.owned, false); assert.equal(f.rows.size, 0);
});
test('authenticated backend rejects unauthorized and cross-origin requests', async () => {
  const f = fixture();
  assert.equal((await f.request('/me', { token: 'forged' })).status, 401);
  assert.equal((await f.request('/me', { origin: 'https://evil.example' })).status, 403);
  assert.equal(f.rows.size, 0);
});
test('a completed verified payment unlocks once; repeated delivery is idempotent', async () => {
  const f = fixture();
  assert.equal((await webhook(f)).status, 200);
  assert.equal((await webhook(f)).status, 200);
  assert.equal(f.rows.size, 1);
  assert.equal((await (await f.request('/me')).json()).owned, true);
  assert.equal((await f.request('/checkout', { method: 'POST' })).status, 409);
});
test('pending, wrong-product, wrong-price and unsettled checkouts never unlock', async () => {
  for (const mutate of [s => { s.payment_status = 'unpaid'; }, s => { s.line_items.data[0].price.id = 'price_other'; }, s => { s.amount_total = 1; }, s => { s.payment_intent.status = 'processing'; }]) {
    const session = paidSession(); mutate(session); const f = fixture({ session });
    await webhook(f); assert.equal(f.rows.size, 0);
  }
});
test('full refund revokes; delayed checkout event cannot restore a refunded charge', async () => {
  const f = fixture(); await webhook(f);
  assert.equal((await webhook(f, event('charge.refunded', { id: 'ch_purchase' }, NOW / 1000 + 1))).status, 200);
  assert.equal((await (await f.request('/me')).json()).owned, false);
  const refunded = paidSession(); refunded.payment_intent.latest_charge.refunded = true;
  const delayed = fixture({ session: refunded }); await webhook(delayed);
  assert.equal((await (await delayed.request('/me')).json()).owned, false);
});
test('partial refunds preserve access; a test/live environment mismatch is rejected', async () => {
  const f = fixture({ partialRefund: true }); await webhook(f);
  await webhook(f, event('charge.refunded', { id: 'ch_purchase' }, NOW / 1000 + 1));
  assert.equal((await (await f.request('/me')).json()).owned, true);
  const e = event(); e.livemode = true;
  assert.equal((await webhook(f, e)).status, 400);
});
test('sandbox purchases remain separate when real payments are enabled', async () => {
  const sandbox = fixture();
  assert.equal((await webhook(sandbox)).status, 200);
  assert.equal((await (await sandbox.request('/me')).json()).owned, true);
  const live = fixture({ rows: sandbox.rows, env: { PAYMENTS_LIVE: 'true' } });
  assert.equal((await (await live.request('/me')).json()).owned, false);
  assert.equal((await live.request('/checkout', { method: 'POST' })).status, 200);
  const liveEvent = event('checkout.session.completed', { id: 'cs_live_checkout' }); liveEvent.livemode = true;
  assert.equal((await webhook(live, liveEvent)).status, 200);
  assert.equal(live.rows.size, 2);
  assert.equal((await (await live.request('/me')).json()).owned, true);
  assert.equal((await (await sandbox.request('/me')).json()).owned, true);
});
test('checkout and fulfillment reject Stripe objects from the wrong environment', async () => {
  const wrongPriceMode = fixture({ priceLive: true });
  assert.equal((await (await wrongPriceMode.request('/public-config')).json()).checkoutReady, false);
  assert.equal((await wrongPriceMode.request('/checkout', { method: 'POST' })).status, 503);
  assert.equal(wrongPriceMode.calls.some(call => call.url.endsWith('/checkout/sessions')), false);
  const wrongCheckoutMode = fixture({ checkoutLive: true });
  assert.equal((await wrongCheckoutMode.request('/checkout', { method: 'POST' })).status, 503);
  const wrongFulfillmentMode = fixture({ env: { PAYMENTS_LIVE: 'true' }, session: paidSession(false) });
  const liveEvent = event(); liveEvent.livemode = true;
  assert.equal((await webhook(wrongFulfillmentMode, liveEvent)).status, 400);
  assert.equal(wrongFulfillmentMode.rows.size, 0);
});
test('client cannot choose a cheaper product; unconfigured checkout stays disabled', async () => {
  const f = fixture();
  assert.equal((await f.request('/checkout', { method: 'POST', body: { price: 'cheap', amount: 1, user_id: OTHER } })).status, 200);
  assert.equal((await (await f.request('/public-config')).json()).paymentsLive, false);
  const disabled = fixture({ env: { COMMERCE_ENABLED: 'false' } });
  assert.equal((await (await disabled.request('/public-config')).json()).checkoutReady, false);
  assert.equal((await disabled.request('/checkout', { method: 'POST' })).status, 503);
  assert.equal(disabled.calls.filter(call => call.url.includes('stripe.com')).length, 0);
  const wrongPrice = fixture({ price: 199 });
  assert.equal((await wrongPrice.request('/checkout', { method: 'POST' })).status, 503);
});
test('Google Play requires PURCHASED state, correct product and an account binding policy', () => {
  const base = { purchaseStateContext: { purchaseState: 'PURCHASED' }, productLineItem: [{ productId: 'full_content_upgrade' }], obfuscatedExternalAccountId: 'bound-account' };
  assert.equal(playPurchaseState(base, 'bound-account'), true);
  assert.throws(() => playPurchaseState(base, 'other-account'));
  assert.throws(() => playPurchaseState({ ...base, purchaseStateContext: { purchaseState: 'PENDING' } }, 'bound-account'));
  assert.throws(() => playPurchaseState({ ...base, productLineItem: [{ productId: 'other' }] }, 'bound-account'));
  assert.throws(() => playPurchaseState({ ...base, testPurchaseContext: {} }, 'bound-account'));
  assert.throws(() => playPurchaseState({ ...base, obfuscatedExternalAccountId: undefined }, 'account'));
});
test('a server-signed offline licence rejects tampering, expiry and another account/site', async () => {
  const keys = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const privateKey = await crypto.subtle.exportKey('jwk', keys.privateKey), publicKey = await crypto.subtle.exportKey('jwk', keys.publicKey);
  const license = await signLicense(privateKey, USER, AUDIENCE, NOW);
  assert.ok(await verifyLicense(license, publicKey, AUDIENCE, USER, NOW));
  assert.equal(await verifyLicense(license, publicKey, AUDIENCE, OTHER, NOW), null);
  assert.equal(await verifyLicense(license, publicKey, 'https://evil.example/', USER, NOW), null);
  assert.equal(await verifyLicense(license, publicKey, AUDIENCE, USER, NOW + 72 * 3600000), null);
  const [header, payload, signature] = license.split('.');
  const changed = Buffer.from(JSON.stringify({ ...JSON.parse(Buffer.from(payload, 'base64url')), sub: OTHER })).toString('base64url');
  assert.equal(await verifyLicense([header, changed, signature].join('.'), publicKey, AUDIENCE, OTHER, NOW), null);
});
test('a Play receipt cannot be claimed by two accounts and an outage is not a revocation', async () => {
  const keys = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const pem = '-----BEGIN PRIVATE KEY-----\n' + Buffer.from(await crypto.subtle.exportKey('pkcs8', keys.privateKey)).toString('base64') + '\n-----END PRIVATE KEY-----';
  const env = { GOOGLE_SERVICE_ACCOUNT_JSON: JSON.stringify({ client_email: 'test@example.invalid', private_key: pem }), ALLOW_LEGACY_PLAY_LINKING: 'true' };
  const f = fixture({ env }); const purchaseToken = 'test-purchase-token-at-least-sixteen-characters';
  assert.equal((await f.request('/google-play/claim', { method: 'POST', body: { purchaseToken } })).status, 200);
  assert.equal(f.rows.size, 1);
  // Database binding rejects a concurrent/replayed claim under another account.
  const row = [...f.rows.values()][0]; row.user_id = OTHER;
  assert.equal((await f.request('/google-play/claim', { method: 'POST', body: { purchaseToken } })).status, 409);
  const outage = fixture({ env, googleOutage: true });
  outage.rows.set('google_play:receipt', { provider: 'google_play', reference: 'receipt', user_id: USER, status: 'active', provider_token: purchaseToken, event_time: 0, livemode: false });
  assert.equal((await outage.request('/me')).status, 503);
  assert.equal([...outage.rows.values()][0].status, 'active');
});
