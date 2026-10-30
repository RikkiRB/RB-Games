
gdjs.evtsExt__MultiplayerCustomLobbies__Loading = gdjs.evtsExt__MultiplayerCustomLobbies__Loading || {};

/**
 * Behavior generated from Loading
 */
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading = class Loading extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.time = Number("") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.time !== undefined)
      this._behaviorData.time = behaviorOverriding.time;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    time: this._behaviorData.time,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.time !== undefined)
      this._behaviorData.time = networkSyncData.props.time;
  }

  // Properties:
  
  _gettime() {
    return this._behaviorData.time !== undefined ? this._behaviorData.time : Number("") || 0;
  }
  _settime(newValue) {
    this._behaviorData.time = newValue;
  }
}

/**
 * Shared data generated from Loading
 */
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.SharedData = class LoadingSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._MultiplayerCustomLobbies_LoadingSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._MultiplayerCustomLobbies_LoadingSharedData = new gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.SharedData(
      initialData
    );
  }
  return instanceContainer._MultiplayerCustomLobbies_LoadingSharedData;
}

// Methods:
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._settime(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettime()+(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawArc(0, 0, 20, (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettime() * 360) - 90, ((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._gettime() * 360) + 60) - 90, false, false);
}
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MultiplayerCustomLobbies"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MultiplayerCustomLobbies"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("MultiplayerCustomLobbies::Loading", gdjs.evtsExt__MultiplayerCustomLobbies__Loading.Loading);
