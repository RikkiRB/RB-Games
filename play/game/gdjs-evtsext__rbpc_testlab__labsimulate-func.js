
if (typeof gdjs.evtsExt__RBPC_TestLab__LabSimulate !== "undefined") {
  gdjs.evtsExt__RBPC_TestLab__LabSimulate.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RBPC_TestLab__LabSimulate = {};
gdjs.evtsExt__RBPC_TestLab__LabSimulate.idToCallbackMap = new Map();


gdjs.evtsExt__RBPC_TestLab__LabSimulate.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "owned");
}
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("Owned");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Idle");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "revoked");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("Revoked");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Idle");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "pending");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Pending");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "cancelled");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Idle");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "failed");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Failed");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Scenario") == "offline");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Idle");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("NotOwned");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("Idle");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString(eventsFunctionContext.getArgument("Scenario"));
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__RBPC_TestLab__LabSimulate.func = function(runtimeScene, Scenario, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RBPC_TestLab"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RBPC_TestLab"),
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
if (argName === "Scenario") return Scenario;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RBPC_TestLab__LabSimulate.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__RBPC_TestLab__LabSimulate.registeredGdjsCallbacks = [];