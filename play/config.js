// Public settings only. Never put service-role keys, Stripe secrets or Google
// service-account credentials in a website file. See WEB-RELEASE.md.
window.PERIGEE_WEB_CONFIG = Object.freeze({
  supabaseUrl: '',
  supabaseAnonKey: '',
  apiUrl: '',
  // ES256 public JWK exported by the backend's /public-config endpoint.
  licensePublicKey: null
});
