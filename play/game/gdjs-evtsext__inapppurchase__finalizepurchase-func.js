
if (typeof gdjs.evtsExt__InAppPurchase__FinalizePurchase !== "undefined") {
  gdjs.evtsExt__InAppPurchase__FinalizePurchase.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__FinalizePurchase = {};
gdjs.evtsExt__InAppPurchase__FinalizePurchase.idToCallbackMap = new Map();


gdjs.evtsExt__InAppPurchase__FinalizePurchase.userFunc0x2a337e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

const productId = eventsFunctionContext.getArgument("id");

// Check current transactions, and validate latest one with this product id.
const transactions = store.localTransactions;
const nonFinishedTransactions = transactions.filter(transaction => transaction.state === 'approved');
for (const transaction of nonFinishedTransactions) {
    const productIds = transaction.products.map(({ id }) => id);
    if (productIds.includes(productId)) {
        // Mark this transaction as finished, for the store to consider the product as given to the user.
        transaction.finish();
        // Return early as we assume transactions are finished one by one.
        return;
    }
}
};
gdjs.evtsExt__InAppPurchase__FinalizePurchase.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__FinalizePurchase.userFunc0x2a337e8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__InAppPurchase__FinalizePurchase.func = function(runtimeScene, id, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("InAppPurchase"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("InAppPurchase"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__FinalizePurchase.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__FinalizePurchase.registeredGdjsCallbacks = [];