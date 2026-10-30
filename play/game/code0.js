gdjs.LoaderCode = {};
gdjs.LoaderCode.localVariables = [];
gdjs.LoaderCode.idToCallbackMap = new Map();
gdjs.LoaderCode.GDLoaderLogoObjects1= [];
gdjs.LoaderCode.GDLoaderLogoObjects2= [];
gdjs.LoaderCode.GDLoadBarObjects1= [];
gdjs.LoaderCode.GDLoadBarObjects2= [];
gdjs.LoaderCode.GDPlanetObjects1= [];
gdjs.LoaderCode.GDPlanetObjects2= [];
gdjs.LoaderCode.GDPlanetIntroObjects1= [];
gdjs.LoaderCode.GDPlanetIntroObjects2= [];
gdjs.LoaderCode.GDCommanderPortraitObjects1= [];
gdjs.LoaderCode.GDCommanderPortraitObjects2= [];
gdjs.LoaderCode.GDCommsPanelObjects1= [];
gdjs.LoaderCode.GDCommsPanelObjects2= [];
gdjs.LoaderCode.GDCommanderNameTextObjects1= [];
gdjs.LoaderCode.GDCommanderNameTextObjects2= [];
gdjs.LoaderCode.GDCommsDialogueTextObjects1= [];
gdjs.LoaderCode.GDCommsDialogueTextObjects2= [];


gdjs.LoaderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LoadProgress");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "TitleScreen");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game");
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("FillW", variable);
}
gdjs.LoaderCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadBar"), gdjs.LoaderCode.GDLoadBarObjects1);
{gdjs.LoaderCode.localVariables[0].getFromIndex(0).setNumber(Math.min(1160, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "LoadProgress") / 2.2 * 1160));
}
{for(var i = 0, len = gdjs.LoaderCode.GDLoadBarObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLoadBarObjects1[i].setFillColor("40;40;50");
}
}
{for(var i = 0, len = gdjs.LoaderCode.GDLoadBarObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLoadBarObjects1[i].drawRectangle(60, 656, 1220, 676);
}
}
{for(var i = 0, len = gdjs.LoaderCode.GDLoadBarObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLoadBarObjects1[i].setFillColor("102;240;255");
}
}
{for(var i = 0, len = gdjs.LoaderCode.GDLoadBarObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLoadBarObjects1[i].drawRectangle(60, 656, 60 + gdjs.LoaderCode.localVariables[0].getFromIndex(0).getAsNumber(), 676);
}
}
}
gdjs.LoaderCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoadProgress") > 2.4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


};

gdjs.LoaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoaderCode.GDLoaderLogoObjects1.length = 0;
gdjs.LoaderCode.GDLoaderLogoObjects2.length = 0;
gdjs.LoaderCode.GDLoadBarObjects1.length = 0;
gdjs.LoaderCode.GDLoadBarObjects2.length = 0;
gdjs.LoaderCode.GDPlanetObjects1.length = 0;
gdjs.LoaderCode.GDPlanetObjects2.length = 0;
gdjs.LoaderCode.GDPlanetIntroObjects1.length = 0;
gdjs.LoaderCode.GDPlanetIntroObjects2.length = 0;
gdjs.LoaderCode.GDCommanderPortraitObjects1.length = 0;
gdjs.LoaderCode.GDCommanderPortraitObjects2.length = 0;
gdjs.LoaderCode.GDCommsPanelObjects1.length = 0;
gdjs.LoaderCode.GDCommsPanelObjects2.length = 0;
gdjs.LoaderCode.GDCommanderNameTextObjects1.length = 0;
gdjs.LoaderCode.GDCommanderNameTextObjects2.length = 0;
gdjs.LoaderCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.LoaderCode.GDCommsDialogueTextObjects2.length = 0;

gdjs.LoaderCode.eventsList0(runtimeScene);
gdjs.LoaderCode.GDLoaderLogoObjects1.length = 0;
gdjs.LoaderCode.GDLoaderLogoObjects2.length = 0;
gdjs.LoaderCode.GDLoadBarObjects1.length = 0;
gdjs.LoaderCode.GDLoadBarObjects2.length = 0;
gdjs.LoaderCode.GDPlanetObjects1.length = 0;
gdjs.LoaderCode.GDPlanetObjects2.length = 0;
gdjs.LoaderCode.GDPlanetIntroObjects1.length = 0;
gdjs.LoaderCode.GDPlanetIntroObjects2.length = 0;
gdjs.LoaderCode.GDCommanderPortraitObjects1.length = 0;
gdjs.LoaderCode.GDCommanderPortraitObjects2.length = 0;
gdjs.LoaderCode.GDCommsPanelObjects1.length = 0;
gdjs.LoaderCode.GDCommsPanelObjects2.length = 0;
gdjs.LoaderCode.GDCommanderNameTextObjects1.length = 0;
gdjs.LoaderCode.GDCommanderNameTextObjects2.length = 0;
gdjs.LoaderCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.LoaderCode.GDCommsDialogueTextObjects2.length = 0;


return;

}

gdjs['LoaderCode'] = gdjs.LoaderCode;
