
if (typeof gdjs.evtsExt__InAppPurchase__WatchItemEvent !== "undefined") {
  gdjs.evtsExt__InAppPurchase__WatchItemEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__WatchItemEvent = {};
gdjs.evtsExt__InAppPurchase__WatchItemEvent.idToCallbackMap = new Map();


gdjs.evtsExt__InAppPurchase__WatchItemEvent.userFunc0x2a2f3e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

const eventName = eventsFunctionContext.getArgument("event");
const productId = eventsFunctionContext.getArgument("id");
const variableName = eventsFunctionContext.getArgument("variableName");

const transactionCallback = (transaction) => {
    const isProductInTransaction = !!transaction.products.find(transactionProduct => transactionProduct.id === productId)
    const isTransactionInStateBeingWatched = transaction.state === eventName;
    // If the product being watched is in the list of products in the transaction, save into a variable.
    if (isProductInTransaction && isTransactionInStateBeingWatched) {
        const variable = runtimeScene.getVariables().get(variableName);
        variable.setBoolean(true);
    }
}

// If this action is watching the approved event, register a callback when a transaction is approved.
if (eventName === 'approved') {
    store.when().approved((transaction) => {
        transactionCallback(transaction);
    })
};

// If this action is watching the finished event, register a callback when a transaction is finished.
if (eventName === 'finished') {
    store.when().finished((transaction) => {
        transactionCallback(transaction);
    })
};

};
gdjs.evtsExt__InAppPurchase__WatchItemEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__WatchItemEvent.userFunc0x2a2f3e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__InAppPurchase__WatchItemEvent.func = function(runtimeScene, id, variableName, event, parentEventsFunctionContext) {
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
if (argName === "variableName") return variableName;
if (argName === "event") return event;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__WatchItemEvent.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__WatchItemEvent.registeredGdjsCallbacks = [];