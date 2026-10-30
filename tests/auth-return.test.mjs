import test from 'node:test';
import assert from 'node:assert/strict';
import { readAuthRedirect } from '../play/auth-return.js';

test('Magic Link result yields a short-lived session without interpreting unrelated hashes', () => {
  assert.equal(readAuthRedirect('#play-button'), null);
  assert.deepEqual(readAuthRedirect('#access_token=jwt&refresh_token=refresh&expires_in=3600&type=magiclink', 1_000_000), {
    access_token: 'jwt', refresh_token: 'refresh', expires_at: 4600
  });
});

test('expired/error and incomplete redirects do not create a session', () => {
  for (const hash of ['#error=access_denied&error_code=otp_expired', '#access_token=jwt', '#access_token=jwt&refresh_token=refresh&expires_in=0']) {
    assert.deepEqual(readAuthRedirect(hash), { error: true });
  }
});
