import { verifyLicense } from './license.js';

const config = window.PERIGEE_WEB_CONFIG || {};
const $ = id => document.getElementById(id);
const SESSION_KEY = 'rb.perigee.session.v1';
const LICENSE_KEY = 'rb.perigee.license.v1';
const configured = /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(config.supabaseUrl || '') &&
  typeof config.supabaseAnonKey === 'string' && config.supabaseAnonKey.length > 20 &&
  config.apiUrl === config.supabaseUrl.replace(/\/$/, '') + '/functions/v1/perigee-api';
const audience = new URL('./', location.href).href;
let session = read(SESSION_KEY);
let state = { owned: false, ready: false, price: '', verification: 'unverified' };
let refreshPromise, pendingEmail = '', installPrompt, serviceWorker, checkoutBusy = false;

function read(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
function save(key, value) { try { value ? localStorage.setItem(key, JSON.stringify(value)) : localStorage.removeItem(key); } catch { /* Private browsing/storage limits must not stop free play. */ } }
function status(message) { $('account-status').textContent = message; }
function sendState() {
  $('game-frame').contentWindow?.postMessage({ type: 'RB_WEB_STATE', ...state }, location.origin);
  renderAccount();
}
function renderAccount() {
  const signedIn = !!session?.user?.id;
  $('email-form').hidden = signedIn || !!pendingEmail;
  $('code-form').hidden = signedIn || !pendingEmail;
  $('signed-in').hidden = !signedIn;
  $('account-email').textContent = session?.user?.email || '';
  $('ownership-status').textContent = state.owned ? 'Full Content Upgrade owned. Your cosmetic pack is unlocked.' : 'Your cosmetic pack is not unlocked on this account.';
  $('buy-button').disabled = !state.ready || state.owned || checkoutBusy;
  $('buy-button').textContent = state.owned ? 'Already owned' : state.price ? 'Unlock cosmetic pack · ' + state.price : 'Purchases unavailable';
  $('pack-status').textContent = state.owned ? 'Your cosmetic pack is unlocked in the Hangar.' : state.ready ? 'Optional cosmetic pack. Sign in to buy or restore your purchase.' : 'Browser add-on purchases are not available yet. The free game is ready to play.';
  $('account-button').hidden = !configured;
  $('pack-button').hidden = !configured;
}
async function requestJson(url, options = {}) {
  const response = await fetch(url, { ...options, cache: 'no-store', signal: AbortSignal.timeout(20000) });
  let body; try { body = await response.json(); } catch { body = {}; }
  if (!response.ok) throw Object.assign(new Error(body.error_description || body.msg || body.message || body.error || 'The service is unavailable. Please try again.'), { status: response.status });
  return body;
}
async function auth(path, body) {
  return requestJson(config.supabaseUrl.replace(/\/$/, '') + '/auth/v1/' + path, {
    method: 'POST', headers: { apikey: config.supabaseAnonKey, 'Content-Type': 'application/json' }, body: JSON.stringify(body)
  });
}
async function token() {
  if (!session?.access_token) throw new Error('Sign in to continue.');
  if (session.expires_at > Date.now() / 1000 + 60) return session.access_token;
  if (!refreshPromise) {
    const refresh = async () => {
      const latest = read(SESSION_KEY);
      if (latest?.expires_at > Date.now() / 1000 + 60) { session = latest; return latest.access_token; }
      const renewed = await auth('token?grant_type=refresh_token', { refresh_token: session.refresh_token });
      session = { ...renewed, expires_at: renewed.expires_at || Math.floor(Date.now() / 1000) + renewed.expires_in };
      save(SESSION_KEY, session); return session.access_token;
    };
    refreshPromise = (navigator.locks ? navigator.locks.request('rb-perigee-refresh', refresh) : refresh()).finally(() => { refreshPromise = null; });
  }
  return refreshPromise;
}
async function api(path, method = 'GET', body) {
  return requestJson(config.apiUrl + path, { method, headers: { Authorization: 'Bearer ' + await token(), 'Content-Type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}) });
}
async function restore() {
  if (!configured || !session) return;
  status('Checking your purchases…');
  try {
    const result = await api('/me');
    // Ownership is accepted only from the authenticated backend. A checkout
    // return URL, local flag or iframe message never grants a purchase.
    state.owned = result.owned === true;
    state.verification = 'server';
    state.expiresAt = 0;
    if (state.owned && result.license) save(LICENSE_KEY, result.license);
    else save(LICENSE_KEY, null);
    sendState();
    status(state.owned ? 'Purchase restored. Your cosmetics are ready in the Hangar.' : 'No completed purchase is linked to this account.');
  } catch (error) {
    status(error.status === 401 ? 'Your sign-in has expired. Sign out and sign in again to restore.' : 'We could not check purchases. Free play is available. Please try again when connected.');
  }
}
async function buy() {
  openAccount();
  if (!session) { status('Sign in first so your purchase can be restored on other devices.'); return; }
  if (!state.ready || state.owned || checkoutBusy) return;
  checkoutBusy = true; renderAccount(); status('Opening secure checkout…');
  try {
    const result = await api('/checkout', 'POST');
    const checkout = new URL(result.url);
    if (checkout.protocol !== 'https:' || checkout.hostname !== 'checkout.stripe.com') throw new Error('Invalid checkout destination.');
    location.assign(checkout.href);
  } catch (error) { status(error.message); checkoutBusy = false; renderAccount(); }
}
function openAccount() {
  if (!configured) return;
  if (!$('account-dialog').open) $('account-dialog').showModal();
  renderAccount();
}
async function loadOfflineOwnership() {
  const license = read(LICENSE_KEY);
  const valid = await verifyLicense(license, config.licensePublicKey, audience, session?.user?.id);
  if (valid) { state.owned = true; state.verification = 'signed-offline'; state.expiresAt = valid.exp * 1000; }
  else save(LICENSE_KEY, null);
  sendState();
}
async function loadShop() {
  if (!configured) return;
  try {
    const info = await requestJson(config.apiUrl + '/public-config');
    state.ready = info.checkoutReady === true;
    if (info.price && Number.isInteger(info.price.amount) && /^[a-z]{3}$/.test(info.price.currency)) {
      state.price = new Intl.NumberFormat(navigator.language, { style: 'currency', currency: info.price.currency }).format(info.price.amount / 100);
    }
    sendState();
  } catch { state.ready = false; sendState(); }
}
function connection() { $('connection-status').textContent = navigator.onLine ? '' : 'Offline · leaderboards unavailable'; }
function start() {
  $('launch').hidden = true; $('player').hidden = false;
  if (!$('game-frame').getAttribute('src')) $('game-frame').src = 'game/index.html';
  $('game-frame').focus(); $('player').scrollIntoView({ block: 'start', behavior: 'instant' }); connection();
}
$('play-button').addEventListener('click', start);
for (const id of ['account-button', 'pack-button']) $(id).addEventListener('click', () => { openAccount(); if (session) restore(); });
$('close-account').addEventListener('click', () => $('account-dialog').close());
$('change-email').addEventListener('click', () => { pendingEmail = ''; renderAccount(); $('email').focus(); });
$('email-form').addEventListener('submit', async event => {
  event.preventDefault(); const button = event.submitter; button.disabled = true; status('Sending your sign-in code…');
  try { const email = $('email').value.trim(); await auth('otp', { email, create_user: true }); pendingEmail = email; renderAccount(); status('Check your email for the verification code.'); $('code').focus(); }
  catch (error) { status(error.message); } finally { button.disabled = false; }
});
$('code-form').addEventListener('submit', async event => {
  event.preventDefault(); const button = event.submitter; button.disabled = true; status('Verifying your code…');
  try {
    const result = await auth('verify', { email: pendingEmail, token: $('code').value.trim(), type: 'email' });
    if (!result.access_token || !result.user?.id) throw new Error('Sign-in could not be verified.');
    session = { ...result, expires_at: result.expires_at || Math.floor(Date.now() / 1000) + result.expires_in };
    save(SESSION_KEY, session); pendingEmail = ''; $('code').value = ''; renderAccount(); await restore();
  } catch (error) { status(error.message); } finally { button.disabled = false; }
});
$('buy-button').addEventListener('click', buy);
$('restore-button').addEventListener('click', restore);
$('signout-button').addEventListener('click', async () => {
  const accessToken = session?.access_token;
  session = null; save(SESSION_KEY, null); save(LICENSE_KEY, null); state.owned = false; state.verification = 'unverified'; sendState(); status('Signed out on this device.');
  if (accessToken) fetch(config.supabaseUrl + '/auth/v1/logout?scope=local', { method: 'POST', headers: { apikey: config.supabaseAnonKey, Authorization: 'Bearer ' + accessToken } }).catch(() => {});
});
window.addEventListener('storage', event => {
  if (event.key !== SESSION_KEY) return;
  session = read(SESSION_KEY); state.owned = false; state.verification = 'unverified'; sendState();
  if (session && navigator.onLine) restore(); else if (session) loadOfflineOwnership();
});
window.addEventListener('message', event => {
  if (event.origin !== location.origin || event.source !== $('game-frame').contentWindow) return;
  if (event.data?.type === 'RB_WEB_READY') sendState();
  if (event.data?.type === 'RB_WEB_BUY') buy();
  if (event.data?.type === 'RB_WEB_RESTORE') { openAccount(); if (session) restore(); else status('Sign in to restore your purchases.'); }
});
window.addEventListener('online', () => { connection(); loadShop(); if (session) restore(); });
window.addEventListener('offline', connection);
$('fullscreen-button').addEventListener('click', async () => {
  try { if (document.fullscreenEnabled) await $('player').requestFullscreen(); else { $('connection-status').textContent = 'For a full-screen view on iPhone, add the game to your Home Screen.'; } }
  catch { $('connection-status').textContent = 'Full screen is unavailable in this browser.'; }
});
$('exit-fullscreen').addEventListener('click', () => document.exitFullscreen?.());
document.addEventListener('fullscreenchange', () => { $('exit-fullscreen').hidden = !document.fullscreenElement; $('fullscreen-button').hidden = !!document.fullscreenElement; });
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; $('install-button').hidden = false; });
$('install-button').addEventListener('click', async () => { if (installPrompt) { await installPrompt.prompt(); installPrompt = null; $('install-button').hidden = true; } });
window.addEventListener('appinstalled', () => { $('install-button').hidden = true; $('install-copy').textContent = 'The game has been added to your device.'; });

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js', { scope: './', updateViaCache: 'none' }).then(async () => {
    const registration = await navigator.serviceWorker.ready;
    serviceWorker = registration.active; $('offline-button').disabled = false; $('offline-button').textContent = 'Save game for offline play';
    const manifest = await fetch('asset-manifest.json').then(r => r.json());
    $('download-copy').textContent = 'Download about ' + Math.ceil(manifest.totalBytes / 1048576) + ' MB to this device. Leaderboards and purchases need an internet connection.';
  }).catch(() => { $('offline-button').textContent = 'Offline saving unavailable'; $('offline-status').textContent = 'You can still play while connected.'; });
}
$('offline-button').addEventListener('click', () => {
  if (!serviceWorker) return;
  $('offline-button').disabled = true; $('offline-progress').hidden = false;
  const channel = new MessageChannel();
  channel.port1.onmessage = event => {
    const info = event.data;
    $('offline-progress').value = info.total ? Math.floor(info.done / info.total * 100) : 0;
    $('offline-status').textContent = info.type === 'done' ? 'Saved. You can launch and play this game offline on this device.' : info.type === 'error' ? 'The download was interrupted. Check your connection and available storage, then retry.' : 'Saving game files… ' + info.done + ' / ' + info.total;
    if (info.type === 'done' || info.type === 'error') { $('offline-button').disabled = false; $('offline-button').textContent = info.type === 'done' ? 'Check offline download' : 'Retry offline download'; channel.port1.close(); }
  };
  serviceWorker.postMessage({ type: 'CACHE_GAME' }, [channel.port2]);
});

// A signed offline licence is bounded; it cannot silently become permanent.
setInterval(() => { if (state.verification === 'signed-offline' && state.expiresAt <= Date.now()) { state.owned = false; state.verification = 'unverified'; sendState(); } }, 30000);
setInterval(() => { if (session && navigator.onLine && document.visibilityState === 'visible') restore(); }, 180000);
await loadOfflineOwnership();
await loadShop();
if (session && navigator.onLine) await restore();
if (new URLSearchParams(location.search).has('checkout')) {
  openAccount(); status('Checking payment status. Your pack unlocks after the payment service confirms it.');
  if (session) for (const delay of [0, 2000, 6000]) { if (delay) await new Promise(resolve => setTimeout(resolve, delay)); await restore(); if (state.owned) break; }
  history.replaceState(null, '', audience);
}
