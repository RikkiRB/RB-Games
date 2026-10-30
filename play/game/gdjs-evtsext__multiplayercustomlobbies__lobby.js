
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby || {};

/**
 * Object generated from Custom lobby
 */
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby = class Lobby extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.Full = false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Full !== newObjectData.content.Full)
      this._objectData.Full = newObjectData.content.Full;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getFull() {
    return this._objectData.Full !== undefined ? this._objectData.Full : false;
  }
  _setFull(newValue) {
    this._objectData.Full = newValue;
  }
  _toggleFull() {
    this._setFull(!this._getFull());
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("Full", false);
}
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1[k] = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isSearchingForLobbyToJoin(runtimeScene));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1 */
{gdjs.multiplayer.authenticateAndQuickJoinWithLobbyID(runtimeScene, ((gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1[0].getVariables()).get("LobbyID").getAsString(), true, false);
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLobbyName"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("LobbyName"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("NameLobby"));
}
for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("NameLobby"));
}
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyName = function(NameLobby, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "NameLobby") return NameLobby;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyNameContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapPlayersCount"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("PlayersCount"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getArgument("PlayersInLobby")) + "/" + ("" + eventsFunctionContext.getArgument("MaxPlayers")));
}
for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getArgument("PlayersInLobby")) + "/" + ("" + eventsFunctionContext.getArgument("MaxPlayers")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("PlayersInLobby") >= eventsFunctionContext.getArgument("MaxPlayers"));
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1[i].Activate(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("Full", true);
}
}
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1[i].SetLabelTextOp("Full", eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0]._setFull(true)
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCount = function(PlayersInLobby, MaxPlayers, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "PlayersInLobby") return PlayersInLobby;
if (argName === "MaxPlayers") return MaxPlayers;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetPlayersCountContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1[i].returnVariable(gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1[i].getVariables().get("LobbyID")).setString(eventsFunctionContext.getArgument("LobbyID"));
}
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyID = function(LobbyID, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "LobbyID") return LobbyID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.SetLobbyIDContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getFull();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getFull();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFull = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.IsFullContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext = {};
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.idToCallbackMap = new Map();
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects2= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects2= [];


gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("YesOrNo");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1[i].Activate(false, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("YesOrNo");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("JoinButton"), gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1[i].Activate(true, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractions = function(YesOrNo, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDPlayersCountObjectsList = [...runtimeScene.getObjects("PlayersCount")];
var GDPlayersCountObjects = Hashtable.newFrom({"PlayersCount": thisGDPlayersCountObjectsList});
var thisGDLobbyNameObjectsList = [...runtimeScene.getObjects("LobbyName")];
var GDLobbyNameObjects = Hashtable.newFrom({"LobbyName": thisGDLobbyNameObjectsList});
var thisGDJoinButtonObjectsList = [...runtimeScene.getObjects("JoinButton")];
var GDJoinButtonObjects = Hashtable.newFrom({"JoinButton": thisGDJoinButtonObjectsList});
var thisGDBitmapLobbyNameObjectsList = [...runtimeScene.getObjects("BitmapLobbyName")];
var GDBitmapLobbyNameObjects = Hashtable.newFrom({"BitmapLobbyName": thisGDBitmapLobbyNameObjectsList});
var thisGDBitmapPlayersCountObjectsList = [...runtimeScene.getObjects("BitmapPlayersCount")];
var GDBitmapPlayersCountObjects = Hashtable.newFrom({"BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "PlayersCount": GDPlayersCountObjects
, "LobbyName": GDLobbyNameObjects
, "JoinButton": GDJoinButtonObjects
, "BitmapLobbyName": GDBitmapLobbyNameObjects
, "BitmapPlayersCount": GDBitmapPlayersCountObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "PlayersCount": thisGDPlayersCountObjectsList
, "LobbyName": thisGDLobbyNameObjectsList
, "JoinButton": thisGDJoinButtonObjectsList
, "BitmapLobbyName": thisGDBitmapLobbyNameObjectsList
, "BitmapPlayersCount": thisGDBitmapPlayersCountObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "YesOrNo") return YesOrNo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDJoinButtonObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapLobbyNameObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBitmapPlayersCountObjects2.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.ActivateInteractionsContext.GDBackgroundObjects2.length = 0;


return;
}

gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("MultiplayerCustomLobbies::Lobby", gdjs.evtsExt__MultiplayerCustomLobbies__Lobby.Lobby);
