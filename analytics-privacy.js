// Keep sign-in, checkout and arbitrary query data out of analytics URLs.
export function cleanAnalyticsValue(value, key = '') {
  if (Array.isArray(value)) return value.map(item => cleanAnalyticsValue(item, key));
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([name, item]) => [name, cleanAnalyticsValue(item, name)])
  );
  if (typeof value !== 'string') return value;
  if (/^https?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      url.username = ''; url.password = ''; url.hash = ''; url.search = '';
      return /referr/i.test(key) ? url.origin : url.href;
    } catch { return '[redacted]'; }
  }
  if (/token|password|secret|email|authorization|code$/i.test(key)) return '[redacted]';
  if (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)) return '[redacted]';
  return value;
}

export function privacySignal(navigator) {
  return navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes';
}

export function createAnalyticsController({ load, allowed, projectKey }) {
  let sdk, loading;
  return {
    async start() {
      if (!allowed()) return;
      if (!loading) loading = load().catch(error => { loading = undefined; throw error; });
      const module = await loading;
      // Consent can be withdrawn while the module is downloading.
      if (!allowed()) return;
      if (!sdk) {
        sdk = module.analytics;
        sdk.init({
          projectKey,
          requestBatching: false,
          install: { framework: 'web', agent: 'other' },
          autocapture: false,
          maskAllText: true,
          maskAllElementAttributes: true,
          persistence: 'localStorage',
          respectDnt: true,
          beforeSend: event => allowed() ? cleanAnalyticsValue(event) : null,
        });
      } else sdk.optInCapturing();
    },
    stop() { sdk?.optOutCapturing(); },
  };
}
