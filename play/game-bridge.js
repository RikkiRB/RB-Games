/* This adapter is added to the HTML5 export only. The Android project and its
 * Google Play billing events are unchanged. No gameplay/weapon rules are changed. */
(() => {
  'use strict';
  if (!window.gdjs || !window.parent || window.parent === window) return;
  let state = { owned: false, ready: false, price: '' };
  let lastScene;
  const product = 'full_content_upgrade';
  const global = scene => scene.getGame().getVariables();
  const notify = type => parent.postMessage({ type }, location.origin);
  const override = (name, fn) => { const entry = gdjs['evtsExt__InAppPurchase__' + name]; if (entry) entry.func = fn; };
  const apply = scene => {
    lastScene = scene;
    const variables = global(scene);
    variables.get('RBPC_Ownership').setString(state.owned ? 'Owned' : 'NotOwned');
    variables.get('RBPC_PriceDisplay').setString(state.price || '');
    if (!state.ready) variables.get('RBPC_LastError').setString('Browser purchases are not available yet. Free play is ready.');
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
  for (const name of ['RBPC_PurchaseUpgrade', 'RBPC_RestorePurchases', 'RBPC_RefreshOwnership', 'RBPC_OfflineCacheRestore']) {
    const entry = gdjs['evtsExt__RBPC_PaidContent__' + name];
    if (entry) entry.func = scene => { apply(scene); if (name !== 'RBPC_OfflineCacheRestore') notify(name === 'RBPC_PurchaseUpgrade' ? 'RB_WEB_BUY' : 'RB_WEB_RESTORE'); };
  }
  gdjs.registerRuntimeScenePreEventsCallback(apply);
  gdjs.registerRuntimeScenePostEventsCallback(apply);
  notify('RB_WEB_READY');
})();
