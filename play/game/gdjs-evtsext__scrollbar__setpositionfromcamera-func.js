
if (typeof gdjs.evtsExt__Scrollbar__SetPositionFromCamera !== "undefined") {
  gdjs.evtsExt__Scrollbar__SetPositionFromCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Scrollbar__SetPositionFromCamera = {};
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects2= [];


gdjs.evtsExt__Scrollbar__SetPositionFromCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(Math.round((( gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1[0].getAngle()) / 90), 2) == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1[i].SetScrollPosition(gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.getArgument("ScrolledLayer"), 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, eventsFunctionContext.getArgument("ScrolledLayer"), 0) / 2, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1[i].SetScrollPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.getArgument("ScrolledLayer"), 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, eventsFunctionContext.getArgument("ScrolledLayer"), 0) / 2, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__Scrollbar__SetPositionFromCamera.func = function(runtimeScene, Object, ScrolledLayer, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Scrollbar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Scrollbar"),
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
if (argName === "ScrolledLayer") return ScrolledLayer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects2.length = 0;

gdjs.evtsExt__Scrollbar__SetPositionFromCamera.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__SetPositionFromCamera.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Scrollbar__SetPositionFromCamera.registeredGdjsCallbacks = [];