
if (typeof gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore !== "undefined") {
  gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore = {};
gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.idToCallbackMap = new Map();


gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(11).setString("Owned");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).setString("Unavailable");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Offline. Showing last verified access.");
}
}

}


};

gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RBPC_PaidContent"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RBPC_PaidContent"),
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


gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_OfflineCacheRestore.registeredGdjsCallbacks = [];