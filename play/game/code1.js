gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.localVariables = [];
gdjs.TitleScreenCode.idToCallbackMap = new Map();
gdjs.TitleScreenCode.GDTitleTextObjects1= [];
gdjs.TitleScreenCode.GDTitleTextObjects2= [];
gdjs.TitleScreenCode.GDTitleTextObjects3= [];
gdjs.TitleScreenCode.GDSubtitleTextObjects1= [];
gdjs.TitleScreenCode.GDSubtitleTextObjects2= [];
gdjs.TitleScreenCode.GDSubtitleTextObjects3= [];
gdjs.TitleScreenCode.GDStartButtonObjects1= [];
gdjs.TitleScreenCode.GDStartButtonObjects2= [];
gdjs.TitleScreenCode.GDStartButtonObjects3= [];
gdjs.TitleScreenCode.GDIntroShipObjects1= [];
gdjs.TitleScreenCode.GDIntroShipObjects2= [];
gdjs.TitleScreenCode.GDIntroShipObjects3= [];
gdjs.TitleScreenCode.GDStarfieldObjects1= [];
gdjs.TitleScreenCode.GDStarfieldObjects2= [];
gdjs.TitleScreenCode.GDStarfieldObjects3= [];
gdjs.TitleScreenCode.GDWarpLinesObjects1= [];
gdjs.TitleScreenCode.GDWarpLinesObjects2= [];
gdjs.TitleScreenCode.GDWarpLinesObjects3= [];
gdjs.TitleScreenCode.GDSubtitleLogoObjects1= [];
gdjs.TitleScreenCode.GDSubtitleLogoObjects2= [];
gdjs.TitleScreenCode.GDSubtitleLogoObjects3= [];
gdjs.TitleScreenCode.GDLogoTextObjects1= [];
gdjs.TitleScreenCode.GDLogoTextObjects2= [];
gdjs.TitleScreenCode.GDLogoTextObjects3= [];
gdjs.TitleScreenCode.GDCreditsButtonObjects1= [];
gdjs.TitleScreenCode.GDCreditsButtonObjects2= [];
gdjs.TitleScreenCode.GDCreditsButtonObjects3= [];
gdjs.TitleScreenCode.GDVortexBurstObjects1= [];
gdjs.TitleScreenCode.GDVortexBurstObjects2= [];
gdjs.TitleScreenCode.GDVortexBurstObjects3= [];
gdjs.TitleScreenCode.GDSkipIntroButtonObjects1= [];
gdjs.TitleScreenCode.GDSkipIntroButtonObjects2= [];
gdjs.TitleScreenCode.GDSkipIntroButtonObjects3= [];
gdjs.TitleScreenCode.GDVersionTextObjects1= [];
gdjs.TitleScreenCode.GDVersionTextObjects2= [];
gdjs.TitleScreenCode.GDVersionTextObjects3= [];
gdjs.TitleScreenCode.GDMenuButtonBGObjects1= [];
gdjs.TitleScreenCode.GDMenuButtonBGObjects2= [];
gdjs.TitleScreenCode.GDMenuButtonBGObjects3= [];
gdjs.TitleScreenCode.GDSettingsButtonObjects1= [];
gdjs.TitleScreenCode.GDSettingsButtonObjects2= [];
gdjs.TitleScreenCode.GDSettingsButtonObjects3= [];
gdjs.TitleScreenCode.GDStartButtonBGObjects1= [];
gdjs.TitleScreenCode.GDStartButtonBGObjects2= [];
gdjs.TitleScreenCode.GDStartButtonBGObjects3= [];
gdjs.TitleScreenCode.GDVortexObjects1= [];
gdjs.TitleScreenCode.GDVortexObjects2= [];
gdjs.TitleScreenCode.GDVortexObjects3= [];
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1= [];
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2= [];
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects3= [];
gdjs.TitleScreenCode.GDMenuButtonBG2Objects1= [];
gdjs.TitleScreenCode.GDMenuButtonBG2Objects2= [];
gdjs.TitleScreenCode.GDMenuButtonBG2Objects3= [];
gdjs.TitleScreenCode.GDPlanetObjects1= [];
gdjs.TitleScreenCode.GDPlanetObjects2= [];
gdjs.TitleScreenCode.GDPlanetObjects3= [];
gdjs.TitleScreenCode.GDPlanetIntroObjects1= [];
gdjs.TitleScreenCode.GDPlanetIntroObjects2= [];
gdjs.TitleScreenCode.GDPlanetIntroObjects3= [];
gdjs.TitleScreenCode.GDCommanderPortraitObjects1= [];
gdjs.TitleScreenCode.GDCommanderPortraitObjects2= [];
gdjs.TitleScreenCode.GDCommanderPortraitObjects3= [];
gdjs.TitleScreenCode.GDCommsPanelObjects1= [];
gdjs.TitleScreenCode.GDCommsPanelObjects2= [];
gdjs.TitleScreenCode.GDCommsPanelObjects3= [];
gdjs.TitleScreenCode.GDCommanderNameTextObjects1= [];
gdjs.TitleScreenCode.GDCommanderNameTextObjects2= [];
gdjs.TitleScreenCode.GDCommanderNameTextObjects3= [];
gdjs.TitleScreenCode.GDCommsDialogueTextObjects1= [];
gdjs.TitleScreenCode.GDCommsDialogueTextObjects2= [];
gdjs.TitleScreenCode.GDCommsDialogueTextObjects3= [];


gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDVortexBurstObjects1Objects = Hashtable.newFrom({"VortexBurst": gdjs.TitleScreenCode.GDVortexBurstObjects1});
gdjs.TitleScreenCode.asyncCallback32570676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TitleScreenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects2);

{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects2[i].getBehavior("Animation").setAnimationName("Warping");
}
}
gdjs.TitleScreenCode.localVariables.length = 0;
}
gdjs.TitleScreenCode.idToCallbackMap.set(32570676, gdjs.TitleScreenCode.asyncCallback32570676);
gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TitleScreenCode.localVariables);
for (const obj of gdjs.TitleScreenCode.GDWarpLinesObjects1) asyncObjectsList.addObject("WarpLines", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.TitleScreenCode.asyncCallback32570676(runtimeScene, asyncObjectsList)), 32570676, asyncObjectsList);
}
}

}


};gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDVortexBurstObjects1Objects = Hashtable.newFrom({"VortexBurst": gdjs.TitleScreenCode.GDVortexBurstObjects1});
gdjs.TitleScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Addons", false);
}
}

}


};gdjs.TitleScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RBPC_AddonsButton"), gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2);
{for(var i = 0, len = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2[i].getBehavior("Text").setText("HANGAR");
}
}
{gdjs.evtsExt__RBPC_PaidContent__RBPC_Init.func(runtimeScene, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RBPC_AddonsButton"), gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[k] = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TitleScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.TitleScreenCode.GDCreditsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoText"), gdjs.TitleScreenCode.GDLogoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButtonBG"), gdjs.TitleScreenCode.GDMenuButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("RBPC_AddonsButton"), gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.TitleScreenCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkipIntroButton"), gdjs.TitleScreenCode.GDSkipIntroButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButtonBG"), gdjs.TitleScreenCode.GDStartButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleLogo"), gdjs.TitleScreenCode.GDSubtitleLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.TitleScreenCode.GDSubtitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.TitleScreenCode.GDTitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VersionText"), gdjs.TitleScreenCode.GDVersionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VortexBurst"), gdjs.TitleScreenCode.GDVortexBurstObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDTitleTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleLogoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersionTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersionTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDLogoTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDLogoTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSettingsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonBGObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDMenuButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDMenuButtonBGObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVortexBurstObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVortexBurstObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].getBehavior("Text").setText("START");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i].getBehavior("Text").setText("HANGAR");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "orbit_breaker_title_loop.wav", 1, true, 60 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber(), 1);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
}

}


};gdjs.TitleScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("PerigeeSettings", "MusicEnabled");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("PerigeeSettings", "MusicEnabled", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(15));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("PerigeeSettings", "SFXEnabled");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("PerigeeSettings", "SFXEnabled", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(16));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.TitleScreenCode.GDCreditsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("LogoText"), gdjs.TitleScreenCode.GDLogoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButtonBG"), gdjs.TitleScreenCode.GDMenuButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButtonBG2"), gdjs.TitleScreenCode.GDMenuButtonBG2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("RBPC_AddonsButton"), gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.TitleScreenCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkipIntroButton"), gdjs.TitleScreenCode.GDSkipIntroButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButtonBG"), gdjs.TitleScreenCode.GDStartButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleLogo"), gdjs.TitleScreenCode.GDSubtitleLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.TitleScreenCode.GDSubtitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.TitleScreenCode.GDTitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VersionText"), gdjs.TitleScreenCode.GDVersionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VortexBurst"), gdjs.TitleScreenCode.GDVortexBurstObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDTitleTextObjects1[i].getBehavior("Text").setText("RBIT BREAKER");
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].getBehavior("Text").setText("AIM — Mouse" + gdjs.evtTools.string.newLine() + "THRUST — W / ↑" + gdjs.evtTools.string.newLine() + "BRAKE — S / ↓" + gdjs.evtTools.string.newLine() + "FIRE — Left Click" + gdjs.evtTools.string.newLine());
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].getBehavior("Text").setText("START");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "orbit_breaker_title_loop.wav", 1, true, 60 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDTitleTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleLogoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersionTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersionTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDLogoTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDLogoTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSettingsButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVortexBurstObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVortexBurstObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDMenuButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDMenuButtonBGObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDMenuButtonBG2Objects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDMenuButtonBG2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonBGObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").addObjectPositionTween2("FlightToEarth", (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getXFromAngleAndDistance(180, 340)) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getWidth()) / 2, (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getYFromAngleAndDistance(180, 340 * 0.72)) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getHeight()) / 2, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutSine", ""), 12, false);
}
}
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraToEarth", (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterXInScene()), 360, "", runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutSine", ""), 12);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "IntroTimer");
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].setCenterPositionInScene((( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterXInScene()),(( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterYInScene()));
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "tween", 255, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 1, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "WarpLinesFX");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.TitleScreenCode.GDSubtitleTextObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].getBehavior("Text").setText("TOUCH & HOLD — AIM • BOOST • FIRE" + gdjs.evtTools.string.newLine() + "RELEASE — COAST" + gdjs.evtTools.string.newLine());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "IntroTimer") > 9.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32568660);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
gdjs.TitleScreenCode.GDVortexBurstObjects1.length = 0;

{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDVortexBurstObjects1Objects, (( gdjs.TitleScreenCode.GDWarpLinesObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDWarpLinesObjects1[0].getCenterXInScene()), (( gdjs.TitleScreenCode.GDWarpLinesObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDWarpLinesObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVortexBurstObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVortexBurstObjects1[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.8, 3, 3, 4, 0.01, false, null);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].getBehavior("Tween").addObjectOpacityTween3("Opacity", "VortexFade", 255, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.35, false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].getBehavior("Animation").setAnimationName("Explosion");
}
}

{ //Subevents
gdjs.TitleScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleScreenCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDStartButtonObjects1[k] = gdjs.TitleScreenCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32571860);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.TitleScreenCode.GDCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDCreditsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDCreditsButtonObjects1[k] = gdjs.TitleScreenCode.GDCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32573492);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SkipIntroButton"), gdjs.TitleScreenCode.GDSkipIntroButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[k] = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32574444);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
/* Reuse gdjs.TitleScreenCode.GDSkipIntroButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TitleHit");
}
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraToEarth", (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterXInScene()), 360, "", runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutSine", ""), 0.4);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.TitleScreenCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDSettingsButtonObjects1[k] = gdjs.TitleScreenCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDSettingsButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32577340);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDIntroShipObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").hasFinished("FlightToEarth") ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDIntroShipObjects1[k] = gdjs.TitleScreenCode.GDIntroShipObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDIntroShipObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32578892);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDIntroShipObjects1 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 4, 0.02, false, null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(180);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(340);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setZOrder(2);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").addObjectScaleTween3("ShipShrink", 0.30, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutSine", ""), 3.6, false, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(95 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(54.5 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setX((( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getXFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber())) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setY((( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getYFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() * 0.72)) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setAngle(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 90);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 200);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() < 500);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setZOrder(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 500);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setZOrder(2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 520);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32584916);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(520);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(145);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].setZOrder(2);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TitleHit");
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").addObjectAngleTween2("EscapeTurn", (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getAngleToObject((gdjs.TitleScreenCode.GDPlanetIntroObjects1.length !== 0 ? gdjs.TitleScreenCode.GDPlanetIntroObjects1[0] : null))) + 180, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInOutSine", ""), 0.20, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EscapeBeat");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EscapeBeat") >= 0.20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32587516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
gdjs.TitleScreenCode.GDVortexBurstObjects1.length = 0;

{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").addObjectScaleTween3("ShipPoofScale", 0.02, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.16, false, true);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").addObjectPositionTween2("ShipSuckedIn", (( gdjs.TitleScreenCode.GDWarpLinesObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDWarpLinesObjects1[0].getCenterXInScene()) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getWidth()) / 2, (( gdjs.TitleScreenCode.GDWarpLinesObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDWarpLinesObjects1[0].getCenterYInScene()) - (gdjs.TitleScreenCode.GDIntroShipObjects1[i].getHeight()) / 2, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.16, false);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDVortexBurstObjects1Objects, (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterXInScene()), (( gdjs.TitleScreenCode.GDPlanetIntroObjects1.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDPlanetIntroObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVortexBurstObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVortexBurstObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDWarpLinesObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDWarpLinesObjects1[i].getBehavior("Tween").hasFinished("VortexPulseOut") ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDWarpLinesObjects1[k] = gdjs.TitleScreenCode.GDWarpLinesObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDWarpLinesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32587740);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDWarpLinesObjects1 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].getBehavior("Tween").addObjectScaleTween3("VortexPulseBack", 1, runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.2, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IntroShip"), gdjs.TitleScreenCode.GDIntroShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDIntroShipObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDIntroShipObjects1[i].getBehavior("Tween").hasFinished("ShipPoofScale") ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDIntroShipObjects1[k] = gdjs.TitleScreenCode.GDIntroShipObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDIntroShipObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32590260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDIntroShipObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WarpLines"), gdjs.TitleScreenCode.GDWarpLinesObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDIntroShipObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDIntroShipObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDWarpLinesObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDWarpLinesObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TitleHit") > 0.40;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32591292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LogoText"), gdjs.TitleScreenCode.GDLogoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.TitleScreenCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDLogoTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDLogoTextObjects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/orbit_breaker_danger_lead_layer.wav", 2, true, 80 * runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDTitleTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDLogoTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDLogoTextObjects1[i].setZOrder(10);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TitleHit") > 0.75;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32593188);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.TitleScreenCode.GDCreditsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButtonBG"), gdjs.TitleScreenCode.GDMenuButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuButtonBG2"), gdjs.TitleScreenCode.GDMenuButtonBG2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PlanetIntro"), gdjs.TitleScreenCode.GDPlanetIntroObjects1);
gdjs.copyArray(runtimeScene.getObjects("RBPC_AddonsButton"), gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.TitleScreenCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkipIntroButton"), gdjs.TitleScreenCode.GDSkipIntroButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.TitleScreenCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButtonBG"), gdjs.TitleScreenCode.GDStartButtonBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleLogo"), gdjs.TitleScreenCode.GDSubtitleLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.TitleScreenCode.GDSubtitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VersionText"), gdjs.TitleScreenCode.GDVersionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("VortexBurst"), gdjs.TitleScreenCode.GDVortexBurstObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleLogoObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersionTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersionTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleLogoObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSubtitleTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDPlanetIntroObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDPlanetIntroObjects1[i].getBehavior("Opacity").setOpacity(230);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDVortexBurstObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVortexBurstObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSkipIntroButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartButtonBGObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDMenuButtonBGObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDMenuButtonBGObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDMenuButtonBG2Objects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDMenuButtonBG2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TitleScreenCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSettingsButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("PerigeeSettings", "TouchControls");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("PerigeeSettings", "TouchControls", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(10));
}
}

}


{


gdjs.TitleScreenCode.eventsList2(runtimeScene);
}


{


gdjs.TitleScreenCode.eventsList3(runtimeScene);
}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDTitleTextObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleTextObjects2.length = 0;
gdjs.TitleScreenCode.GDTitleTextObjects3.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects1.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects2.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects3.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects1.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects2.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects3.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects1.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects2.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects3.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects1.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects2.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects3.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects2.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects3.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects1.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects2.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects3.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects1.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects2.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects3.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects1.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects2.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects3.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects1.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects2.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects3.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects1.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects2.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects3.length = 0;
gdjs.TitleScreenCode.GDVortexObjects1.length = 0;
gdjs.TitleScreenCode.GDVortexObjects2.length = 0;
gdjs.TitleScreenCode.GDVortexObjects3.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects1.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects2.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects3.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects1.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects2.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects3.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects1.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects2.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects3.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects1.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects2.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects3.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects1.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects2.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects3.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects1.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects3.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects3.length = 0;

gdjs.TitleScreenCode.eventsList4(runtimeScene);
gdjs.TitleScreenCode.GDTitleTextObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleTextObjects2.length = 0;
gdjs.TitleScreenCode.GDTitleTextObjects3.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects1.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects2.length = 0;
gdjs.TitleScreenCode.GDSubtitleTextObjects3.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDStartButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects1.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects2.length = 0;
gdjs.TitleScreenCode.GDIntroShipObjects3.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects1.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects2.length = 0;
gdjs.TitleScreenCode.GDStarfieldObjects3.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects1.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects2.length = 0;
gdjs.TitleScreenCode.GDWarpLinesObjects3.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects1.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects2.length = 0;
gdjs.TitleScreenCode.GDSubtitleLogoObjects3.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects1.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects2.length = 0;
gdjs.TitleScreenCode.GDLogoTextObjects3.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects1.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects2.length = 0;
gdjs.TitleScreenCode.GDVortexBurstObjects3.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDSkipIntroButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects1.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects2.length = 0;
gdjs.TitleScreenCode.GDVersionTextObjects3.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects1.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects2.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBGObjects3.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDSettingsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects1.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects2.length = 0;
gdjs.TitleScreenCode.GDStartButtonBGObjects3.length = 0;
gdjs.TitleScreenCode.GDVortexObjects1.length = 0;
gdjs.TitleScreenCode.GDVortexObjects2.length = 0;
gdjs.TitleScreenCode.GDVortexObjects3.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDRBPC_9595AddonsButtonObjects3.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects1.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects2.length = 0;
gdjs.TitleScreenCode.GDMenuButtonBG2Objects3.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects1.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects2.length = 0;
gdjs.TitleScreenCode.GDPlanetObjects3.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects1.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects2.length = 0;
gdjs.TitleScreenCode.GDPlanetIntroObjects3.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects1.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects2.length = 0;
gdjs.TitleScreenCode.GDCommanderPortraitObjects3.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects1.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects2.length = 0;
gdjs.TitleScreenCode.GDCommsPanelObjects3.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects1.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCommanderNameTextObjects3.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCommsDialogueTextObjects3.length = 0;


return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
