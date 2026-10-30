import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

test('web adapter uses verified state, preserves gameplay values and ignores untrusted messages', async () => {
  const values = new Map([['Health', 3], ['Weapon', 0], ['PowerupInterval', 9]]);
  const get = name => ({ setString: value => values.set(name, value), setBoolean: value => values.set(name, value), fromJSObject: value => values.set(name, value) });
  const scene = { getGame: () => ({ getVariables: () => ({ get }) }), getVariables: () => ({ get }) };
  const callbacks = [], messages = [], listeners = new Map();
  const parent = { postMessage: message => messages.push(message) };
  const gdjs = { registerRuntimeScenePreEventsCallback: callback => callbacks.push(callback), registerRuntimeScenePostEventsCallback: callback => callbacks.push(callback) };
  for (const name of ['RegisterItem', 'FinalizeRegistration', 'FinalizePurchase', 'WatchItemEvent', 'StoreReady', 'ProductOwned', 'GetProduct', 'OrderItem', 'RestorePurchases']) gdjs['evtsExt__InAppPurchase__' + name] = { func: () => { throw new Error('Native billing must not be called in a web build.'); } };
  const window = { gdjs, parent, addEventListener: (type, callback) => listeners.set(type, callback) };
  vm.runInNewContext(await readFile(new URL('../play/game-bridge.js', import.meta.url), 'utf8'), { window, gdjs, parent, location: { origin: 'https://rikkirb.github.io' } });
  const receive = (data, origin = 'https://rikkirb.github.io', source = parent) => listeners.get('message')({ origin, source, data: { type: 'RB_WEB_STATE', ...data } });
  callbacks[0](scene);
  receive({ owned: true, ready: true, verification: 'server' }, 'https://evil.example');
  assert.equal(values.get('RBPC_Ownership'), 'NotOwned');
  receive({ owned: true, ready: true, verification: 'unverified' });
  assert.equal(values.get('RBPC_Ownership'), 'NotOwned');
  receive({ owned: true, ready: true, verification: 'server', price: '€2.99' });
  assert.equal(gdjs.evtsExt__InAppPurchase__ProductOwned.func(scene, 'full_content_upgrade'), true);
  assert.equal(gdjs.evtsExt__InAppPurchase__ProductOwned.func(scene, 'anything-else'), false);
  assert.equal(values.get('Health'), 3); assert.equal(values.get('Weapon'), 0); assert.equal(values.get('PowerupInterval'), 9);
  gdjs.evtsExt__InAppPurchase__OrderItem.func(scene, 'full_content_upgrade');
  assert.equal(messages.at(-1).type, 'RB_WEB_BUY');
  receive({ owned: false, ready: true, verification: 'server' });
  assert.equal(values.get('RBPC_Ownership'), 'NotOwned');
});

test('the adapter does nothing when loaded outside the web wrapper', async () => {
  const window = { gdjs: {}, addEventListener() { throw new Error('Must not install'); } }; window.parent = window;
  vm.runInNewContext(await readFile(new URL('../play/game-bridge.js', import.meta.url), 'utf8'), { window });
});

test('the actual compiled Hangar extension sees verified ownership in its extension variable scope', async () => {
  const root = new Map(), extension = new Map(), callbacks = [], listeners = new Map();
  function container(values) {
    const variable = name => ({ setString: value => values.set(name, value), getAsString: () => values.get(name) || '', setBoolean: value => values.set(name, value) });
    return { get: variable, getFromIndex: index => variable(index === 11 ? 'RBPC_Ownership' : 'index' + index) };
  }
  const projectVars = container(root), extensionVars = container(extension);
  const scene = { getGame: () => ({ getVariables: () => projectVars, getVariablesForExtension: () => extensionVars }), getVariablesForExtension: () => extensionVars, getVariables: () => projectVars, getScene: () => scene };
  const parent = { postMessage() {} };
  const gdjs = { registerRuntimeScenePreEventsCallback: callback => callbacks.push(callback), registerRuntimeScenePostEventsCallback: callback => callbacks.push(callback) };
  const window = { gdjs, parent, addEventListener: (type, callback) => listeners.set(type, callback) };
  const context = vm.createContext({ window, gdjs, parent, location: { origin: 'https://rikkirb.github.io' } });
  for (const file of ['gdjs-evtsext__rbpc_paidcontent__rbpc_getownership-func.js', 'gdjs-evtsext__rbpc_paidcontent__rbpc_isowned-func.js']) vm.runInContext(await readFile(new URL('../play/game/' + file, import.meta.url), 'utf8'), context);
  vm.runInContext(await readFile(new URL('../play/game-bridge.js', import.meta.url), 'utf8'), context);
  callbacks[0](scene);
  assert.equal(Boolean(gdjs.evtsExt__RBPC_PaidContent__RBPC_IsOwned.func(scene, null)), false);
  listeners.get('message')({ origin: 'https://rikkirb.github.io', source: parent, data: { type: 'RB_WEB_STATE', owned: true, ready: true, verification: 'server' } });
  assert.equal(root.get('RBPC_Ownership'), 'Owned');
  assert.equal(extension.get('RBPC_Ownership'), 'Owned');
  assert.equal(gdjs.evtsExt__RBPC_PaidContent__RBPC_GetOwnership.func(scene, null), 'Owned');
  assert.equal(Boolean(gdjs.evtsExt__RBPC_PaidContent__RBPC_IsOwned.func(scene, null)), true);
});
