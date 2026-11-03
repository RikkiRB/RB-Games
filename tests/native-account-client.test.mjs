import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const SOURCE = await readFile(new URL('../integrations/native-account.js', import.meta.url), 'utf8');
const USER = '11111111-1111-4111-8111-111111111111';
const SESSION_KEY = 'rb.perigee.native.account.v1';
const session = () => ({ access_token: 'verified-access', refresh_token: 'refresh', expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: USER, email: 'player@example.test' } });
class Element {
  constructor(tag = 'div') { this.tag = tag; this.style = {}; this.parts = new Map(); this.listeners = new Map(); this.hidden = false; this.disabled = false; this.value = ''; this.textContent = ''; this.open = false; }
  set innerHTML(html) {
    for (const match of html.matchAll(/<(\w+)[^>]*\bdata-([a-z-]+)(?:[\s=>])/g)) this.parts.set('[data-' + match[2] + ']', new Element(match[1]));
    this.parts.set('email-submit', new Element('button')); this.parts.set('code-submit', new Element('button'));
  }
  querySelector(selector) { if (!this.parts.has(selector)) this.parts.set(selector, new Element(selector)); return this.parts.get(selector); }
  querySelectorAll(selector) { return [...this.parts.values()].filter(element => selector === element.tag); }
  setAttribute(name, value) { this[name] = value; }
  hasAttribute(name) { return this === this.root?.querySelector('[' + name + ']'); }
  addEventListener(name, callback) { this.listeners.set(name, callback); }
  focus() {}
  showModal() { this.open = true; }
  close() { this.open = false; this.listeners.get('close')?.(); }
  fire(name) { this.listeners.get(name)?.({ preventDefault() {} }); }
}
async function fixture(options = {}) {
  const values = new Map([['earned-progress', JSON.stringify({ gold: 123, diamonds: 7, selectedTrail: 'trail_aurora' })]]), calls = [], variables = new Map();
  if (options.savedSession) values.set(SESSION_KEY, JSON.stringify(options.savedSession));
  let serverOwned = options.owned || false, dialog;
  const document = { createElement: tag => { dialog = new Element(tag); return dialog; }, body: { appendChild(element) { for (const part of element.parts.values()) part.root = element; } } };
  const window = { cordova: { platformId: options.platform || 'ios' }, CdvPurchase: { store: { restorePurchases: async () => undefined, localReceipts: options.receipts || [] } } }; window.parent = window;
  const fetch = async (url, init = {}) => {
    calls.push({ path: new URL(url).pathname, method: init.method || 'GET', body: init.body ? JSON.parse(init.body) : undefined });
    if (url.endsWith('/public-config')) return Response.json({ nativeAccountsReady: true, appleLinkingReady: true, playLinkingReady: true });
    if (url.endsWith('/auth/v1/otp')) return Response.json({});
    if (url.endsWith('/auth/v1/verify') || url.includes('/auth/v1/token?')) return Response.json(session());
    if (url.endsWith('/auth/v1/logout?scope=local')) return Response.json({});
    if (url.endsWith('/account')) return Response.json({ deleted: true });
    if (url.endsWith('/apple/claim') || url.endsWith('/google-play/claim')) serverOwned = true;
    if (url.endsWith('/native/me') || url.endsWith('/claim')) return Response.json({ owned: serverOwned, product: 'full_content_upgrade', user: { id: options.responseUser || USER } });
    throw new Error('Unexpected network call: ' + url);
  };
  const game = { getVariables: () => ({ get: name => ({ setString: value => variables.set(name, value), setBoolean: value => variables.set(name, value) }) }) };
  const scene = { getGame: () => game, getName: () => 'Addons' };
  const context = vm.createContext({ window, document, localStorage: { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) }, gdjs: { registerRuntimeScenePreEventsCallback() {} }, fetch, AbortSignal, Date, console });
  vm.runInContext(SOURCE, context);
  context.installRBGNativeAccount(scene, { apiUrl: 'https://test.supabase.co/functions/v1/perigee-api', supabaseUrl: 'https://test.supabase.co', supabaseAnonKey: 'public' });
  const flush = async () => { for (let i = 0; i < 4; i++) await new Promise(resolve => setImmediate(resolve)); };
  await flush();
  return { window, values, calls, variables, flush, dialog: () => dialog, open: async () => { window.RBGAccount.open(); await flush(); return dialog; }, serverOwned: value => { serverOwned = value; } };
}

test('native sign-in restores verified ownership and sign-out removes only account access', async () => {
  const f = await fixture({ savedSession: session(), owned: true });
  assert.equal(f.window.RBGAccount.isOwned(), true); assert.equal(f.variables.get('RBG_NativeStorePlatform'), 'ios-appstore');
  const before = f.values.get('earned-progress'), d = await f.open();
  d.querySelector('[data-signout]').fire('click'); await f.flush();
  assert.equal(f.window.RBGAccount.isOwned(), false); assert.equal(f.values.has(SESSION_KEY), false); assert.equal(f.values.get('earned-progress'), before);
  assert.ok(f.calls.some(call => call.path === '/auth/v1/logout'));
});

test('a saved owned flag or a response for another account never grants native account ownership', async () => {
  const f = await fixture({ savedSession: { ...session(), owned: true }, owned: false });
  assert.equal(f.window.RBGAccount.isOwned(), false);
  const other = await fixture({ savedSession: session(), owned: true, responseUser: 'another-account' });
  assert.equal(other.window.RBGAccount.isOwned(), false);
});

test('email code sign-in and native Apple receipt linking use server verification without web checkout', async () => {
  const receipt = { platform: 'ios-appstore', nativeData: { appStoreReceipt: 'MIIReceiptFromNativeStore00000000' } };
  const f = await fixture({ receipts: [receipt] }), d = await f.open();
  d.querySelector('[data-email]').querySelector('input').value = 'player@example.test';
  d.querySelector('[data-email]').fire('submit'); await f.flush();
  assert.equal(f.window.RBGAccount.isOwned(), false);
  d.querySelector('[data-code]').querySelector('input').value = '123456';
  d.querySelector('[data-code]').fire('submit'); await f.flush();
  assert.equal(f.window.RBGAccount.isOwned(), false);
  d.querySelector('[data-link]').fire('click'); await f.flush();
  assert.equal(f.window.RBGAccount.isOwned(), true);
  assert.deepEqual(f.calls.find(call => call.path.endsWith('/apple/claim')).body, { receiptData: receipt.nativeData.appStoreReceipt });
  assert.equal(f.calls.some(call => call.path.includes('checkout')), false);
});

test('missing store receipt never submits a claim and Android selects the Play store', async () => {
  const f = await fixture({ platform: 'android', savedSession: session() }), d = await f.open();
  d.querySelector('[data-link]').fire('click'); await f.flush();
  assert.equal(f.variables.get('RBG_NativeStorePlatform'), 'android-playstore');
  assert.equal(f.calls.some(call => call.path.endsWith('/claim')), false); assert.equal(f.window.RBGAccount.isOwned(), false);
});

test('account deletion needs typed confirmation and keeps earned device progress', async () => {
  const f = await fixture({ savedSession: session(), owned: true }), d = await f.open();
  const before = f.values.get('earned-progress');
  d.querySelector('[data-delete]').fire('click'); await f.flush();
  assert.equal(f.calls.some(call => call.method === 'DELETE'), false);
  d.querySelector('[data-delete-confirm]').value = 'DELETE'; d.querySelector('[data-delete]').fire('click'); await f.flush();
  assert.equal(f.calls.find(call => call.method === 'DELETE').body.confirm, 'DELETE MY ACCOUNT');
  assert.equal(f.window.RBGAccount.isOwned(), false); assert.equal(f.values.get('earned-progress'), before);
});
