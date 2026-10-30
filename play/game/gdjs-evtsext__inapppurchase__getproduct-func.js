
if (typeof gdjs.evtsExt__InAppPurchase__GetProduct !== "undefined") {
  gdjs.evtsExt__InAppPurchase__GetProduct.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InAppPurchase__GetProduct = {};
gdjs.evtsExt__InAppPurchase__GetProduct.idToCallbackMap = new Map();


gdjs.evtsExt__InAppPurchase__GetProduct.userFunc0x2a2f3e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if(!window.CdvPurchase || !window.CdvPurchase.store) return;
const store = window.CdvPurchase.store;

const product = store.get(eventsFunctionContext.getArgument("id"));
const destinationVariable = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("variableName"));
// Load product into destination variable.
destinationVariable.fromJSObject(product);

};
gdjs.evtsExt__InAppPurchase__GetProduct.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InAppPurchase__GetProduct.userFunc0x2a2f3e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__InAppPurchase__GetProduct.func = function(runtimeScene, id, variableName, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InAppPurchase__GetProduct.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__InAppPurchase__GetProduct.registeredGdjsCallbacks = [];