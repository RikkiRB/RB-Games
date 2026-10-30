gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDCREDITSObjects1= [];
gdjs.CreditsCode.GDCREDITSObjects2= [];
gdjs.CreditsCode.GDMainCreditsObjects1= [];
gdjs.CreditsCode.GDMainCreditsObjects2= [];
gdjs.CreditsCode.GDblockerObjects1= [];
gdjs.CreditsCode.GDblockerObjects2= [];
gdjs.CreditsCode.GDStarsObjects1= [];
gdjs.CreditsCode.GDStarsObjects2= [];
gdjs.CreditsCode.GDNewTiledSpriteObjects1= [];
gdjs.CreditsCode.GDNewTiledSpriteObjects2= [];
gdjs.CreditsCode.GDEXITObjects1= [];
gdjs.CreditsCode.GDEXITObjects2= [];
gdjs.CreditsCode.GDbuttonBGObjects1= [];
gdjs.CreditsCode.GDbuttonBGObjects2= [];
gdjs.CreditsCode.GDpanelBGObjects1= [];
gdjs.CreditsCode.GDpanelBGObjects2= [];
gdjs.CreditsCode.GDpanelBGtopObjects1= [];
gdjs.CreditsCode.GDpanelBGtopObjects2= [];
gdjs.CreditsCode.GDbuttonBG2Objects1= [];
gdjs.CreditsCode.GDbuttonBG2Objects2= [];
gdjs.CreditsCode.GDPlanetObjects1= [];
gdjs.CreditsCode.GDPlanetObjects2= [];
gdjs.CreditsCode.GDPlanetIntroObjects1= [];
gdjs.CreditsCode.GDPlanetIntroObjects2= [];
gdjs.CreditsCode.GDCommanderPortraitObjects1= [];
gdjs.CreditsCode.GDCommanderPortraitObjects2= [];
gdjs.CreditsCode.GDCommsPanelObjects1= [];
gdjs.CreditsCode.GDCommsPanelObjects2= [];
gdjs.CreditsCode.GDCommanderNameTextObjects1= [];
gdjs.CreditsCode.GDCommanderNameTextObjects2= [];
gdjs.CreditsCode.GDCommsDialogueTextObjects1= [];
gdjs.CreditsCode.GDCommsDialogueTextObjects2= [];


gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDEXITObjects1Objects = Hashtable.newFrom({"EXIT": gdjs.CreditsCode.GDEXITObjects1});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MainCredits"), gdjs.CreditsCode.GDMainCreditsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDMainCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDMainCreditsObjects1[i].setY(gdjs.CreditsCode.GDMainCreditsObjects1[i].getY() - (40 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainCredits"), gdjs.CreditsCode.GDMainCreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDMainCreditsObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDMainCreditsObjects1[i].getAABBBottom() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDMainCreditsObjects1[k] = gdjs.CreditsCode.GDMainCreditsObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDMainCreditsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT"), gdjs.CreditsCode.GDEXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDEXITObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT"), gdjs.CreditsCode.GDEXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDEXITObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDEXITObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDEXITObjects1[k] = gdjs.CreditsCode.GDEXITObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDEXITObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16731404);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Bleep_07.aac", false, 12 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT"), gdjs.CreditsCode.GDEXITObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDEXITObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDEXITObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDEXITObjects1[k] = gdjs.CreditsCode.GDEXITObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDEXITObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCREDITSObjects1.length = 0;
gdjs.CreditsCode.GDCREDITSObjects2.length = 0;
gdjs.CreditsCode.GDMainCreditsObjects1.length = 0;
gdjs.CreditsCode.GDMainCreditsObjects2.length = 0;
gdjs.CreditsCode.GDblockerObjects1.length = 0;
gdjs.CreditsCode.GDblockerObjects2.length = 0;
gdjs.CreditsCode.GDStarsObjects1.length = 0;
gdjs.CreditsCode.GDStarsObjects2.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CreditsCode.GDEXITObjects1.length = 0;
gdjs.CreditsCode.GDEXITObjects2.length = 0;
gdjs.CreditsCode.GDbuttonBGObjects1.length = 0;
gdjs.CreditsCode.GDbuttonBGObjects2.length = 0;
gdjs.CreditsCode.GDpanelBGObjects1.length = 0;
gdjs.CreditsCode.GDpanelBGObjects2.length = 0;
gdjs.CreditsCode.GDpanelBGtopObjects1.length = 0;
gdjs.CreditsCode.GDpanelBGtopObjects2.length = 0;
gdjs.CreditsCode.GDbuttonBG2Objects1.length = 0;
gdjs.CreditsCode.GDbuttonBG2Objects2.length = 0;
gdjs.CreditsCode.GDPlanetObjects1.length = 0;
gdjs.CreditsCode.GDPlanetObjects2.length = 0;
gdjs.CreditsCode.GDPlanetIntroObjects1.length = 0;
gdjs.CreditsCode.GDPlanetIntroObjects2.length = 0;
gdjs.CreditsCode.GDCommanderPortraitObjects1.length = 0;
gdjs.CreditsCode.GDCommanderPortraitObjects2.length = 0;
gdjs.CreditsCode.GDCommsPanelObjects1.length = 0;
gdjs.CreditsCode.GDCommsPanelObjects2.length = 0;
gdjs.CreditsCode.GDCommanderNameTextObjects1.length = 0;
gdjs.CreditsCode.GDCommanderNameTextObjects2.length = 0;
gdjs.CreditsCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.CreditsCode.GDCommsDialogueTextObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDCREDITSObjects1.length = 0;
gdjs.CreditsCode.GDCREDITSObjects2.length = 0;
gdjs.CreditsCode.GDMainCreditsObjects1.length = 0;
gdjs.CreditsCode.GDMainCreditsObjects2.length = 0;
gdjs.CreditsCode.GDblockerObjects1.length = 0;
gdjs.CreditsCode.GDblockerObjects2.length = 0;
gdjs.CreditsCode.GDStarsObjects1.length = 0;
gdjs.CreditsCode.GDStarsObjects2.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CreditsCode.GDEXITObjects1.length = 0;
gdjs.CreditsCode.GDEXITObjects2.length = 0;
gdjs.CreditsCode.GDbuttonBGObjects1.length = 0;
gdjs.CreditsCode.GDbuttonBGObjects2.length = 0;
gdjs.CreditsCode.GDpanelBGObjects1.length = 0;
gdjs.CreditsCode.GDpanelBGObjects2.length = 0;
gdjs.CreditsCode.GDpanelBGtopObjects1.length = 0;
gdjs.CreditsCode.GDpanelBGtopObjects2.length = 0;
gdjs.CreditsCode.GDbuttonBG2Objects1.length = 0;
gdjs.CreditsCode.GDbuttonBG2Objects2.length = 0;
gdjs.CreditsCode.GDPlanetObjects1.length = 0;
gdjs.CreditsCode.GDPlanetObjects2.length = 0;
gdjs.CreditsCode.GDPlanetIntroObjects1.length = 0;
gdjs.CreditsCode.GDPlanetIntroObjects2.length = 0;
gdjs.CreditsCode.GDCommanderPortraitObjects1.length = 0;
gdjs.CreditsCode.GDCommanderPortraitObjects2.length = 0;
gdjs.CreditsCode.GDCommsPanelObjects1.length = 0;
gdjs.CreditsCode.GDCommsPanelObjects2.length = 0;
gdjs.CreditsCode.GDCommanderNameTextObjects1.length = 0;
gdjs.CreditsCode.GDCommanderNameTextObjects2.length = 0;
gdjs.CreditsCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.CreditsCode.GDCommsDialogueTextObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
