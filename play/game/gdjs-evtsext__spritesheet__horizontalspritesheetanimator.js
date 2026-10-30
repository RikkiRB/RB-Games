
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator || {};

/**
 * Behavior generated from Horizontal sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator = class HorizontalSpriteSheetAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpriteX = behaviorData.SpriteX !== undefined ? behaviorData.SpriteX : Number("16") || 0;
    this._behaviorData.SpriteY = behaviorData.SpriteY !== undefined ? behaviorData.SpriteY : Number("16") || 0;
    this._behaviorData.SpriteSpacing = behaviorData.SpriteSpacing !== undefined ? behaviorData.SpriteSpacing : Number("0") || 0;
    this._behaviorData.AnimationSpeed = Number("1") || 0;
    this._behaviorData.AnimationRow = Number("1") || 0;
    this._behaviorData.FirstFrame = Number("1") || 0;
    this._behaviorData.LastFrame = Number("1") || 0;
    this._behaviorData.CurrentFrame = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.SpriteX !== undefined)
      this._behaviorData.SpriteX = behaviorOverriding.SpriteX;
    if (behaviorOverriding.SpriteY !== undefined)
      this._behaviorData.SpriteY = behaviorOverriding.SpriteY;
    if (behaviorOverriding.SpriteSpacing !== undefined)
      this._behaviorData.SpriteSpacing = behaviorOverriding.SpriteSpacing;
    if (behaviorOverriding.AnimationSpeed !== undefined)
      this._behaviorData.AnimationSpeed = behaviorOverriding.AnimationSpeed;
    if (behaviorOverriding.AnimationRow !== undefined)
      this._behaviorData.AnimationRow = behaviorOverriding.AnimationRow;
    if (behaviorOverriding.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = behaviorOverriding.FirstFrame;
    if (behaviorOverriding.LastFrame !== undefined)
      this._behaviorData.LastFrame = behaviorOverriding.LastFrame;
    if (behaviorOverriding.CurrentFrame !== undefined)
      this._behaviorData.CurrentFrame = behaviorOverriding.CurrentFrame;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    SpriteX: this._behaviorData.SpriteX,
    SpriteY: this._behaviorData.SpriteY,
    SpriteSpacing: this._behaviorData.SpriteSpacing,
    AnimationSpeed: this._behaviorData.AnimationSpeed,
    AnimationRow: this._behaviorData.AnimationRow,
    FirstFrame: this._behaviorData.FirstFrame,
    LastFrame: this._behaviorData.LastFrame,
    CurrentFrame: this._behaviorData.CurrentFrame,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.SpriteX !== undefined)
      this._behaviorData.SpriteX = networkSyncData.props.SpriteX;
    if (networkSyncData.props.SpriteY !== undefined)
      this._behaviorData.SpriteY = networkSyncData.props.SpriteY;
    if (networkSyncData.props.SpriteSpacing !== undefined)
      this._behaviorData.SpriteSpacing = networkSyncData.props.SpriteSpacing;
    if (networkSyncData.props.AnimationSpeed !== undefined)
      this._behaviorData.AnimationSpeed = networkSyncData.props.AnimationSpeed;
    if (networkSyncData.props.AnimationRow !== undefined)
      this._behaviorData.AnimationRow = networkSyncData.props.AnimationRow;
    if (networkSyncData.props.FirstFrame !== undefined)
      this._behaviorData.FirstFrame = networkSyncData.props.FirstFrame;
    if (networkSyncData.props.LastFrame !== undefined)
      this._behaviorData.LastFrame = networkSyncData.props.LastFrame;
    if (networkSyncData.props.CurrentFrame !== undefined)
      this._behaviorData.CurrentFrame = networkSyncData.props.CurrentFrame;
  }

  // Properties:
  
  _getSpriteX() {
    return this._behaviorData.SpriteX !== undefined ? this._behaviorData.SpriteX : Number("16") || 0;
  }
  _setSpriteX(newValue) {
    this._behaviorData.SpriteX = newValue;
  }
  _getSpriteY() {
    return this._behaviorData.SpriteY !== undefined ? this._behaviorData.SpriteY : Number("16") || 0;
  }
  _setSpriteY(newValue) {
    this._behaviorData.SpriteY = newValue;
  }
  _getSpriteSpacing() {
    return this._behaviorData.SpriteSpacing !== undefined ? this._behaviorData.SpriteSpacing : Number("0") || 0;
  }
  _setSpriteSpacing(newValue) {
    this._behaviorData.SpriteSpacing = newValue;
  }
  _getAnimationSpeed() {
    return this._behaviorData.AnimationSpeed !== undefined ? this._behaviorData.AnimationSpeed : Number("1") || 0;
  }
  _setAnimationSpeed(newValue) {
    this._behaviorData.AnimationSpeed = newValue;
  }
  _getAnimationRow() {
    return this._behaviorData.AnimationRow !== undefined ? this._behaviorData.AnimationRow : Number("1") || 0;
  }
  _setAnimationRow(newValue) {
    this._behaviorData.AnimationRow = newValue;
  }
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : Number("1") || 0;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _getLastFrame() {
    return this._behaviorData.LastFrame !== undefined ? this._behaviorData.LastFrame : Number("1") || 0;
  }
  _setLastFrame(newValue) {
    this._behaviorData.LastFrame = newValue;
  }
  _getCurrentFrame() {
    return this._behaviorData.CurrentFrame !== undefined ? this._behaviorData.CurrentFrame : Number("0") || 0;
  }
  _setCurrentFrame(newValue) {
    this._behaviorData.CurrentFrame = newValue;
  }
}

/**
 * Shared data generated from Horizontal sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.SharedData = class HorizontalSpriteSheetAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData = new gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteSheet_HorizontalSpriteSheetAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame(eventsFunctionContext.getArgument("frame"))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame() >= (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastFrame() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame()) + 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame(0)
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].setYOffset(((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationRow()) * (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteY())) + (((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationRow()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing()));
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1[i].setXOffset(((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteX()) + (((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFirstFrame() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpriteSpacing()));
}
}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrame = function(frame, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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
if (argName === "frame") return frame;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype._SetFrameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(32141596);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("__SpriteSheet_Animation", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationSpeed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._SetFrame(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame() + 1, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationRow(eventsFunctionContext.getArgument("NewAnimationRow"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationSpeed(eventsFunctionContext.getArgument("NewAnimationSpeed"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFirstFrame(eventsFunctionContext.getArgument("NewFirstFrame"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastFrame(eventsFunctionContext.getArgument("NewLastFrame"))
}
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._SetFrame(0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimation = function(NewFirstFrame, NewLastFrame, NewAnimationSpeed, NewAnimationRow, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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
if (argName === "NewFirstFrame") return NewFirstFrame;
if (argName === "NewLastFrame") return NewLastFrame;
if (argName === "NewAnimationSpeed") return NewAnimationSpeed;
if (argName === "NewAnimationRow") return NewAnimationRow;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame();}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrame = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimation = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext = {};
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}
}

}


};

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimation = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteSheet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteSheet"),
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

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteSheet::HorizontalSpriteSheetAnimator", gdjs.evtsExt__SpriteSheet__HorizontalSpriteSheetAnimator.HorizontalSpriteSheetAnimator);
