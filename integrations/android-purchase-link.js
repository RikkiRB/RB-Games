/* Include locally in the next GDevelop Android build. Public configuration:
 * window.RB_PLAY_LINK_CONFIG = {supabaseUrl, supabaseAnonKey, apiUrl};
 * Call RBPlayLink.open() from a Link purchase to web account button in Addons.
 * Existing Google Play purchase/restore actions remain in charge of billing. */
(() => {
  'use strict';
  if (window.RBPlayLink) return;
  let dialog, emailForm, codeForm, emailInput, codeInput, note, linkButton, session, email;
  const config = () => window.RB_PLAY_LINK_CONFIG || window.PERIGEE_WEB_CONFIG || {};
  async function json(url, body, token) {
    const c = config();
    const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: c.supabaseAnonKey, ...(token ? { Authorization: 'Bearer ' + token } : {}) }, body: JSON.stringify(body), signal: AbortSignal.timeout(20000) });
    let data; try { data = await response.json(); } catch { data = {}; }
    if (!response.ok) throw new Error(data.error_description || data.msg || data.error || 'Could not link this purchase. Please try again.');
    return data;
  }
  async function link() {
    linkButton.disabled = true; note.textContent = 'Restoring your Google Play purchase…';
    try {
      if (!session?.access_token) throw new Error('Sign in with your email code first.');
      const store = window.CdvPurchase?.store;
      if (!store || window.cordova?.platformId !== 'android') throw new Error('Link your purchase from the Android app installed through Google Play.');
      const error = await store.restorePurchases();
      if (error?.isError) throw new Error('Google Play restore is unavailable. Please try again.');
      const receipt = store.localReceipts.find(receipt => receipt.platform === 'android-playstore' && typeof receipt.purchaseToken === 'string' && receipt.transactions.some(transaction => !transaction.isPending && transaction.products.some(product => product.id === 'full_content_upgrade')));
      if (!receipt) throw new Error('No Full Content Upgrade receipt was found in Google Play on this device.');
      const result = await json(config().apiUrl + '/google-play/claim', { purchaseToken: receipt.purchaseToken }, session.access_token);
      note.textContent = result.owned ? 'Linked. Sign into the browser game with this same email to restore your cosmetic pack.' : 'Purchase verification is pending. Please retry later.';
    } catch (error) { note.textContent = error.message; }
    finally { linkButton.disabled = false; }
  }
  function open() {
    const c = config();
    if (!dialog) {
      dialog = document.createElement('dialog'); dialog.setAttribute('aria-label', 'Link Google Play purchase to a web account');
      dialog.style.cssText = 'max-width:430px;width:calc(100% - 28px);box-sizing:border-box;background:#121929;color:#f2f3e9;border:1px solid #56637b;border-radius:12px;padding:26px;font:16px Arial,sans-serif;line-height:1.5;';
      dialog.innerHTML = '<h2 style="margin-top:0">Link your cosmetic pack</h2><p>Use the same email here and in the browser game. Linking never charges you again.</p><form data-email><label>Email address<input type="email" autocomplete="email" required maxlength="254"></label><button type="submit">Send sign-in code</button></form><form data-code hidden><label>Email verification code<input type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,10}" maxlength="10" required></label><button type="submit">Verify code</button></form><button data-link type="button" hidden>Link existing Google Play purchase</button><p data-status role="status"></p><button data-close type="button">Close</button>';
      dialog.querySelectorAll('button').forEach(button => { button.style.cssText = 'background:#ff9136;color:#101216;border:0;border-radius:5px;padding:13px;margin:12px 8px 0 0;font:inherit;cursor:pointer;'; });
      dialog.querySelectorAll('input').forEach(input => { input.style.cssText = 'display:block;box-sizing:border-box;width:100%;font:inherit;padding:12px;background:#090d19;color:#fff;border:1px solid #7c89a2;border-radius:4px;margin-top:8px;'; });
      emailForm = dialog.querySelector('[data-email]'); codeForm = dialog.querySelector('[data-code]');
      emailInput = emailForm.querySelector('input'); codeInput = codeForm.querySelector('input'); note = dialog.querySelector('[data-status]'); linkButton = dialog.querySelector('[data-link]');
      dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
      linkButton.addEventListener('click', link);
      emailForm.addEventListener('submit', async event => {
        event.preventDefault(); event.submitter.disabled = true;
        try { email = emailInput.value.trim(); await json(config().supabaseUrl + '/auth/v1/otp', { email, create_user: true }); emailForm.hidden = true; codeForm.hidden = false; note.textContent = 'Enter the code from your email.'; codeInput.focus(); }
        catch (error) { note.textContent = error.message; } finally { event.submitter.disabled = false; }
      });
      codeForm.addEventListener('submit', async event => {
        event.preventDefault(); event.submitter.disabled = true;
        try {
          const result = await json(config().supabaseUrl + '/auth/v1/verify', { email, token: codeInput.value.trim(), type: 'email' });
          if (!result.access_token) throw new Error('Sign-in failed.');
          session = result; codeInput.value = ''; codeForm.hidden = true; linkButton.hidden = false; note.textContent = 'Signed in. You can now link the purchase from this device.';
        } catch (error) { note.textContent = error.message; } finally { event.submitter.disabled = false; }
      });
      dialog.addEventListener('close', () => { session = null; email = ''; emailInput.value = ''; codeInput.value = ''; emailForm.hidden = false; codeForm.hidden = true; linkButton.hidden = true; note.textContent = ''; });
      document.body.appendChild(dialog);
    }
    if (!dialog.open) dialog.showModal();
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(c.supabaseUrl || '') || !c.supabaseAnonKey || c.apiUrl !== c.supabaseUrl.replace(/\/$/, '') + '/functions/v1/perigee-api') {
      emailForm.hidden = true; note.textContent = 'Web purchase linking is not connected yet. Your Android purchase still works normally.';
    }
  }
  window.RBPlayLink = Object.freeze({ open });
})();
