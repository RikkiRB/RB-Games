
if (typeof gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent !== "undefined") {
  gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent = {};
gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.idToCallbackMap = new Map();


gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5), eventsFunctionContext.getArgument("ContentId")));
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("ContentId")).getChild("release").getAsString() != "available");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("ContentId")).getChild("entitlement").getAsString() == "Free");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(11).getAsString() == "Owned");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.returnValue = false;}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.func = function(runtimeScene, ContentId, parentEventsFunctionContext) {
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
if (argName === "ContentId") return ContentId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.registeredGdjsCallbacks = [];