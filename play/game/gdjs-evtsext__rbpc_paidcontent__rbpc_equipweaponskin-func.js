
if (typeof gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin !== "undefined") {
  gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin = {};
gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.idToCallbackMap = new Map();


gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5), eventsFunctionContext.getArgument("SkinId")));
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).setString("basic_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Unknown cosmetic.");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("SkinId")).getChild("compat").getAsString() != "basic");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).setString("basic_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic does not fit this weapon.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.func(runtimeScene, eventsFunctionContext.getArgument("SkinId"), eventsFunctionContext) == 1);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).setString("basic_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic locked.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).setString(eventsFunctionContext.getArgument("SkinId"));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList1 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5), eventsFunctionContext.getArgument("SkinId")));
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("energy_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Unknown cosmetic.");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("SkinId")).getChild("compat").getAsString() != "energy");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("energy_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic does not fit this weapon.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.func(runtimeScene, eventsFunctionContext.getArgument("SkinId"), eventsFunctionContext) == 1);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString("energy_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic locked.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).setString(eventsFunctionContext.getArgument("SkinId"));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList2 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5), eventsFunctionContext.getArgument("SkinId")));
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("homing_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Unknown cosmetic.");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("SkinId")).getChild("compat").getAsString() != "homing");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("homing_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic does not fit this weapon.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.func(runtimeScene, eventsFunctionContext.getArgument("SkinId"), eventsFunctionContext) == 1);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString("homing_free");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic locked.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setString(eventsFunctionContext.getArgument("SkinId"));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList3 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(eventsFunctionContext.globalVariablesForExtension.getFromIndex(5), eventsFunctionContext.getArgument("SkinId")));
if (isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString("shield_default");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Unknown cosmetic.");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.getArgument("SkinId")).getChild("compat").getAsString() != "shield");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString("shield_default");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic does not fit this slot.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__RBPC_PaidContent__RBPC_CanUseContent.func(runtimeScene, eventsFunctionContext.getArgument("SkinId"), eventsFunctionContext) == 1);
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString("shield_default");
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Cosmetic locked.");
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setString(eventsFunctionContext.getArgument("SkinId"));
}
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList4 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("WeaponType") == "basic");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("WeaponType") == "energy");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("WeaponType") == "homing");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("WeaponType") == "shield");
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).setString("Unknown weapon type.");
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.globalVariablesForExtension.getFromIndex(9).getAsString() == "");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("RBPC_V1", "WSkin_Basic", eventsFunctionContext.globalVariablesForExtension.getFromIndex(3).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("RBPC_V1", "WSkin_Energy", eventsFunctionContext.globalVariablesForExtension.getFromIndex(2).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("RBPC_V1", "WSkin_Homing", eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("RBPC_V1", "WSkin_Shield", eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString());
}
}

}

}

};

gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.func = function(runtimeScene, WeaponType, SkinId, parentEventsFunctionContext) {
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
if (argName === "WeaponType") return WeaponType;
if (argName === "SkinId") return SkinId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.eventsList4(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.registeredGdjsCallbacks = [];