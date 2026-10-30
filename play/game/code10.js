gdjs.DevTestLabCode = {};
gdjs.DevTestLabCode.localVariables = [];
gdjs.DevTestLabCode.idToCallbackMap = new Map();
gdjs.DevTestLabCode.GDLabOwnTextObjects1= [];
gdjs.DevTestLabCode.GDLabOwnTextObjects2= [];
gdjs.DevTestLabCode.GDLabOwnTextObjects3= [];
gdjs.DevTestLabCode.GDLabOpTextObjects1= [];
gdjs.DevTestLabCode.GDLabOpTextObjects2= [];
gdjs.DevTestLabCode.GDLabOpTextObjects3= [];
gdjs.DevTestLabCode.GDLabFreeTextObjects1= [];
gdjs.DevTestLabCode.GDLabFreeTextObjects2= [];
gdjs.DevTestLabCode.GDLabFreeTextObjects3= [];
gdjs.DevTestLabCode.GDLabPremTextObjects1= [];
gdjs.DevTestLabCode.GDLabPremTextObjects2= [];
gdjs.DevTestLabCode.GDLabPremTextObjects3= [];
gdjs.DevTestLabCode.GDLabTideTextObjects1= [];
gdjs.DevTestLabCode.GDLabTideTextObjects2= [];
gdjs.DevTestLabCode.GDLabTideTextObjects3= [];
gdjs.DevTestLabCode.GDLabUnknownTextObjects1= [];
gdjs.DevTestLabCode.GDLabUnknownTextObjects2= [];
gdjs.DevTestLabCode.GDLabUnknownTextObjects3= [];
gdjs.DevTestLabCode.GDLabComingTextObjects1= [];
gdjs.DevTestLabCode.GDLabComingTextObjects2= [];
gdjs.DevTestLabCode.GDLabComingTextObjects3= [];
gdjs.DevTestLabCode.GDLabWCurObjects1= [];
gdjs.DevTestLabCode.GDLabWCurObjects2= [];
gdjs.DevTestLabCode.GDLabWCurObjects3= [];
gdjs.DevTestLabCode.GDLabWErrObjects1= [];
gdjs.DevTestLabCode.GDLabWErrObjects2= [];
gdjs.DevTestLabCode.GDLabWErrObjects3= [];
gdjs.DevTestLabCode.GDLabSCurObjects1= [];
gdjs.DevTestLabCode.GDLabSCurObjects2= [];
gdjs.DevTestLabCode.GDLabSCurObjects3= [];
gdjs.DevTestLabCode.GDPlanetObjects1= [];
gdjs.DevTestLabCode.GDPlanetObjects2= [];
gdjs.DevTestLabCode.GDPlanetObjects3= [];
gdjs.DevTestLabCode.GDPlanetIntroObjects1= [];
gdjs.DevTestLabCode.GDPlanetIntroObjects2= [];
gdjs.DevTestLabCode.GDPlanetIntroObjects3= [];
gdjs.DevTestLabCode.GDCommanderPortraitObjects1= [];
gdjs.DevTestLabCode.GDCommanderPortraitObjects2= [];
gdjs.DevTestLabCode.GDCommanderPortraitObjects3= [];
gdjs.DevTestLabCode.GDCommsPanelObjects1= [];
gdjs.DevTestLabCode.GDCommsPanelObjects2= [];
gdjs.DevTestLabCode.GDCommsPanelObjects3= [];
gdjs.DevTestLabCode.GDCommanderNameTextObjects1= [];
gdjs.DevTestLabCode.GDCommanderNameTextObjects2= [];
gdjs.DevTestLabCode.GDCommanderNameTextObjects3= [];
gdjs.DevTestLabCode.GDCommsDialogueTextObjects1= [];
gdjs.DevTestLabCode.GDCommsDialogueTextObjects2= [];
gdjs.DevTestLabCode.GDCommsDialogueTextObjects3= [];


gdjs.DevTestLabCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RBPC_TestLab__LabCanUse.func(runtimeScene, "level_free_original", null) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabFreeText"), gdjs.DevTestLabCode.GDLabFreeTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabFreeTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabFreeTextObjects2[i].getBehavior("Text").setText("1");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("LabFreeText"), gdjs.DevTestLabCode.GDLabFreeTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabFreeTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabFreeTextObjects2[i].getBehavior("Text").setText("0");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RBPC_TestLab__LabCanUse.func(runtimeScene, "skin_night_ops", null) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabPremText"), gdjs.DevTestLabCode.GDLabPremTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabPremTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabPremTextObjects2[i].getBehavior("Text").setText("1");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("LabPremText"), gdjs.DevTestLabCode.GDLabPremTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabPremTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabPremTextObjects2[i].getBehavior("Text").setText("0");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RBPC_TestLab__LabCanUse.func(runtimeScene, "weapon_tide_cache", null) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabTideText"), gdjs.DevTestLabCode.GDLabTideTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabTideTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabTideTextObjects2[i].getBehavior("Text").setText("1");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("LabTideText"), gdjs.DevTestLabCode.GDLabTideTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabTideTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabTideTextObjects2[i].getBehavior("Text").setText("0");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RBPC_TestLab__LabCanUse.func(runtimeScene, "nope_unknown_id", null) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabUnknownText"), gdjs.DevTestLabCode.GDLabUnknownTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabUnknownTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabUnknownTextObjects2[i].getBehavior("Text").setText("1");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("LabUnknownText"), gdjs.DevTestLabCode.GDLabUnknownTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabUnknownTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabUnknownTextObjects2[i].getBehavior("Text").setText("0");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RBPC_TestLab__LabCanUse.func(runtimeScene, "level_02_premium", null) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabComingText"), gdjs.DevTestLabCode.GDLabComingTextObjects2);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabComingTextObjects2.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabComingTextObjects2[i].getBehavior("Text").setText("1");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("LabComingText"), gdjs.DevTestLabCode.GDLabComingTextObjects1);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabComingTextObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabComingTextObjects1[i].getBehavior("Text").setText("0");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.DevTestLabCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() != "done");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__RBPC_TestLab__LabSimulate.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5).getAsString(), null);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setString("done");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LabOpText"), gdjs.DevTestLabCode.GDLabOpTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LabOwnText"), gdjs.DevTestLabCode.GDLabOwnTextObjects1);
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabOwnTextObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabOwnTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__RBPC_TestLab__LabOwnership.func(runtimeScene, null));
}
}
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabOpTextObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabOpTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__RBPC_TestLab__LabOperation.func(runtimeScene, null));
}
}

{ //Subevents
gdjs.DevTestLabCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.DevTestLabCode.eventsList2 = function(runtimeScene) {

{


gdjs.DevTestLabCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabWCur"), gdjs.DevTestLabCode.GDLabWCurObjects1);
gdjs.copyArray(runtimeScene.getObjects("LabWErr"), gdjs.DevTestLabCode.GDLabWErrObjects1);
{gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipWeaponSkin.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), null);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("0");
}
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabWCurObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabWCurObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__RBPC_PaidContent__RBPC_GetWeaponSkin.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), null));
}
}
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabWErrObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabWErrObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__RBPC_PaidContent__RBPC_GetLastError.func(runtimeScene, null));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LabSCur"), gdjs.DevTestLabCode.GDLabSCurObjects1);
{gdjs.evtsExt__RBPC_PaidContent__RBPC_EquipSkin.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), null);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("0");
}
{for(var i = 0, len = gdjs.DevTestLabCode.GDLabSCurObjects1.length ;i < len;++i) {
    gdjs.DevTestLabCode.GDLabSCurObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__RBPC_PaidContent__RBPC_GetEquippedSkin.func(runtimeScene, null));
}
}
}

}


};

gdjs.DevTestLabCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DevTestLabCode.GDLabOwnTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabOwnTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabOwnTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects1.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects2.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects3.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects1.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects2.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects3.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects1.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects2.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects3.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects1.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects2.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects3.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects1.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects2.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects3.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects1.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects2.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects3.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects1.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects2.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects3.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects1.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects2.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects3.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects2.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects3.length = 0;

gdjs.DevTestLabCode.eventsList2(runtimeScene);
gdjs.DevTestLabCode.GDLabOwnTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabOwnTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabOwnTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabOpTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabFreeTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabPremTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabTideTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabUnknownTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects1.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects2.length = 0;
gdjs.DevTestLabCode.GDLabComingTextObjects3.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects1.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects2.length = 0;
gdjs.DevTestLabCode.GDLabWCurObjects3.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects1.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects2.length = 0;
gdjs.DevTestLabCode.GDLabWErrObjects3.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects1.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects2.length = 0;
gdjs.DevTestLabCode.GDLabSCurObjects3.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects1.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects2.length = 0;
gdjs.DevTestLabCode.GDPlanetObjects3.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects1.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects2.length = 0;
gdjs.DevTestLabCode.GDPlanetIntroObjects3.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects1.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects2.length = 0;
gdjs.DevTestLabCode.GDCommanderPortraitObjects3.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects1.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects2.length = 0;
gdjs.DevTestLabCode.GDCommsPanelObjects3.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects1.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects2.length = 0;
gdjs.DevTestLabCode.GDCommanderNameTextObjects3.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects2.length = 0;
gdjs.DevTestLabCode.GDCommsDialogueTextObjects3.length = 0;


return;

}

gdjs['DevTestLabCode'] = gdjs.DevTestLabCode;
