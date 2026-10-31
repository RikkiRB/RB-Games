import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyEmailCode } from '../play/auth-code.js';
const valid = { access_token: 'access', refresh_token: 'refresh', expires_in: 3600, user: { id: 'player', email: 'player@example.com', email_confirmed_at: '2026-01-01' } };
test('email code exchanges with Supabase and establishes a bounded session in the current app', async () => {
  const result = await verifyEmailCode('player@example.com', '1234 5678', async (path, body) => {
    assert.equal(path, 'verify');
    assert.deepEqual(body, { email: 'player@example.com', token: '12345678', type: 'email' });
    return valid;
  }, 1000000);
  assert.equal(result.expires_at, 4600);
});
test('invalid codes never send a verification request', async () => {
  for (const code of ['', '123', 'abcdef', '12345678901']) await assert.rejects(verifyEmailCode('player@example.com', code, () => { throw new Error('unexpected request'); }), /numeric code/);
});
test('failed verification and wrong or unconfirmed users cannot create sessions', async () => {
  for (const result of [{}, {...valid, user: {...valid.user, email:'other@example.com'}}, {...valid, user: {...valid.user, email_confirmed_at:null}}, {...valid, expires_at:1}]) await assert.rejects(verifyEmailCode('player@example.com', '123456', async () => result));
  await assert.rejects(verifyEmailCode('player@example.com', '123456', async () => {throw new Error('expired');}), /expired/);
});
