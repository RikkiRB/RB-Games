gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.idToCallbackMap = new Map();
gdjs.LeaderboardCode.GDPlanetObjects1= [];
gdjs.LeaderboardCode.GDPlanetObjects2= [];
gdjs.LeaderboardCode.GDPlanetIntroObjects1= [];
gdjs.LeaderboardCode.GDPlanetIntroObjects2= [];
gdjs.LeaderboardCode.GDCommanderPortraitObjects1= [];
gdjs.LeaderboardCode.GDCommanderPortraitObjects2= [];
gdjs.LeaderboardCode.GDCommsPanelObjects1= [];
gdjs.LeaderboardCode.GDCommsPanelObjects2= [];
gdjs.LeaderboardCode.GDCommanderNameTextObjects1= [];
gdjs.LeaderboardCode.GDCommanderNameTextObjects2= [];
gdjs.LeaderboardCode.GDCommsDialogueTextObjects1= [];
gdjs.LeaderboardCode.GDCommsDialogueTextObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "9b4b3660-faa2-4f22-99aa-39df3eaf65a6", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDPlanetObjects1.length = 0;
gdjs.LeaderboardCode.GDPlanetObjects2.length = 0;
gdjs.LeaderboardCode.GDPlanetIntroObjects1.length = 0;
gdjs.LeaderboardCode.GDPlanetIntroObjects2.length = 0;
gdjs.LeaderboardCode.GDCommanderPortraitObjects1.length = 0;
gdjs.LeaderboardCode.GDCommanderPortraitObjects2.length = 0;
gdjs.LeaderboardCode.GDCommsPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDCommsPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDCommanderNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDCommanderNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.LeaderboardCode.GDCommsDialogueTextObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDPlanetObjects1.length = 0;
gdjs.LeaderboardCode.GDPlanetObjects2.length = 0;
gdjs.LeaderboardCode.GDPlanetIntroObjects1.length = 0;
gdjs.LeaderboardCode.GDPlanetIntroObjects2.length = 0;
gdjs.LeaderboardCode.GDCommanderPortraitObjects1.length = 0;
gdjs.LeaderboardCode.GDCommanderPortraitObjects2.length = 0;
gdjs.LeaderboardCode.GDCommsPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDCommsPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDCommanderNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDCommanderNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.LeaderboardCode.GDCommsDialogueTextObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
