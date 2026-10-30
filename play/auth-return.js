// Supabase's default email template sends a Magic Link. Its implicit-flow
// session arrives in the URL fragment, which is not sent to GitHub Pages.
export function readAuthRedirect(hash, now = Date.now()) {
  const params = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
  if (!params.has('access_token') && !params.has('error') && !params.has('error_code')) return null;
  if (params.has('error') || params.has('error_code')) return { error: true };

  const accessToken = params.get('access_token');
  const refreshToken = params.get('refresh_token');
  const seconds = Number(params.get('expires_in'));
  if (!accessToken || !refreshToken || !Number.isFinite(seconds) || seconds <= 0) return { error: true };
  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_at: Math.floor(now / 1000) + seconds
  };
}
