/* This adapter is added to the HTML5 export only. The Android project and its
 * Google Play billing events are unchanged. No gameplay/weapon rules are changed. */
(() => {
  'use strict';
  if (!window.gdjs || !window.parent || window.parent === window) return;
  let state = { owned: false, ready: false, price: '' };
  let lastScene;
  const product = 'full_content_upgrade';
  // GDevelop 5.6 gives event extensions their own global variable container.
  // Keep it and legacy project globals in agreement; the compiled Hangar reads
  // the extension container while older JavaScript events read project globals.
  const global = scene => scene.getGame().getVariablesForExtension?.('RBPC_PaidContent') || scene.getGame().getVariables();
  const notify = type => parent.postMessage({ type }, location.origin);
  const override = (name, fn) => { const entry = gdjs['evtsExt__InAppPurchase__' + name]; if (entry) entry.func = fn; };
  const apply = scene => {
    lastScene = scene;
    for (const variables of new Set([global(scene), scene.getGame().getVariables()])) {
      variables.get('RBPC_Ownership').setString(state.owned ? 'Owned' : 'NotOwned');
      variables.get('RBPC_PriceDisplay').setString(state.price || '');
      variables.get('RBPC_Operation').setString(state.ready || state.owned ? 'Idle' : 'Failed');
      variables.get('RBPC_LastError').setString(!state.ready && !state.owned ? 'Browser purchases are not available yet. Free play is ready.' : '');
    }
  };
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== parent || event.data?.type !== 'RB_WEB_STATE') return;
    state = { owned: event.data.owned === true && ['server', 'signed-offline'].includes(event.data.verification), ready: event.data.ready === true, price: typeof event.data.price === 'string' ? event.data.price : '' };
    if (lastScene) apply(lastScene);
  });
  for (const name of ['RegisterItem', 'FinalizeRegistration', 'FinalizePurchase', 'WatchItemEvent']) override(name, () => {});
  override('StoreReady', () => state.ready);
  override('ProductOwned', (_scene, id) => id === product && state.owned);
  override('GetProduct', (scene, id, variableName) => {
    if (id === product) scene.getVariables().get(variableName).fromJSObject({ id, owned: state.owned, pricing: { price: state.price }, offers: [{ pricingPhases: [{ price: state.price }] }] });
  });
  override('OrderItem', (scene, id) => { if (id === product) { global(scene).get('RBPC_Operation').setString('Idle'); notify('RB_WEB_BUY'); } });
  override('RestorePurchases', (scene, variableName) => { scene.getVariables().get(variableName).setBoolean(false); global(scene).get('RBPC_Operation').setString('Idle'); notify('RB_WEB_RESTORE'); });
  for (const name of ['RBPC_PurchaseUpgrade', 'RBPC_RestorePurchases', 'RBPC_RefreshOwnership', 'RBPC_OfflineCacheRestore', 'RBPC_BeginStoreInit']) {
    const entry = gdjs['evtsExt__RBPC_PaidContent__' + name];
    if (entry) entry.func = scene => { apply(scene); if (!['RBPC_OfflineCacheRestore', 'RBPC_BeginStoreInit'].includes(name)) notify(name === 'RBPC_PurchaseUpgrade' ? 'RB_WEB_BUY' : 'RB_WEB_RESTORE'); };
  }
  gdjs.registerRuntimeScenePreEventsCallback(apply);
  gdjs.registerRuntimeScenePostEventsCallback(apply);
  notify('RB_WEB_READY');
})();
