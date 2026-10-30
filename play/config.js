// Public settings only. Never put service-role keys, Stripe secrets or Google
// service-account credentials in a website file. See WEB-RELEASE.md.
window.PERIGEE_WEB_CONFIG = Object.freeze({
  supabaseUrl: 'https://yjzrfmptbgrrthdevgwj.supabase.co',
  // Legacy anon key. Browser-safe when database access is protected by RLS.
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqenJmbXB0YmdycnRoZGV2Z3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNjc0MDgsImV4cCI6MjEwODk0MzQwOH0.GpIhh67bUpRDi7wdsW8tcSXsmnbgyzRlR4TYg1xDVg0',
  apiUrl: 'https://yjzrfmptbgrrthdevgwj.supabase.co/functions/v1/perigee-api',
  // ES256 public JWK exported by the backend's /public-config endpoint.
  licensePublicKey: null
});
