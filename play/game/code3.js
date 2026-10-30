gdjs.EnterNameCode = {};
gdjs.EnterNameCode.localVariables = [];
gdjs.EnterNameCode.idToCallbackMap = new Map();
gdjs.EnterNameCode.GDContinueButtonObjects1= [];
gdjs.EnterNameCode.GDContinueButtonObjects2= [];
gdjs.EnterNameCode.GDSubtitleTextObjects1= [];
gdjs.EnterNameCode.GDSubtitleTextObjects2= [];
gdjs.EnterNameCode.GDPlayerNameInputObjects1= [];
gdjs.EnterNameCode.GDPlayerNameInputObjects2= [];
gdjs.EnterNameCode.GDstarbgObjects1= [];
gdjs.EnterNameCode.GDstarbgObjects2= [];
gdjs.EnterNameCode.GDEnterNameTextObjects1= [];
gdjs.EnterNameCode.GDEnterNameTextObjects2= [];
gdjs.EnterNameCode.GDbuttonBGObjects1= [];
gdjs.EnterNameCode.GDbuttonBGObjects2= [];
gdjs.EnterNameCode.GDpanelBGObjects1= [];
gdjs.EnterNameCode.GDpanelBGObjects2= [];
gdjs.EnterNameCode.GDPlanetObjects1= [];
gdjs.EnterNameCode.GDPlanetObjects2= [];
gdjs.EnterNameCode.GDPlanetIntroObjects1= [];
gdjs.EnterNameCode.GDPlanetIntroObjects2= [];
gdjs.EnterNameCode.GDCommanderPortraitObjects1= [];
gdjs.EnterNameCode.GDCommanderPortraitObjects2= [];
gdjs.EnterNameCode.GDCommsPanelObjects1= [];
gdjs.EnterNameCode.GDCommsPanelObjects2= [];
gdjs.EnterNameCode.GDCommanderNameTextObjects1= [];
gdjs.EnterNameCode.GDCommanderNameTextObjects2= [];
gdjs.EnterNameCode.GDCommsDialogueTextObjects1= [];
gdjs.EnterNameCode.GDCommsDialogueTextObjects2= [];


gdjs.EnterNameCode.mapOfGDgdjs_9546EnterNameCode_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.EnterNameCode.GDContinueButtonObjects1});
gdjs.EnterNameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.EnterNameCode.GDSubtitleTextObjects1);
{for(var i = 0, len = gdjs.EnterNameCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDSubtitleTextObjects1[i].getBehavior("Text").setText("TOUCH & HOLD — AIM • BOOST • FIRE" + gdjs.evtTools.string.newLine() + "RELEASE — COAST" + gdjs.evtTools.string.newLine());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.EnterNameCode.GDSubtitleTextObjects1);
{for(var i = 0, len = gdjs.EnterNameCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDSubtitleTextObjects1[i].getBehavior("Text").setText("AIM — Mouse" + gdjs.evtTools.string.newLine() + "THRUST — W / ↑" + gdjs.evtTools.string.newLine() + "BRAKE — S / ↓" + gdjs.evtTools.string.newLine() + "FIRE — Left Click" + gdjs.evtTools.string.newLine());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.EnterNameCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EnterNameCode.mapOfGDgdjs_9546EnterNameCode_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.EnterNameCode.GDPlayerNameInputObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(13).setString((( gdjs.EnterNameCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.EnterNameCode.GDPlayerNameInputObjects1[0].getText()));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("starbg"), gdjs.EnterNameCode.GDstarbgObjects1);
{for(var i = 0, len = gdjs.EnterNameCode.GDstarbgObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDstarbgObjects1[i].setYOffset(gdjs.EnterNameCode.GDstarbgObjects1[i].getYOffset() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.EnterNameCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EnterNameCode.GDContinueButtonObjects1.length;i<l;++i) {
    if ( gdjs.EnterNameCode.GDContinueButtonObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.EnterNameCode.GDContinueButtonObjects1[k] = gdjs.EnterNameCode.GDContinueButtonObjects1[i];
        ++k;
    }
}
gdjs.EnterNameCode.GDContinueButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33145516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EnterNameCode.GDContinueButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("buttonBG"), gdjs.EnterNameCode.GDbuttonBGObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Bleep_07.aac", false, 12 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.EnterNameCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDContinueButtonObjects1[i].setY(gdjs.EnterNameCode.GDContinueButtonObjects1[i].getY() - (4));
}
}
{for(var i = 0, len = gdjs.EnterNameCode.GDbuttonBGObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDbuttonBGObjects1[i].setY(gdjs.EnterNameCode.GDbuttonBGObjects1[i].getY() - (4));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.EnterNameCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EnterNameCode.GDContinueButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.EnterNameCode.GDContinueButtonObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.EnterNameCode.GDContinueButtonObjects1[k] = gdjs.EnterNameCode.GDContinueButtonObjects1[i];
        ++k;
    }
}
gdjs.EnterNameCode.GDContinueButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33147028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.EnterNameCode.GDContinueButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("buttonBG"), gdjs.EnterNameCode.GDbuttonBGObjects1);
{for(var i = 0, len = gdjs.EnterNameCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDContinueButtonObjects1[i].setY(gdjs.EnterNameCode.GDContinueButtonObjects1[i].getY() + (4));
}
}
{for(var i = 0, len = gdjs.EnterNameCode.GDbuttonBGObjects1.length ;i < len;++i) {
    gdjs.EnterNameCode.GDbuttonBGObjects1[i].setY(gdjs.EnterNameCode.GDbuttonBGObjects1[i].getY() + (4));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.EnterNameCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EnterNameCode.GDContinueButtonObjects1.length;i<l;++i) {
    if ( gdjs.EnterNameCode.GDContinueButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.EnterNameCode.GDContinueButtonObjects1[k] = gdjs.EnterNameCode.GDContinueButtonObjects1[i];
        ++k;
    }
}
gdjs.EnterNameCode.GDContinueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
}

}


};

gdjs.EnterNameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EnterNameCode.GDContinueButtonObjects1.length = 0;
gdjs.EnterNameCode.GDContinueButtonObjects2.length = 0;
gdjs.EnterNameCode.GDSubtitleTextObjects1.length = 0;
gdjs.EnterNameCode.GDSubtitleTextObjects2.length = 0;
gdjs.EnterNameCode.GDPlayerNameInputObjects1.length = 0;
gdjs.EnterNameCode.GDPlayerNameInputObjects2.length = 0;
gdjs.EnterNameCode.GDstarbgObjects1.length = 0;
gdjs.EnterNameCode.GDstarbgObjects2.length = 0;
gdjs.EnterNameCode.GDEnterNameTextObjects1.length = 0;
gdjs.EnterNameCode.GDEnterNameTextObjects2.length = 0;
gdjs.EnterNameCode.GDbuttonBGObjects1.length = 0;
gdjs.EnterNameCode.GDbuttonBGObjects2.length = 0;
gdjs.EnterNameCode.GDpanelBGObjects1.length = 0;
gdjs.EnterNameCode.GDpanelBGObjects2.length = 0;
gdjs.EnterNameCode.GDPlanetObjects1.length = 0;
gdjs.EnterNameCode.GDPlanetObjects2.length = 0;
gdjs.EnterNameCode.GDPlanetIntroObjects1.length = 0;
gdjs.EnterNameCode.GDPlanetIntroObjects2.length = 0;
gdjs.EnterNameCode.GDCommanderPortraitObjects1.length = 0;
gdjs.EnterNameCode.GDCommanderPortraitObjects2.length = 0;
gdjs.EnterNameCode.GDCommsPanelObjects1.length = 0;
gdjs.EnterNameCode.GDCommsPanelObjects2.length = 0;
gdjs.EnterNameCode.GDCommanderNameTextObjects1.length = 0;
gdjs.EnterNameCode.GDCommanderNameTextObjects2.length = 0;
gdjs.EnterNameCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.EnterNameCode.GDCommsDialogueTextObjects2.length = 0;

gdjs.EnterNameCode.eventsList0(runtimeScene);
gdjs.EnterNameCode.GDContinueButtonObjects1.length = 0;
gdjs.EnterNameCode.GDContinueButtonObjects2.length = 0;
gdjs.EnterNameCode.GDSubtitleTextObjects1.length = 0;
gdjs.EnterNameCode.GDSubtitleTextObjects2.length = 0;
gdjs.EnterNameCode.GDPlayerNameInputObjects1.length = 0;
gdjs.EnterNameCode.GDPlayerNameInputObjects2.length = 0;
gdjs.EnterNameCode.GDstarbgObjects1.length = 0;
gdjs.EnterNameCode.GDstarbgObjects2.length = 0;
gdjs.EnterNameCode.GDEnterNameTextObjects1.length = 0;
gdjs.EnterNameCode.GDEnterNameTextObjects2.length = 0;
gdjs.EnterNameCode.GDbuttonBGObjects1.length = 0;
gdjs.EnterNameCode.GDbuttonBGObjects2.length = 0;
gdjs.EnterNameCode.GDpanelBGObjects1.length = 0;
gdjs.EnterNameCode.GDpanelBGObjects2.length = 0;
gdjs.EnterNameCode.GDPlanetObjects1.length = 0;
gdjs.EnterNameCode.GDPlanetObjects2.length = 0;
gdjs.EnterNameCode.GDPlanetIntroObjects1.length = 0;
gdjs.EnterNameCode.GDPlanetIntroObjects2.length = 0;
gdjs.EnterNameCode.GDCommanderPortraitObjects1.length = 0;
gdjs.EnterNameCode.GDCommanderPortraitObjects2.length = 0;
gdjs.EnterNameCode.GDCommsPanelObjects1.length = 0;
gdjs.EnterNameCode.GDCommsPanelObjects2.length = 0;
gdjs.EnterNameCode.GDCommanderNameTextObjects1.length = 0;
gdjs.EnterNameCode.GDCommanderNameTextObjects2.length = 0;
gdjs.EnterNameCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.EnterNameCode.GDCommsDialogueTextObjects2.length = 0;


return;

}

gdjs['EnterNameCode'] = gdjs.EnterNameCode;
