// Dependency-free Web API code shared by the Supabase Edge Function and tests.
const PRODUCT = 'full_content_upgrade';
const PACKAGE = 'com.rbgames.perigeepanic';
const encode = value => new TextEncoder().encode(value);
const b64url = value => btoa(String.fromCharCode(...value)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
const decode64 = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
const uuid = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
class HttpError extends Error { constructor(status, message) { super(message); this.status = status; } }
function ensure(condition, status, message) { if (!condition) throw new HttpError(status, message); }

export async function verifyStripeSignature(rawBody, header, secret, now = Date.now()) {
  if (!secret || !header || rawBody.length > 1048576) return false;
  const parts = header.split(',').map(part => part.trim().split('='));
  const timestamps = parts.filter(([key]) => key === 't');
  if (timestamps.length !== 1 || !/^\d+$/.test(timestamps[0][1])) return false;
  const timestamp = Number(timestamps[0][1]);
  if (Math.abs(now / 1000 - timestamp) > 300) return false;
  const signatures = parts.filter(([key, value]) => key === 'v1' && /^[a-f0-9]{64}$/.test(value)).map(([, value]) => value);
  const key = await crypto.subtle.importKey('raw', encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const expected = new Uint8Array(await crypto.subtle.sign('HMAC', key, encode(timestamp + '.' + rawBody)));
  return signatures.some(value => {
    let different = 0;
    for (let i = 0; i < expected.length; i++) different |= expected[i] ^ parseInt(value.slice(i * 2, i * 2 + 2), 16);
    return different === 0;
  });
}
export function playPurchaseState(purchase, accountId, allowLegacy = false, allowTest = false) {
  ensure(purchase?.purchaseStateContext?.purchaseState === 'PURCHASED', 409, 'This Google Play purchase is not completed or has been cancelled.');
  ensure(purchase.productLineItem?.some(item => item.productId === PRODUCT && item.productOfferDetails?.consumptionState !== 'CONSUMPTION_STATE_CONSUMED'), 409, 'This purchase is not the cosmetic upgrade.');
  ensure(!purchase.testPurchaseContext || allowTest, 409, 'Test purchases cannot unlock the live browser game.');
  if (purchase.obfuscatedExternalAccountId) ensure(purchase.obfuscatedExternalAccountId === accountId, 403, 'This purchase belongs to a different game account.');
  else ensure(allowLegacy, 409, 'Contact support to link this older purchase.');
  return true;
}
// The current Cordova 13 store supplies an App Store application receipt.
// Validate it only on the server. Never trust a transaction id or client flag.
// Keep this adapter isolated for migration to App Store Server API / StoreKit 2.
export function applePurchaseState(result, userId, transactionId) {
  ensure(result?.status === 0 && result.receipt?.bundle_id === PACKAGE, 409, 'Apple could not verify a purchase for this game.');
  ensure(['Production', 'Sandbox'].includes(result.environment), 409, 'Unknown App Store purchase environment.');
  const purchases = result.receipt.in_app;
  ensure(Array.isArray(purchases), 409, 'No Extras Pack purchase was found in this App Store receipt.');
  const matches = purchases.filter(item => item.product_id === PRODUCT && !item.cancellation_date && !item.cancellation_date_ms && String(item.quantity) === '1' && /^\d{1,30}$/.test(String(item.original_transaction_id || '')) && (!transactionId || item.transaction_id === transactionId || item.original_transaction_id === transactionId));
  const purchase = matches.sort((a, b) => Number(b.purchase_date_ms || 0) - Number(a.purchase_date_ms || 0))[0];
  ensure(purchase, 409, 'This Extras Pack purchase is missing or has been refunded.');
  if (purchase.app_account_token) ensure(purchase.app_account_token.toLowerCase() === userId.toLowerCase(), 403, 'This purchase belongs to a different RB Games account.');
  return { reference: String(purchase.original_transaction_id), livemode: result.environment === 'Production' };
}
export async function signLicense(privateJwk, userId, audience, now = Date.now()) {
  const seconds = Math.floor(now / 1000);
  const header = b64url(encode(JSON.stringify({ alg: 'ES256', typ: 'JWT' })));
  const payload = b64url(encode(JSON.stringify({ sub: userId, aud: audience, entitlement: PRODUCT, iat: seconds, exp: seconds + 72 * 3600 })));
  const key = await crypto.subtle.importKey('jwk', privateJwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, encode(header + '.' + payload));
  return header + '.' + payload + '.' + b64url(new Uint8Array(signature));
}
export function createHandler(env, { fetcher = fetch, clock = Date.now } = {}) {
  let googleCredential;
  let priceCache;
  const paymentsLive = () => env.PAYMENTS_LIVE === 'true';
  const ready = () => !!(env.STRIPE_SECRET_KEY && env.STRIPE_PRICE_ID && env.STRIPE_WEBHOOK_SECRET && env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY && env.WEB_GAME_URL && env.COMMERCE_ENABLED === 'true');
  const allowedOrigin = () => new URL(env.WEB_GAME_URL).origin;
  // Cordova has no web origin (or uses its local app origin). These are not
  // credentials: all private routes still validate the user's Supabase session.
  const nativeOrigins = new Set(['null', 'app://localhost', 'ionic://localhost', 'http://localhost', 'https://localhost']);
  async function externalJson(url, init = {}, errorStatus = 503) {
    const response = await fetcher(url, { ...init, signal: AbortSignal.timeout(15000) });
    let data; try { data = await response.json(); } catch { data = null; }
    ensure(response.ok, errorStatus, 'The purchase service is temporarily unavailable.');
    return data;
  }
  const database = (path, options = {}) => externalJson(env.SUPABASE_URL + '/rest/v1/' + path, {
    ...options, headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: 'Bearer ' + env.SUPABASE_SERVICE_ROLE_KEY, 'Content-Type': 'application/json', Prefer: 'return=representation', ...options.headers }
  });
  const stripe = (path, options = {}) => externalJson('https://api.stripe.com/v1/' + path, {
    ...options, headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, ...(env.STRIPE_API_VERSION ? { 'Stripe-Version': env.STRIPE_API_VERSION } : {}), ...options.headers }
  });
  const purchasesFor = userId => database('pp_purchases?user_id=eq.' + encodeURIComponent(userId) + '&livemode=eq.' + paymentsLive() + '&select=provider,reference,status,provider_token,livemode');
  async function record(provider, reference, userId, status, providerToken = null, eventTime = Math.floor(clock() / 1000), livemode = paymentsLive()) {
    const response = await fetcher(env.SUPABASE_URL + '/rest/v1/rpc/pp_record_purchase', {
      method: 'POST', headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: 'Bearer ' + env.SUPABASE_SERVICE_ROLE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_provider: provider, p_reference: reference, p_user_id: userId, p_status: status, p_token: providerToken, p_event_time: eventTime, p_livemode: livemode }), signal: AbortSignal.timeout(15000)
    });
    ensure(response.status !== 409, 409, 'This purchase is already linked to another account.');
    ensure(response.ok, 503, 'Purchase could not be saved. Please try again.');
  }
  async function authenticate(request) {
    ensure(env.SUPABASE_URL && env.SUPABASE_ANON_KEY, 503, 'Accounts are not connected yet.');
    const authorization = request.headers.get('Authorization');
    ensure(authorization && /^Bearer [^\s]+$/.test(authorization), 401, 'Sign in to continue.');
    // Never authorize by decoding a user-supplied JWT. Auth validates its
    // signature, expiry and the current account with the project server.
    const user = await externalJson(env.SUPABASE_URL + '/auth/v1/user', { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: authorization } }, 401);
    ensure(uuid(user?.id) && user.email && user.email_confirmed_at, 401, 'A verified email account is required.');
    return user;
  }
  async function getPrice() {
    if (priceCache && priceCache.until > clock()) return priceCache.value;
    const price = await stripe('prices/' + encodeURIComponent(env.STRIPE_PRICE_ID));
    ensure(price.active === true && price.type === 'one_time' && price.currency === 'eur' && price.unit_amount === 299 && price.livemode === paymentsLive(), 503, 'The cosmetic pack price needs to be configured for this payment environment.');
    priceCache = { until: clock() + 60000, value: { amount: price.unit_amount, currency: price.currency } };
    return priceCache.value;
  }
  async function googleAccessToken() {
    ensure(env.GOOGLE_SERVICE_ACCOUNT_JSON, 503, 'Google Play purchase linking is not connected yet.');
    if (googleCredential?.until > clock() + 60000) return googleCredential.token;
    const account = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const now = Math.floor(clock() / 1000);
    const header = b64url(encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
    const payload = b64url(encode(JSON.stringify({ iss: account.client_email, scope: 'https://www.googleapis.com/auth/androidpublisher', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })));
    const pem = account.private_key.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, '');
    const key = await crypto.subtle.importKey('pkcs8', decode64(pem), { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
    const signature = b64url(new Uint8Array(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, encode(header + '.' + payload))));
    const data = await externalJson('https://oauth2.googleapis.com/token', { method: 'POST', body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: header + '.' + payload + '.' + signature }) });
    ensure(data.access_token, 503, 'Google Play is temporarily unavailable.');
    googleCredential = { token: data.access_token, until: clock() + data.expires_in * 1000 };
    return googleCredential.token;
  }
  const accountHash = async userId => b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', encode('perigee:' + userId))));
  async function verifyPlay(purchaseToken, userId, acknowledge = false) {
    const accessToken = await googleAccessToken();
    const base = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications/' + PACKAGE;
    const response = await fetcher(base + '/purchases/productsv2/tokens/' + encodeURIComponent(purchaseToken), { headers: { Authorization: 'Bearer ' + accessToken }, signal: AbortSignal.timeout(15000) });
    ensure(response.ok, response.status === 404 || response.status === 410 ? 409 : 503, 'Google Play could not verify this purchase.');
    const purchase = await response.json();
    playPurchaseState(purchase, await accountHash(userId), env.ALLOW_LEGACY_PLAY_LINKING === 'true', env.ALLOW_TEST_PURCHASES === 'true' && !paymentsLive());
    if (acknowledge && purchase.acknowledgementState === 'ACKNOWLEDGEMENT_STATE_PENDING') {
      await externalJson(base + '/purchases/products/' + PRODUCT + '/tokens/' + encodeURIComponent(purchaseToken) + ':acknowledge', { method: 'POST', headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type': 'application/json' }, body: '{}' });
    }
    return purchase;
  }
  async function verifyApple(receiptData, userId, transactionId) {
    ensure(env.APPLE_LINKING_ENABLED === 'true', 503, 'App Store account linking is not available yet. Your App Store purchase still works in this app.');
    const payload = JSON.stringify({ 'receipt-data': receiptData, ...(env.APPLE_RECEIPT_SHARED_SECRET ? { password: env.APPLE_RECEIPT_SHARED_SECRET } : {}) });
    const send = url => externalJson(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload });
    let result = await send('https://buy.itunes.apple.com/verifyReceipt');
    if (result.status === 21007) result = await send('https://sandbox.itunes.apple.com/verifyReceipt');
    ensure(![21000, 21004, 21005, 21009].includes(result.status) && !(result.status >= 21100 && result.status <= 21199), 503, 'Apple purchase verification is temporarily unavailable.');
    return applePurchaseState(result, userId, transactionId);
  }
  async function me(user, native = false) {
    let purchases = await purchasesFor(user.id);
    // TestFlight/App Review receipts may unlock the native test build, never
    // the production website. Stripe and Play retain their normal mode checks.
    if (native && paymentsLive()) {
      const sandbox = await database('pp_purchases?user_id=eq.' + encodeURIComponent(user.id) + '&livemode=eq.false&provider=eq.apple_appstore&select=provider,reference,status,provider_token,livemode');
      purchases = [...purchases, ...sandbox];
    }
    // Recheck linked Play receipts whenever ownership is restored. Network
    // failure never writes a revocation or generates a fresh offline licence.
    for (const row of purchases.filter(row => row.provider === 'google_play')) {
      try { await verifyPlay(row.provider_token, user.id); if (row.status !== 'active') await record(row.provider, row.reference, user.id, 'active', row.provider_token); row.status = 'active'; }
      catch (error) {
        if (error.status === 409) { await record(row.provider, row.reference, user.id, 'revoked', row.provider_token); row.status = 'revoked'; }
        else throw error;
      }
    }
    for (const row of purchases.filter(row => row.provider === 'apple_appstore')) {
      try {
        const verified = await verifyApple(row.provider_token, user.id, row.reference);
        ensure(verified.reference === row.reference && verified.livemode === row.livemode, 409, 'App Store purchase environment changed.');
        if (row.status !== 'active') await record(row.provider, row.reference, user.id, 'active', row.provider_token, Math.floor(clock() / 1000), row.livemode);
        row.status = 'active';
      } catch (error) {
        if (error.status === 409) { await record(row.provider, row.reference, user.id, 'revoked', row.provider_token, Math.floor(clock() / 1000), row.livemode); row.status = 'revoked'; }
        else throw error;
      }
    }
    const owned = purchases.some(row => row.status === 'active');
    const productionOwned = purchases.some(row => row.status === 'active' && row.livemode === paymentsLive());
    const license = productionOwned && env.LICENSE_PRIVATE_JWK ? await signLicense(JSON.parse(env.LICENSE_PRIVATE_JWK), user.id, env.WEB_GAME_URL, clock()) : null;
    return { owned, product: PRODUCT, license, user: { id: user.id, email: user.email } };
  }
  async function createCheckout(user) {
    ensure(ready(), 503, 'Browser purchases are not available yet.');
    await getPrice();
    const ownership = await me(user);
    ensure(!ownership.owned, 409, 'You already own this pack. Restore it instead.');
    const data = new URLSearchParams({ mode: 'payment', 'line_items[0][price]': env.STRIPE_PRICE_ID, 'line_items[0][quantity]': '1', client_reference_id: user.id,
      customer_email: user.email, 'metadata[account_id]': user.id, 'metadata[product_id]': PRODUCT,
      'payment_intent_data[metadata][account_id]': user.id, 'payment_intent_data[metadata][product_id]': PRODUCT,
      success_url: env.WEB_GAME_URL + '?checkout=complete', cancel_url: env.WEB_GAME_URL + '?checkout=cancelled' });
    const result = await stripe('checkout/sessions', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Idempotency-Key': 'perigee-' + (paymentsLive() ? 'live-' : 'test-') + env.STRIPE_PRICE_ID + '-' + user.id + '-' + Math.floor(clock() / 600000) }, body: data });
    ensure(result.livemode === paymentsLive(), 503, 'Checkout is configured for the wrong payment environment.');
    ensure(result.url?.startsWith('https://checkout.stripe.com/'), 503, 'Checkout could not be opened.');
    return { url: result.url };
  }
  async function processWebhook(request) {
    ensure(ready(), 503, 'Payments are not connected yet.');
    const contentLength = Number(request.headers.get('content-length') || 0);
    ensure(contentLength <= 1048576, 413, 'Request too large.');
    const raw = await request.text();
    ensure(await verifyStripeSignature(raw, request.headers.get('stripe-signature'), env.STRIPE_WEBHOOK_SECRET, clock()), 400, 'Invalid payment signature.');
    let event; try { event = JSON.parse(raw); } catch { throw new HttpError(400, 'Invalid payment event.'); }
    ensure(event.livemode === paymentsLive(), 400, 'Wrong payment environment.');
    if (['checkout.session.completed', 'checkout.session.async_payment_succeeded'].includes(event.type)) {
      const id = event.data?.object?.id;
      ensure(typeof id === 'string' && /^cs_[a-zA-Z0-9_]+$/.test(id), 400, 'Invalid checkout event.');
      // Retrieve authoritative current state, including refund/dispute state.
      // Late/duplicate events cannot reactivate a refunded payment.
      const session = await stripe('checkout/sessions/' + encodeURIComponent(id) + '?expand[]=line_items&expand[]=payment_intent.latest_charge');
      ensure(session.livemode === paymentsLive(), 400, 'Wrong payment environment.');
      if (session.payment_status !== 'paid') return { received: true, pending: true };
      const owner = session.client_reference_id;
      const lines = session.line_items?.data || [];
      ensure(session.mode === 'payment' && uuid(owner) && owner === session.metadata?.account_id && session.metadata.product_id === PRODUCT, 400, 'Payment is not a game upgrade.');
      ensure(lines.length === 1 && !session.line_items.has_more && lines[0].price?.id === env.STRIPE_PRICE_ID && lines[0].quantity === 1 && session.currency === 'eur' && session.amount_total === 299, 400, 'Payment product or amount does not match.');
      const intent = session.payment_intent;
      const charge = intent?.latest_charge;
      ensure(intent?.status === 'succeeded' && typeof charge === 'object' && charge?.paid === true && intent.id?.startsWith('pi_'), 400, 'Payment has not settled.');
      const revoked = charge.refunded === true || charge.disputed === true || charge.amount_refunded >= charge.amount;
      await record('stripe', intent.id, owner, revoked ? 'revoked' : 'active', null, event.created);
    } else if (['charge.refunded', 'charge.dispute.created', 'charge.dispute.closed'].includes(event.type)) {
      const object = event.data?.object;
      const chargeId = event.type === 'charge.refunded' ? object?.id : object?.charge;
      ensure(typeof chargeId === 'string' && /^ch_[a-zA-Z0-9]+$/.test(chargeId), 400, 'Invalid charge event.');
      const charge = await stripe('charges/' + encodeURIComponent(chargeId));
      const intentId = typeof charge.payment_intent === 'string' ? charge.payment_intent : charge.payment_intent?.id;
      ensure(typeof intentId === 'string' && /^pi_[a-zA-Z0-9]+$/.test(intentId), 400, 'Invalid payment reference.');
      const rows = await database('pp_purchases?provider=eq.stripe&reference=eq.' + encodeURIComponent(intentId) + '&livemode=eq.' + paymentsLive() + '&select=user_id');
      // Disputes stay suspended until support review. Partial refunds preserve
      // access; full refunds revoke it. Another valid purchase still grants it.
      if (charge.refunded || charge.disputed || charge.amount_refunded >= charge.amount) {
        for (const row of rows) await record('stripe', intentId, row.user_id, 'revoked', null, event.created);
      }
    }
    return { received: true };
  }
  return async request => {
    const origin = request.headers.get('origin');
    let responseHeaders = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', Vary: 'Origin' };
    try {
      ensure(env.WEB_GAME_URL && /^https:\/\//.test(env.WEB_GAME_URL) && env.WEB_GAME_URL.endsWith('/'), 503, 'Web accounts are not configured yet.');
      const path = new URL(request.url).pathname.replace(/^.*\/perigee-api/, '');
      const nativeRoute = ['/public-config', '/native/me', '/google-play/claim', '/apple/claim', '/account'].includes(path);
      ensure(!origin || origin === allowedOrigin() || (nativeRoute && nativeOrigins.has(origin)), 403, 'This website is not allowed.');
      if (origin) responseHeaders = { ...responseHeaders, 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'authorization, content-type, apikey', 'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS' };
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: responseHeaders });
      let result;
      if (request.method === 'GET' && path === '/public-config') {
        let price = null; if (ready()) { try { price = await getPrice(); } catch { /* Unavailable price keeps checkout disabled. */ } }
        result = { checkoutReady: ready() && !!price, paymentsLive: paymentsLive(), price, product: PRODUCT, playLinkingReady: !!env.GOOGLE_SERVICE_ACCOUNT_JSON, appleLinkingReady: env.APPLE_LINKING_ENABLED === 'true', nativeAccountsReady: true };
      } else if (request.method === 'POST' && path === '/stripe-webhook') result = await processWebhook(request);
      else if (request.method === 'GET' && path === '/me') result = await me(await authenticate(request));
      else if (request.method === 'GET' && path === '/native/me') result = await me(await authenticate(request), true);
      else if (request.method === 'DELETE' && path === '/account') {
        const user = await authenticate(request);
        ensure(request.headers.get('content-type')?.includes('application/json'), 400, 'Confirm account deletion in the account screen.');
        const body = await request.text();
        ensure(body.length < 256, 413, 'Request too large.');
        let confirmation; try { confirmation = JSON.parse(body); } catch { throw new HttpError(400, 'Invalid account request.'); }
        ensure(confirmation.confirm === 'DELETE MY ACCOUNT', 400, 'Confirm account deletion in the account screen.');
        const response = await fetcher(env.SUPABASE_URL + '/auth/v1/admin/users/' + user.id, { method: 'DELETE', headers: { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: 'Bearer ' + env.SUPABASE_SERVICE_ROLE_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ should_soft_delete: false }), signal: AbortSignal.timeout(15000) });
        ensure(response.ok, 503, 'Account deletion could not be completed. Please try again.');
        result = { deleted: true };
      }
      else if (request.method === 'POST' && path === '/checkout') result = await createCheckout(await authenticate(request));
      else if (request.method === 'POST' && path === '/google-play/claim') {
        const user = await authenticate(request);
        ensure(Number(request.headers.get('content-length') || 0) <= 16384, 413, 'Request too large.');
        const raw = await request.text(); ensure(raw.length <= 16384, 413, 'Request too large.');
        let data; try { data = JSON.parse(raw); } catch { throw new HttpError(400, 'Invalid purchase request.'); }
        ensure(typeof data.purchaseToken === 'string' && data.purchaseToken.length >= 16 && data.purchaseToken.length <= 8192 && !/\s/.test(data.purchaseToken), 400, 'A valid purchase token is required.');
        const purchase = await verifyPlay(data.purchaseToken, user.id, true);
        const reference = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', encode(data.purchaseToken))));
        await record('google_play', reference, user.id, 'active', data.purchaseToken, Math.floor(clock() / 1000), !purchase.testPurchaseContext);
        result = await me(user);
      } else if (request.method === 'POST' && path === '/apple/claim') {
        const user = await authenticate(request);
        ensure(Number(request.headers.get('content-length') || 0) <= 262144, 413, 'Request too large.');
        const raw = await request.text(); ensure(raw.length <= 262144, 413, 'Request too large.');
        let data; try { data = JSON.parse(raw); } catch { throw new HttpError(400, 'Invalid purchase request.'); }
        ensure(typeof data.receiptData === 'string' && data.receiptData.length >= 16 && data.receiptData.length <= 240000 && /^[A-Za-z0-9+/]+={0,2}$/.test(data.receiptData), 400, 'A valid App Store receipt is required.');
        const purchase = await verifyApple(data.receiptData, user.id);
        await record('apple_appstore', purchase.reference, user.id, 'active', data.receiptData, Math.floor(clock() / 1000), purchase.livemode);
        result = await me(user, true);
      } else throw new HttpError(404, 'Not found.');
      return new Response(JSON.stringify(result), { headers: responseHeaders });
    } catch (error) {
      // Never return provider response bodies, keys, purchase tokens or stack
      // traces. Log a status code only; payment references stay in the database.
      return new Response(JSON.stringify({ error: error instanceof HttpError ? error.message : 'The service is temporarily unavailable.' }), { status: error.status || 503, headers: responseHeaders });
    }
  };
}
