
gdjs.evtsExt__Scrollbar__Scrollbar = gdjs.evtsExt__Scrollbar__Scrollbar || {};

/**
 * Object generated from Scrollbar
 */
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar = class Scrollbar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.ScrollPosition = Number("0") || 0;
    this._objectData.ContentLength = Number("2000") || 0;
    this._objectData.ThumbLengthMin = objectData.content.ThumbLengthMin !== undefined ? objectData.content.ThumbLengthMin : Number("40") || 0;
    this._objectData.ShouldHideWhenUseless = objectData.content.ShouldHideWhenUseless !== undefined ? objectData.content.ShouldHideWhenUseless : true;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.ScrollPosition !== newObjectData.content.ScrollPosition)
      this._objectData.ScrollPosition = newObjectData.content.ScrollPosition;
    if (oldObjectData.content.ContentLength !== newObjectData.content.ContentLength)
      this._objectData.ContentLength = newObjectData.content.ContentLength;
    if (oldObjectData.content.ThumbLengthMin !== newObjectData.content.ThumbLengthMin)
      this._objectData.ThumbLengthMin = newObjectData.content.ThumbLengthMin;
    if (oldObjectData.content.ShouldHideWhenUseless !== newObjectData.content.ShouldHideWhenUseless)
      this._objectData.ShouldHideWhenUseless = newObjectData.content.ShouldHideWhenUseless;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getScrollPosition() {
    return this._objectData.ScrollPosition !== undefined ? this._objectData.ScrollPosition : Number("0") || 0;
  }
  _setScrollPosition(newValue) {
    this._objectData.ScrollPosition = newValue;
  }
  _getContentLength() {
    return this._objectData.ContentLength !== undefined ? this._objectData.ContentLength : Number("2000") || 0;
  }
  _setContentLength(newValue) {
    this._objectData.ContentLength = newValue;
  }
  _getThumbLengthMin() {
    return this._objectData.ThumbLengthMin !== undefined ? this._objectData.ThumbLengthMin : Number("40") || 0;
  }
  _setThumbLengthMin(newValue) {
    this._objectData.ThumbLengthMin = newValue;
  }
  _getShouldHideWhenUseless() {
    return this._objectData.ShouldHideWhenUseless !== undefined ? this._objectData.ShouldHideWhenUseless : true;
  }
  _setShouldHideWhenUseless(newValue) {
    this._objectData.ShouldHideWhenUseless = newValue;
  }
  _toggleShouldHideWhenUseless() {
    this._setShouldHideWhenUseless(!this._getShouldHideWhenUseless());
  }

  

  
}

// Methods:
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects3= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects4= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects4= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShouldHideWhenUseless();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1);
/* Reuse gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1[i].hide();
}
}
}

}


};gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Scrollbar_9595_9595Scrollbar_9546Scrollbar_9546prototype_9546doStepPostEventsContext_9546GDBackgroundObjects2Objects = Hashtable.newFrom({"Background": gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2});
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3[0].getY());
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3[i].SetScrollPosition(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3[i].ScrollPosition(eventsFunctionContext) - (eventsFunctionContext.getObjects("Object")[0]._getContentLength()), eventsFunctionContext);
}
}
}

}


{

/* Reuse gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[0].getY()) + (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[0].getHeight());
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetScrollPosition(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[i].ScrollPosition(eventsFunctionContext) + (eventsFunctionContext.getObjects("Object")[0]._getContentLength()), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2);

gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Scrollbar_9595_9595Scrollbar_9546Scrollbar_9546prototype_9546doStepPostEventsContext_9546GDBackgroundObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[i].IsThumbDragged(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2);

/* Reuse gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2 */
gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2);

{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetScrollPosition(((( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[0].getY()) - (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getY())) * (eventsFunctionContext.getObjects("Object")[0]._getContentLength() - (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getHeight())) / ((( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getHeight()) - (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2[0].getHeight())), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetScrollPosition(eventsFunctionContext.getObjects("Object")[0]._getScrollPosition(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateThumbPosition(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(30984180);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetScrollPosition(0, eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].IsScrollingRequired(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetScrollPosition(0, eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i].IsScrollingRequired(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects4.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDBackgroundObjects4.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPostEventsContext.GDThumbObjects4.length = 0;


return;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1[i].setX((( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(Math.max(eventsFunctionContext.getObjects("Object")[0]._getThumbLengthMin(), (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getHeight()) * (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getHeight()) / eventsFunctionContext.getObjects("Object")[0]._getContentLength()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1[i].setY(gdjs.evtTools.common.clamp((( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getY()), (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getY()) + (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getHeight()) - (gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1[i].getHeight()), (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getY()) + eventsFunctionContext.getObjects("Object")[0]._getScrollPosition() * ((( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getHeight()) - (gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1[i].getHeight())) / (eventsFunctionContext.getObjects("Object")[0]._getContentLength() - (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1[0].getHeight()))));
}
}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.UpdateThumbPositionContext.GDThumbObjects2.length = 0;


return;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getScrollPosition();}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ScrollPositionContext.GDThumbObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setScrollPosition(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Value"), 0, Math.max(0, eventsFunctionContext.getObjects("Object")[0]._getContentLength() - (( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1[0].getHeight()))))
}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPosition = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetScrollPositionContext.GDThumbObjects2.length = 0;


return;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getContentLength();}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLength = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.ContentLengthContext.GDThumbObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setContentLength(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLength = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.SetContentLengthContext.GDThumbObjects2.length = 0;


return;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final = [];

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final.push(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).wasJustDropped() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final.push(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1_1final, gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsThumbDraggedContext.GDThumbObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext = {};
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.idToCallbackMap = new Map();
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects2= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects1= [];
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects2= [];


gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).getHeight() < eventsFunctionContext.getObjects("Object")[0]._getContentLength() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1[k] = gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequired = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Background": GDBackgroundObjects
, "Thumb": GDThumbObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Background": thisGDBackgroundObjectsList
, "Thumb": thisGDThumbObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects2.length = 0;

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.IsScrollingRequiredContext.GDThumbObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Scrollbar::Scrollbar", gdjs.evtsExt__Scrollbar__Scrollbar.Scrollbar);
