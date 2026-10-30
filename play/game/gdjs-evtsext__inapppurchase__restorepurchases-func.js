
if (typeof gdjs.evtsExt__InAppPurchase__RestorePurchases !== "undefined") {
  gdjs.evtsExt__InAppPurchase__RestorePurchases.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__RestorePurchases = {};
gdjs.evtsExt__InAppPurchase__RestorePurchases.idToCallbackMap = new Map();


gdjs.evtsExt__InAppPurchase__RestorePurchases.userFunc0x2a35218 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

const variableName = eventsFunctionContext.getArgument("variableName");

store.restorePurchases().then((error) => {
    if (error) {
        console.error('Error while restoring purchases:', error);
        return;
    }
    console.info('Purchases restored.');
    if (variableName) {
        const variable = runtimeScene.getVariables().get(variableName);
        variable.setBoolean(true);
    }
});

};
gdjs.evtsExt__InAppPurchase__RestorePurchases.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__RestorePurchases.userFunc0x2a35218(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__InAppPurchase__RestorePurchases.func = function(runtimeScene, variableName, parentEventsFunctionContext) {
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
if (argName === "variableName") return variableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__RestorePurchases.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__RestorePurchases.registeredGdjsCallbacks = [];