import test from 'node:test';
import assert from 'node:assert/strict';
import { createHandler, applePurchaseState } from '../supabase/functions/_shared/perigee-api.mjs';

const USER = '11111111-1111-4111-8111-111111111111';
const OTHER = '22222222-2222-4222-8222-222222222222';
const NOW = 1793354400000;
const RECEIPT = 'MIIAppStoreReceiptBase64TestData0000';
const ENV = { WEB_GAME_URL: 'https://rbgames.dev/play/', SUPABASE_URL: 'https://test.supabase.co', SUPABASE_ANON_KEY: 'public-test', SUPABASE_SERVICE_ROLE_KEY: 'private-test', PAYMENTS_LIVE: 'true', APPLE_LINKING_ENABLED: 'true' };
const validApple = () => ({ status: 0, environment: 'Production', receipt: { bundle_id: 'com.rbgames.perigeepanic', in_app: [{ product_id: 'full_content_upgrade', quantity: '1', transaction_id: '10000000000002', original_transaction_id: '10000000000001', purchase_date_ms: '1793350000000' }] } });
function fixture(options = {}) {
  const rows = options.rows || new Map(), calls = [];
  let currentApple = options.apple || validApple();
  const fetcher = async (url, init = {}) => {
    url = String(url); calls.push({ url, method: init.method || 'GET' });
    if (url.endsWith('/auth/v1/user')) return Response.json({ id: options.user || USER, email: 'player@example.test', email_confirmed_at: '2026-01-01' }, { status: init.headers.Authorization === 'Bearer valid' ? 200 : 401 });
    if (url.includes('/auth/v1/admin/users/')) { rows.clear(); return Response.json({ id: options.user || USER }); }
    if (url === 'https://buy.itunes.apple.com/verifyReceipt') {
      assert.equal(JSON.parse(init.body)['receipt-data'], RECEIPT);
      return Response.json(options.sandbox ? { status: 21007 } : currentApple);
    }
    if (url === 'https://sandbox.itunes.apple.com/verifyReceipt') return Response.json({ ...currentApple, environment: 'Sandbox' });
    if (url.includes('/rpc/pp_record_purchase')) {
      const data = JSON.parse(init.body), key = `${data.p_provider}:${data.p_reference}:${data.p_livemode}`;
      const previous = rows.get(key);
      if (previous && previous.user_id !== data.p_user_id) return Response.json({}, { status: 409 });
      rows.set(key, { provider: data.p_provider, reference: data.p_reference, user_id: data.p_user_id, status: data.p_status, provider_token: data.p_token, livemode: data.p_livemode });
      return Response.json(null);
    }
    if (url.includes('/rest/v1/pp_purchases?')) {
      const query = new URL(url).searchParams;
      return Response.json([...rows.values()].filter(row => row.user_id === query.get('user_id')?.slice(3) && String(row.livemode) === query.get('livemode')?.slice(3) && (!query.has('provider') || row.provider === query.get('provider')?.slice(3))));
    }
    throw new Error('Unexpected provider call');
  };
  const handler = createHandler({ ...ENV, ...options.env }, { fetcher, clock: () => NOW });
  return { rows, calls, setApple: value => { currentApple = value; }, request: (path, method = 'GET', body, token = 'valid', origin = 'app://localhost') => handler(new Request('https://test.supabase.co/functions/v1/perigee-api' + path, { method, headers: { Origin: origin, Authorization: 'Bearer ' + token, ...(body ? { 'Content-Type': 'application/json' } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) })) };
}

test('Apple receipt verification rejects the wrong game, product, account, cancellation and invalid data', () => {
  assert.deepEqual(applePurchaseState(validApple(), USER), { reference: '10000000000001', livemode: true });
  for (const modify of [r => { r.status = 21010; }, r => { r.receipt.bundle_id = 'another.app'; }, r => { r.receipt.in_app[0].product_id = 'another_pack'; }, r => { r.receipt.in_app[0].cancellation_date_ms = '1793350010000'; }, r => { r.receipt.in_app[0].app_account_token = OTHER; }, r => { r.environment = 'Fake'; }, r => { r.receipt.in_app[0].original_transaction_id = 'not-an-apple-id'; }, r => { r.receipt.in_app[0].quantity = '0'; }]) {
    const value = validApple(); modify(value); assert.throws(() => applePurchaseState(value, USER));
  }
  assert.throws(() => applePurchaseState(validApple(), USER, '90000000000001'));
});

test('Apple linking verifies with Apple and grants only authenticated account ownership', async () => {
  const f = fixture();
  assert.equal((await f.request('/apple/claim', 'POST', { receiptData: RECEIPT }, 'invalid')).status, 401);
  assert.equal(f.rows.size, 0);
  const response = await f.request('/apple/claim', 'POST', { receiptData: RECEIPT, owned: true, userId: OTHER });
  assert.equal(response.status, 200); assert.equal((await response.json()).owned, true);
  assert.equal([...f.rows.values()][0].user_id, USER);
  assert.ok(f.calls.some(call => call.url === 'https://buy.itunes.apple.com/verifyReceipt'));
  const me = await (await f.request('/me', 'GET', undefined, 'valid', 'https://rbgames.dev')).json();
  assert.equal(me.owned, true); assert.equal(me.provider_token, undefined); assert.equal(me.receiptData, undefined);
});

test('one App Store purchase cannot be claimed by two accounts, including repeated receipts', async () => {
  const rows = new Map(), first = fixture({ rows }), second = fixture({ rows, user: OTHER });
  assert.equal((await first.request('/apple/claim', 'POST', { receiptData: RECEIPT })).status, 200);
  assert.equal((await first.request('/apple/claim', 'POST', { receiptData: RECEIPT })).status, 200);
  assert.equal(rows.size, 1);
  assert.equal((await second.request('/apple/claim', 'POST', { receiptData: RECEIPT })).status, 409);
  assert.equal([...rows.values()][0].user_id, USER);
});

test('TestFlight receipts are usable in the native test build and never grant production web ownership', async () => {
  const f = fixture({ sandbox: true });
  const linked = await (await f.request('/apple/claim', 'POST', { receiptData: RECEIPT })).json();
  assert.equal(linked.owned, true); assert.equal(linked.license, null);
  assert.equal([...f.rows.values()][0].livemode, false);
  assert.equal((await (await f.request('/me', 'GET', undefined, 'valid', 'https://rbgames.dev')).json()).owned, false);
  assert.equal((await (await f.request('/native/me')).json()).owned, true);
  assert.ok(f.calls.some(call => call.url === 'https://sandbox.itunes.apple.com/verifyReceipt'));
});

test('refunded Apple purchases revoke and temporary provider failures do not overwrite ownership', async () => {
  const f = fixture();
  await f.request('/apple/claim', 'POST', { receiptData: RECEIPT });
  f.setApple({ status: 21005 });
  assert.equal((await f.request('/native/me')).status, 503); assert.equal([...f.rows.values()][0].status, 'active');
  const refunded = validApple(); refunded.receipt.in_app[0].cancellation_date = '2026-11-03'; f.setApple(refunded);
  assert.equal((await (await f.request('/native/me')).json()).owned, false); assert.equal([...f.rows.values()][0].status, 'revoked');
});

test('native origins can restore accounts but cannot start Stripe checkout; arbitrary websites are rejected', async () => {
  const f = fixture();
  for (const origin of ['null', 'app://localhost', 'ionic://localhost', 'http://localhost', 'https://localhost']) {
    const response = await f.request('/native/me', 'GET', undefined, 'valid', origin);
    assert.equal(response.status, 200); assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
    assert.equal((await f.request('/checkout', 'POST', {}, 'valid', origin)).status, 403);
  }
  assert.equal((await f.request('/native/me', 'GET', undefined, 'valid', 'https://evil.example')).status, 403);
});

test('account deletion requires an authenticated explicit confirmation and never accepts another user id', async () => {
  const f = fixture();
  assert.equal((await f.request('/account', 'DELETE', { confirm: 'DELETE MY ACCOUNT' }, 'invalid')).status, 401);
  assert.equal((await f.request('/account', 'DELETE', { confirm: 'yes' })).status, 400);
  assert.equal(f.calls.some(call => call.method === 'DELETE'), false);
  const result = await f.request('/account', 'DELETE', { confirm: 'DELETE MY ACCOUNT', userId: OTHER });
  assert.equal(result.status, 200); assert.equal((await result.json()).deleted, true);
  assert.ok(f.calls.some(call => call.url.endsWith('/auth/v1/admin/users/' + USER) && call.method === 'DELETE'));
});

test('disabled Apple linking fails closed and forged ownership flags cannot unlock an account', async () => {
  const f = fixture({ env: { APPLE_LINKING_ENABLED: 'false' } });
  assert.equal((await f.request('/apple/claim', 'POST', { receiptData: RECEIPT, owned: true })).status, 503);
  assert.equal(f.rows.size, 0); assert.equal((await (await f.request('/native/me')).json()).owned, false);
});
