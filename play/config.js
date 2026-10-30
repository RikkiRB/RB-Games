// Public settings only. Never put service-role keys, Stripe secrets or Google
// service-account credentials in a website file. See WEB-RELEASE.md.
window.PERIGEE_WEB_CONFIG = Object.freeze({
  supabaseUrl: 'https://yjzrfmptbgrrthdevgwj.supabase.co',
  // Public publishable key with a "web" label. This is safe in a browser with RLS.
  supabaseAnonKey: 'sb_publishable_ltaNA7nnVozoSCOcZIjg',
  apiUrl: 'https://yjzrfmptbgrrthdevgwj.supabase.co/functions/v1/perigee-api',
  // ES256 public JWK exported by the backend's /public-config endpoint.
  licensePublicKey: null
});
