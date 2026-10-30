
if (typeof gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics !== "undefined") {
  gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics = {};
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.idToCallbackMap = new Map();
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachIndex2 = 0;

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachObjects2 = [];

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachTemporary2 = null;

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachTotalCount2 = 0;

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects4= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects1= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3= [];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects4= [];


gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDTargetObjectObjects2Objects = Hashtable.newFrom({"TargetObject": gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2});
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDProjectileObjectObjects3Objects = Hashtable.newFrom({"ProjectileObject": gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3});
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDTargetObjectObjects3Objects = Hashtable.newFrom({"TargetObject": gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3});
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getGravityScale() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setGravityScale(0);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getAngularVelocity() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).setAngularVelocity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].rotateTowardPosition((( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3[0].getCenterYInScene()), eventsFunctionContext.getArgument("RotationSpeed"), runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].returnVariable(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("Mass")).setNumber((gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).getDensity()) * (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getWidth()) * (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getHeight()));
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("InitialBoostCompleted"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariableNumber(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("Mass")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).applyPolarImpulse((gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getAngle()), 10 * eventsFunctionContext.getArgument("InitialSpeed") / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("Mass"))), (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getCenterXInScene()), (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("InitialBoostCompleted"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariableNumber(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("Mass")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsBehavior")).applyPolarImpulse((gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getAngle()), 10 * eventsFunctionContext.getArgument("Acceleration") / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getVariables().get("__HomingProjectile").getChild("Mass"))), (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getCenterXInScene()), (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].getCenterYInScene()));
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("MaxLifetime") != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].timerElapsedTime("__HomingProjectile_Lifetime", eventsFunctionContext.getArgument("MaxLifetime")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[k] = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("DeleteOnCollision");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDProjectileObjectObjects3Objects, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDTargetObjectObjects3Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ProjectileObject"), gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1);

for (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachIndex2 = 0;gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachIndex2 < gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1.length;++gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2);
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2.length = 0;


gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachTemporary2 = gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1[gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachIndex2];
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2.push(gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.mapOfGDgdjs_9546evtsExt_9595_9595HomingProjectile_9595_9595MoveTowardsTargetPhysics_9546GDTargetObjectObjects2Objects, (gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2.length !== 0 ? gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.func = function(runtimeScene, ProjectileObject, PhysicsBehavior, TargetObject, RotationSpeed, InitialSpeed, Acceleration, MaxLifetime, DeleteOnCollision, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ProjectileObject": ProjectileObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"ProjectileObject": gdjs.objectsListsToArray(ProjectileObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
"PhysicsBehavior": PhysicsBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("HomingProjectile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("HomingProjectile"),
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
if (argName === "RotationSpeed") return RotationSpeed;
if (argName === "InitialSpeed") return InitialSpeed;
if (argName === "Acceleration") return Acceleration;
if (argName === "MaxLifetime") return MaxLifetime;
if (argName === "DeleteOnCollision") return DeleteOnCollision;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects4.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects4.length = 0;

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects2.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects3.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDProjectileObjectObjects4.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects3.length = 0;
gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.GDTargetObjectObjects4.length = 0;


return;
}

gdjs.evtsExt__HomingProjectile__MoveTowardsTargetPhysics.registeredGdjsCallbacks = [];