/* Embedded locally in RBPC_Init. Public configuration is supplied by the build.
 * Native purchases stay in Apple/Google billing. No web checkout is opened.
 * Account ownership is kept in memory only after authenticated server checks;
 * neither local currency nor a saved ownership flag can grant an entitlement. */
function installRBGNativeAccount(runtimeScene, config) {
  'use strict';
  if (window.RBGAccount) { window.RBGAccount.attach(runtimeScene); return; }
  const PRODUCT = 'full_content_upgrade';
  const SESSION_KEY = 'rb.perigee.native.account.v1';
  const platform = () => window.cordova?.platformId || 'web';
  const native = () => ['ios', 'android'].includes(platform());
  const games = new WeakSet();
  let scene, session = null, owned = false, verifiedUser = '', verifiedUntil = 0;
  let dialog, note, emailForm, codeForm, accountPanel, emailInput, codeInput, emailLabel, packLabel, linkButton;
  let capabilities = {}, pendingEmail = '', busy = false, refreshing, generation = 0, nextRefresh = 0;
  const storage = {
    load() { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; } },
    save(value) { try { if (value) localStorage.setItem(SESSION_KEY, JSON.stringify(value)); else localStorage.removeItem(SESSION_KEY); } catch { /* A session may remain memory-only. */ } }
  };
  const message = value => { if (note) note.textContent = value; };
  const markDialog = value => { scene?.getGame()?.getVariables().get('RBG_AccountDialogOpen').setBoolean(value); };
  function isOwned() { return !!(native() && session?.user?.id === verifiedUser && owned && Date.now() < verifiedUntil); }
  function render() {
    if (!dialog) return;
    emailForm.hidden = !!session || !!pendingEmail || !native();
    codeForm.hidden = !!session || !pendingEmail || !native();
    accountPanel.hidden = !session || !native();
    emailLabel.textContent = session?.user?.email || '';
    packLabel.textContent = isOwned() ? 'Extras Pack linked to this account.' : 'No verified Extras Pack on this account yet.';
    linkButton.textContent = platform() === 'ios' ? 'Link App Store purchase' : 'Link Google Play purchase';
    const ready = platform() === 'ios' ? capabilities.appleLinkingReady : capabilities.playLinkingReady;
    linkButton.disabled = busy || !ready;
    dialog.querySelectorAll('button').forEach(button => { if (button !== linkButton && !button.hasAttribute('data-close')) button.disabled = busy; });
  }
  async function request(url, { method = 'GET', body, token } = {}) {
    let response;
    try {
      response = await fetch(url, { method, headers: { apikey: config.supabaseAnonKey, ...(body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: 'Bearer ' + token } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(20000) });
    } catch { throw new Error('Connection unavailable. Your local progress and store purchase are safe. Please reconnect and try again.'); }
    let data; try { data = await response.json(); } catch { data = {}; }
    if (!response.ok) throw new Error(response.status === 401 ? 'Please sign in again to verify this account.' : data.error_description || data.msg || data.error || 'The account service is temporarily unavailable.');
    return data;
  }
  function saveSession(value) {
    if (!value?.access_token || !value?.refresh_token || !value?.user?.id) throw new Error('The sign-in response was incomplete. Please try again.');
    session = { access_token: value.access_token, refresh_token: value.refresh_token, expires_at: value.expires_at || Math.floor(Date.now() / 1000) + Number(value.expires_in || 3600), user: { id: value.user.id, email: value.user.email } };
    storage.save(session);
  }
  async function token() {
    if (!session) throw new Error('Sign in to your RB Games account first.');
    if (session.expires_at * 1000 < Date.now() + 60000) {
      const epoch = generation;
      const fresh = await request(config.supabaseUrl + '/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: session.refresh_token } });
      if (epoch !== generation) throw new Error('Account changed. Please try again.');
      saveSession(fresh);
    }
    return session.access_token;
  }
  async function api(path, method = 'GET', body) {
    return request(config.apiUrl + path, { method, body, token: await token() });
  }
  function accept(result, epoch) {
    if (epoch !== generation || !session || result.user?.id !== session.user.id || result.product !== PRODUCT) throw new Error('The purchase could not be verified for this account.');
    owned = result.owned === true;
    verifiedUser = session.user.id;
    verifiedUntil = Math.min(Date.now() + 15 * 60000, session.expires_at * 1000);
    render();
  }
  async function refresh() {
    if (!native() || !session) return;
    if (refreshing) return refreshing;
    const epoch = generation;
    refreshing = (async () => {
      const result = await api('/native/me');
      accept(result, epoch);
      message(result.owned ? 'Restored. Your Extras Pack is available in the Hangar.' : 'No linked purchase found. You can link a purchase made through this device’s store.');
    })();
    try { await refreshing; } finally { refreshing = null; nextRefresh = Date.now() + 180000; }
  }
  async function loadCapabilities() {
    capabilities = await request(config.apiUrl + '/public-config');
    render();
    if (!capabilities.nativeAccountsReady) throw new Error('RB Games account linking is being connected. Your store purchases and local progress still work.');
  }
  async function link() {
    await loadCapabilities();
    const ready = platform() === 'ios' ? capabilities.appleLinkingReady : capabilities.playLinkingReady;
    if (!ready) throw new Error('Purchase linking for this store is being connected. Your existing store purchase still works in this app.');
    const store = window.CdvPurchase?.store;
    if (!store) throw new Error('Open the app installed from the App Store or Google Play to link its purchase.');
    message('Restoring your store purchase…');
    const error = await store.restorePurchases();
    if (error?.isError || (error && error.code)) throw new Error('The store could not restore your purchase. Please try again.');
    const epoch = generation;
    let result;
    if (platform() === 'android') {
      const receipt = store.localReceipts.find(receipt => receipt.platform === 'android-playstore' && typeof receipt.purchaseToken === 'string' && receipt.transactions.some(transaction => !transaction.isPending && transaction.products.some(product => product.id === PRODUCT)));
      if (!receipt) throw new Error('No Extras Pack purchase was found on this Google Play account.');
      result = await api('/google-play/claim', 'POST', { purchaseToken: receipt.purchaseToken });
    } else {
      const receipt = store.localReceipts.find(receipt => receipt.platform === 'ios-appstore' && typeof receipt.nativeData?.appStoreReceipt === 'string' && receipt.nativeData.appStoreReceipt.length > 16);
      if (!receipt) throw new Error('No App Store receipt was available. Use Restore Purchases in the shop, then try linking again.');
      result = await api('/apple/claim', 'POST', { receiptData: receipt.nativeData.appStoreReceipt });
    }
    accept(result, epoch);
    message(result.owned ? 'Linked. Sign in with this same RB Games account on your other devices to restore the Extras Pack. Linking never charges you again.' : 'Your purchase is still being verified. Please try restoring again shortly.');
  }
  async function task(action) {
    if (busy) return;
    busy = true; render();
    try { await action(); } catch (error) { message(error.message); }
    finally { busy = false; render(); }
  }
  async function signOut() {
    const access = session?.access_token;
    generation++; session = null; owned = false; verifiedUser = ''; verifiedUntil = 0;
    pendingEmail = ''; storage.save(null); emailInput.value = ''; codeInput.value = '';
    render(); message('Signed out. Your local gold, diamonds and trails remain on this device. Store purchases remain available through Restore Purchases.');
    if (access) request(config.supabaseUrl + '/auth/v1/logout?scope=local', { method: 'POST', token: access }).catch(() => {});
  }
  function createDialog() {
    dialog = document.createElement('dialog'); dialog.id = 'rbg-account-dialog';
    dialog.setAttribute('aria-label', 'RB Games account');
    dialog.style.cssText = 'box-sizing:border-box;width:min(520px,calc(100% - 32px));max-height:calc(100% - 32px);overflow:auto;border:2px solid #ff8c28;border-radius:12px;padding:24px;background:#0d1226;color:#fff;font:15px/1.5 Arial,sans-serif;';
    dialog.innerHTML = '<h2 style="margin:0 0 8px;font-size:22px;color:#fff">RB GAMES ACCOUNT</h2><p>Optional sign-in links your Extras Pack across supported devices. Free play needs no account.</p><form data-email><label>Email address<input type="email" autocomplete="email" maxlength="254" required></label><button type="submit">Send sign-in code</button></form><form data-code hidden><label>Email sign-in code<input type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,10}" maxlength="10" required></label><button type="submit">Sign in</button><button type="button" data-change>Change email</button></form><section data-account hidden><p data-email-label style="overflow-wrap:anywhere"></p><p data-pack></p><button type="button" data-restore>Restore linked Extras Pack</button><button type="button" data-link>Link store purchase</button><button type="button" data-signout>Sign out</button><details style="margin-top:18px"><summary>Account settings</summary><p>Deleting your account removes your RB Games sign-in and linked purchase records. It does not refund or cancel an App Store or Google Play purchase. Local gold, diamonds and trails stay on this device. Web purchases may require support to link again.</p><label>To confirm, type DELETE<input data-delete-confirm type="text" autocomplete="off"></label><button type="button" data-delete>Delete my account permanently</button></details></section><p data-local style="color:#c1d4e9;font-size:13px">Gold, diamonds and earned trails are saved on this device; they do not sync through your account yet.</p><p data-status role="status" aria-live="polite"></p><p><a href="https://rbgames.dev/play/privacy.html" target="_blank" rel="noopener noreferrer" style="color:#85ddff">Privacy policy</a></p><button type="button" data-close>Close</button>';
    dialog.querySelectorAll('button').forEach(button => { button.style.cssText = 'min-height:44px;margin:8px 8px 0 0;padding:10px 14px;border:1px solid #ff8c28;border-radius:6px;background:#b75617;color:#fff;font:inherit;cursor:pointer;'; });
    dialog.querySelector('[data-delete]').style.background = '#7c2538';
    dialog.querySelectorAll('input').forEach(input => { input.style.cssText = 'display:block;box-sizing:border-box;width:100%;min-height:44px;margin-top:6px;padding:10px;background:#080d1c;border:1px solid #5d7194;border-radius:5px;color:#fff;font:16px Arial,sans-serif;'; });
    emailForm = dialog.querySelector('[data-email]'); codeForm = dialog.querySelector('[data-code]'); accountPanel = dialog.querySelector('[data-account]');
    emailInput = emailForm.querySelector('input'); codeInput = codeForm.querySelector('input'); note = dialog.querySelector('[data-status]');
    emailLabel = dialog.querySelector('[data-email-label]'); packLabel = dialog.querySelector('[data-pack]'); linkButton = dialog.querySelector('[data-link]');
    emailForm.addEventListener('submit', event => { event.preventDefault(); task(async () => {
      await loadCapabilities();
      const email = emailInput.value.trim();
      await request(config.supabaseUrl + '/auth/v1/otp', { method: 'POST', body: { email, create_user: true, options: { email_redirect_to: 'https://rbgames.dev/play/' } } });
      pendingEmail = email; render(); codeInput.focus(); message('Enter the code from your email here. Use the code rather than opening the browser link.');
    }); });
    codeForm.addEventListener('submit', event => { event.preventDefault(); task(async () => {
      const result = await request(config.supabaseUrl + '/auth/v1/verify', { method: 'POST', body: { email: pendingEmail, token: codeInput.value.trim(), type: 'email' } });
      generation++; owned = false; verifiedUntil = 0; saveSession(result); pendingEmail = ''; codeInput.value = ''; render(); await refresh();
    }); });
    dialog.querySelector('[data-change]').addEventListener('click', () => { pendingEmail = ''; codeInput.value = ''; render(); });
    dialog.querySelector('[data-restore]').addEventListener('click', () => task(refresh));
    linkButton.addEventListener('click', () => task(link));
    dialog.querySelector('[data-signout]').addEventListener('click', () => task(signOut));
    dialog.querySelector('[data-delete]').addEventListener('click', () => task(async () => {
      const confirmation = dialog.querySelector('[data-delete-confirm]');
      if (confirmation.value.trim() !== 'DELETE') throw new Error('Type DELETE to confirm permanent account deletion.');
      const result = await api('/account', 'DELETE', { confirm: 'DELETE MY ACCOUNT' });
      if (!result.deleted) throw new Error('Account deletion was not confirmed. Please try again.');
      confirmation.value = ''; await signOut(); message('Your RB Games account and linked purchase records were deleted. Your local earned progress has been kept.');
    }));
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { markDialog(false); codeInput.value = ''; dialog.querySelector('[data-delete-confirm]').value = ''; });
    document.body.appendChild(dialog);
  }
  function open() {
    if (!native() && window.RBPerigeeWeb?.openAccount) { window.RBPerigeeWeb.openAccount(); return; }
    if (!dialog) createDialog();
    render(); if (!dialog.open) dialog.showModal(); markDialog(true);
    if (!native()) { message('Account linking is available in the installed mobile app and at rbgames.dev. Previewing here does not change purchases or earned progress.'); return; }
    task(async () => { await loadCapabilities(); if (session) await refresh(); else message('Use the same email as your RB Games website account. Signing in is free.'); });
  }
  function attach(currentScene) {
    scene = currentScene;
    if (native() && !games.has(scene.getGame())) {
      games.add(scene.getGame());
      const saved = storage.load();
      if (saved?.access_token && saved?.refresh_token && saved?.user?.id && Number.isFinite(saved.expires_at)) session = saved;
      if (session) refresh().catch(() => {});
    }
    if (scene.getGame()?.getVariables) scene.getGame().getVariables().get('RBG_NativeStorePlatform').setString(platform() === 'ios' ? 'ios-appstore' : 'android-playstore');
  }
  window.RBGAccount = Object.freeze({ open, isOwned, attach, isOpen: () => !!dialog?.open });
  gdjs.registerRuntimeScenePreEventsCallback(current => {
    if (!native()) return;
    if (session && ['Addons', 'ExtrasPack'].includes(current.getName()) && Date.now() > nextRefresh && !refreshing && !busy) { nextRefresh = Date.now() + 180000; refresh().catch(() => {}); }
  });
  attach(runtimeScene);
}
