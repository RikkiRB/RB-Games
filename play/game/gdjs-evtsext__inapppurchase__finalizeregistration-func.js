
if (typeof gdjs.evtsExt__InAppPurchase__FinalizeRegistration !== "undefined") {
  gdjs.evtsExt__InAppPurchase__FinalizeRegistration.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__FinalizeRegistration = {};
gdjs.evtsExt__InAppPurchase__FinalizeRegistration.idToCallbackMap = new Map();


gdjs.evtsExt__InAppPurchase__FinalizeRegistration.userFunc0x2a4c348 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

store.initialize();
store.update();
store.ready(() => {
    console.info('IAP store is ready!')
    const variable = runtimeScene.getVariables().get("IAP_STORE_READY");
    variable.setBoolean(true);
})

};
gdjs.evtsExt__InAppPurchase__FinalizeRegistration.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__FinalizeRegistration.userFunc0x2a4c348(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__InAppPurchase__FinalizeRegistration.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__FinalizeRegistration.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__FinalizeRegistration.registeredGdjsCallbacks = [];