
if (typeof gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase !== "undefined") {
  gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase = {};
gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.idToCallbackMap = new Map();


gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(11).getAsString() == "Owned");
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).setString("Idle");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Already owned. No charge.");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).getAsString() == "Purchasing");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).getAsString() == "Pending");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).getAsString() == "Restoring");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Request already in progress. Wait before retrying.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(10).setString("Purchasing");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("");
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_BeginPurchase.registeredGdjsCallbacks = [];