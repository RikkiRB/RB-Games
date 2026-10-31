// Codes are exchanged only with Supabase; no URL/session handoff to Safari.
export async function verifyEmailCode(email, input, auth, now = Date.now()) {
  const token = String(input).replace(/[\s-]/g, '');
  if (!email || !/^\d{6,10}$/.test(token)) throw new Error('Enter the full numeric code from your latest email.');
  const result = await auth('verify', { email, token, type: 'email' });
  if (!result?.access_token || !result.refresh_token || !result.user?.id || !result.user.email_confirmed_at || result.user.email?.toLowerCase() !== email.toLowerCase()) throw new Error('Sign-in could not be verified. Request a new code.');
  const expiresAt = Number(result.expires_at) || Math.floor(now / 1000) + Number(result.expires_in);
  if (!Number.isFinite(expiresAt) || expiresAt <= now / 1000) throw new Error('This sign-in has expired. Request a new code.');
  return { ...result, expires_at: expiresAt };
}
