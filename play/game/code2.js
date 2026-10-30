gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDBackBGObjects1_1final = [];

gdjs.SettingsCode.GDBackButtonObjects1_1final = [];

gdjs.SettingsCode.GDControlsButtonObjects1_1final = [];

gdjs.SettingsCode.GDControlsToggleBGObjects1_1final = [];

gdjs.SettingsCode.GDMusicButtonObjects1_1final = [];

gdjs.SettingsCode.GDMusicToggleBGObjects1_1final = [];

gdjs.SettingsCode.GDSFXButtonObjects1_1final = [];

gdjs.SettingsCode.GDSoundToggleBGObjects1_1final = [];

gdjs.SettingsCode.GDBGObjects1= [];
gdjs.SettingsCode.GDBGObjects2= [];
gdjs.SettingsCode.GDSettingsTitleObjects1= [];
gdjs.SettingsCode.GDSettingsTitleObjects2= [];
gdjs.SettingsCode.GDMusicButtonObjects1= [];
gdjs.SettingsCode.GDMusicButtonObjects2= [];
gdjs.SettingsCode.GDTitleBoxObjects1= [];
gdjs.SettingsCode.GDTitleBoxObjects2= [];
gdjs.SettingsCode.GDButtonBGObjects1= [];
gdjs.SettingsCode.GDButtonBGObjects2= [];
gdjs.SettingsCode.GDSFXButtonObjects1= [];
gdjs.SettingsCode.GDSFXButtonObjects2= [];
gdjs.SettingsCode.GDControlTextObjects1= [];
gdjs.SettingsCode.GDControlTextObjects2= [];
gdjs.SettingsCode.GDBackButtonObjects1= [];
gdjs.SettingsCode.GDBackButtonObjects2= [];
gdjs.SettingsCode.GDButtonBG2Objects1= [];
gdjs.SettingsCode.GDButtonBG2Objects2= [];
gdjs.SettingsCode.GDSound_9595buttonObjects1= [];
gdjs.SettingsCode.GDSound_9595buttonObjects2= [];
gdjs.SettingsCode.GDMusic_9595buttonObjects1= [];
gdjs.SettingsCode.GDMusic_9595buttonObjects2= [];
gdjs.SettingsCode.GDPause_9595buttonObjects1= [];
gdjs.SettingsCode.GDPause_9595buttonObjects2= [];
gdjs.SettingsCode.GDSettings_9595PanelObjects1= [];
gdjs.SettingsCode.GDSettings_9595PanelObjects2= [];
gdjs.SettingsCode.GDBackBGObjects1= [];
gdjs.SettingsCode.GDBackBGObjects2= [];
gdjs.SettingsCode.GDSettings_9595DimmerObjects1= [];
gdjs.SettingsCode.GDSettings_9595DimmerObjects2= [];
gdjs.SettingsCode.GDMusicToggleBGObjects1= [];
gdjs.SettingsCode.GDMusicToggleBGObjects2= [];
gdjs.SettingsCode.GDSoundToggleBGObjects1= [];
gdjs.SettingsCode.GDSoundToggleBGObjects2= [];
gdjs.SettingsCode.GDMusicLabelObjects1= [];
gdjs.SettingsCode.GDMusicLabelObjects2= [];
gdjs.SettingsCode.GDSoundLabelObjects1= [];
gdjs.SettingsCode.GDSoundLabelObjects2= [];
gdjs.SettingsCode.GDControlsLabelObjects1= [];
gdjs.SettingsCode.GDControlsLabelObjects2= [];
gdjs.SettingsCode.GDControlsToggleBGObjects1= [];
gdjs.SettingsCode.GDControlsToggleBGObjects2= [];
gdjs.SettingsCode.GDControlsButtonObjects1= [];
gdjs.SettingsCode.GDControlsButtonObjects2= [];
gdjs.SettingsCode.GDPlanetObjects1= [];
gdjs.SettingsCode.GDPlanetObjects2= [];
gdjs.SettingsCode.GDPlanetIntroObjects1= [];
gdjs.SettingsCode.GDPlanetIntroObjects2= [];
gdjs.SettingsCode.GDCommanderPortraitObjects1= [];
gdjs.SettingsCode.GDCommanderPortraitObjects2= [];
gdjs.SettingsCode.GDCommsPanelObjects1= [];
gdjs.SettingsCode.GDCommsPanelObjects2= [];
gdjs.SettingsCode.GDCommanderNameTextObjects1= [];
gdjs.SettingsCode.GDCommanderNameTextObjects2= [];
gdjs.SettingsCode.GDCommsDialogueTextObjects1= [];
gdjs.SettingsCode.GDCommsDialogueTextObjects2= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.SettingsCode.GDMusicButtonObjects1.length = 0;

gdjs.SettingsCode.GDMusicToggleBGObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SettingsCode.GDMusicButtonObjects1_1final.length = 0;
gdjs.SettingsCode.GDMusicToggleBGObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDMusicToggleBGObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMusicToggleBGObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDMusicToggleBGObjects2[k] = gdjs.SettingsCode.GDMusicToggleBGObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMusicToggleBGObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDMusicToggleBGObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDMusicToggleBGObjects1_1final.indexOf(gdjs.SettingsCode.GDMusicToggleBGObjects2[j]) === -1 )
            gdjs.SettingsCode.GDMusicToggleBGObjects1_1final.push(gdjs.SettingsCode.GDMusicToggleBGObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.SettingsCode.GDMusicButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDMusicButtonObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMusicButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDMusicButtonObjects2[k] = gdjs.SettingsCode.GDMusicButtonObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMusicButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDMusicButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDMusicButtonObjects1_1final.indexOf(gdjs.SettingsCode.GDMusicButtonObjects2[j]) === -1 )
            gdjs.SettingsCode.GDMusicButtonObjects1_1final.push(gdjs.SettingsCode.GDMusicButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SettingsCode.GDMusicButtonObjects1_1final, gdjs.SettingsCode.GDMusicButtonObjects1);
gdjs.copyArray(gdjs.SettingsCode.GDMusicToggleBGObjects1_1final, gdjs.SettingsCode.GDMusicToggleBGObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1 - runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("PerigeeSettings", "MusicEnabled", runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.SettingsCode.GDMusicButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].getBehavior("Text").setText("ON");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setColor("102;240;255");
}
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 80);
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 80);
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setX((( gdjs.SettingsCode.GDMusicToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDMusicButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.SettingsCode.GDMusicButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].getBehavior("Text").setText("OFF");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setColor("150;150;160");
}
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 0);
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setX((( gdjs.SettingsCode.GDMusicToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDMusicButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{

gdjs.SettingsCode.GDSFXButtonObjects1.length = 0;

gdjs.SettingsCode.GDSoundToggleBGObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SettingsCode.GDSFXButtonObjects1_1final.length = 0;
gdjs.SettingsCode.GDSoundToggleBGObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundToggleBGObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSoundToggleBGObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDSoundToggleBGObjects2[k] = gdjs.SettingsCode.GDSoundToggleBGObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundToggleBGObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDSoundToggleBGObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDSoundToggleBGObjects1_1final.indexOf(gdjs.SettingsCode.GDSoundToggleBGObjects2[j]) === -1 )
            gdjs.SettingsCode.GDSoundToggleBGObjects1_1final.push(gdjs.SettingsCode.GDSoundToggleBGObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SFXButton"), gdjs.SettingsCode.GDSFXButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSFXButtonObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSFXButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDSFXButtonObjects2[k] = gdjs.SettingsCode.GDSFXButtonObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSFXButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDSFXButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDSFXButtonObjects1_1final.indexOf(gdjs.SettingsCode.GDSFXButtonObjects2[j]) === -1 )
            gdjs.SettingsCode.GDSFXButtonObjects1_1final.push(gdjs.SettingsCode.GDSFXButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SettingsCode.GDSFXButtonObjects1_1final, gdjs.SettingsCode.GDSFXButtonObjects1);
gdjs.copyArray(gdjs.SettingsCode.GDSoundToggleBGObjects1_1final, gdjs.SettingsCode.GDSoundToggleBGObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1 - runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("PerigeeSettings", "SFXEnabled", runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SFXButton"), gdjs.SettingsCode.GDSFXButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].getBehavior("Text").setText("ON");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setColor("102;240;255");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setX((( gdjs.SettingsCode.GDSoundToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDSFXButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SFXButton"), gdjs.SettingsCode.GDSFXButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].getBehavior("Text").setText("OFF");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setColor("150;150;160");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setX((( gdjs.SettingsCode.GDSoundToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDSFXButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{

gdjs.SettingsCode.GDBackBGObjects1.length = 0;

gdjs.SettingsCode.GDBackButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SettingsCode.GDBackBGObjects1_1final.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackBGObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackBGObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDBackBGObjects2[k] = gdjs.SettingsCode.GDBackBGObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackBGObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDBackBGObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDBackBGObjects1_1final.indexOf(gdjs.SettingsCode.GDBackBGObjects2[j]) === -1 )
            gdjs.SettingsCode.GDBackBGObjects1_1final.push(gdjs.SettingsCode.GDBackBGObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackButtonObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDBackButtonObjects2[k] = gdjs.SettingsCode.GDBackButtonObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDBackButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDBackButtonObjects1_1final.indexOf(gdjs.SettingsCode.GDBackButtonObjects2[j]) === -1 )
            gdjs.SettingsCode.GDBackButtonObjects1_1final.push(gdjs.SettingsCode.GDBackButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SettingsCode.GDBackBGObjects1_1final, gdjs.SettingsCode.GDBackBGObjects1);
gdjs.copyArray(gdjs.SettingsCode.GDBackButtonObjects1_1final, gdjs.SettingsCode.GDBackButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(33027492);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBackBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackBGObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackBGObjects1[k] = gdjs.SettingsCode.GDBackBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDBackBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDBackBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackBGObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackBGObjects1[k] = gdjs.SettingsCode.GDBackBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDBackBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDBackBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDMusicToggleBGObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMusicToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDMusicToggleBGObjects1[k] = gdjs.SettingsCode.GDMusicToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMusicToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDMusicToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDMusicToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Pressed.png", runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDMusicToggleBGObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDMusicToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDMusicToggleBGObjects1[k] = gdjs.SettingsCode.GDMusicToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMusicToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDMusicToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDMusicToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundToggleBGObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSoundToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSoundToggleBGObjects1[k] = gdjs.SettingsCode.GDSoundToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDSoundToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDSoundToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Pressed.png", runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundToggleBGObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDSoundToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSoundToggleBGObjects1[k] = gdjs.SettingsCode.GDSoundToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDSoundToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDSoundToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlText"), gdjs.SettingsCode.GDControlTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsButton"), gdjs.SettingsCode.GDControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.SettingsCode.GDMusicButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicLabel"), gdjs.SettingsCode.GDMusicLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicToggleBG"), gdjs.SettingsCode.GDMusicToggleBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("SFXButton"), gdjs.SettingsCode.GDSFXButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsTitle"), gdjs.SettingsCode.GDSettingsTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundLabel"), gdjs.SettingsCode.GDSoundLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundToggleBG"), gdjs.SettingsCode.GDSoundToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSettingsTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsTitleObjects1[i].setX(640 - (gdjs.SettingsCode.GDSettingsTitleObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSettingsTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsTitleObjects1[i].setY(204 - (gdjs.SettingsCode.GDSettingsTitleObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicLabelObjects1[i].setX(476);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicLabelObjects1[i].setY(294 - (gdjs.SettingsCode.GDMusicLabelObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundLabelObjects1[i].setX(476);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundLabelObjects1[i].setY(384 - (gdjs.SettingsCode.GDSoundLabelObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].setX((( gdjs.SettingsCode.GDBackBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDBackBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDBackButtonObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].setY((( gdjs.SettingsCode.GDBackBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDBackBGObjects1[0].getCenterYInScene()) - (gdjs.SettingsCode.GDBackButtonObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlTextObjects1[i].setX(640 - (gdjs.SettingsCode.GDControlTextObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlTextObjects1[i].setY(624 - (gdjs.SettingsCode.GDControlTextObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setX((( gdjs.SettingsCode.GDMusicToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDMusicButtonObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicButtonObjects1[i].setY((( gdjs.SettingsCode.GDMusicToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicToggleBGObjects1[0].getCenterYInScene()) - (gdjs.SettingsCode.GDMusicButtonObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setX((( gdjs.SettingsCode.GDSoundToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDSFXButtonObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSFXButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSFXButtonObjects1[i].setY((( gdjs.SettingsCode.GDSoundToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundToggleBGObjects1[0].getCenterYInScene()) - (gdjs.SettingsCode.GDSFXButtonObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setX((( gdjs.SettingsCode.GDControlsToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDControlsToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDControlsButtonObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setY((( gdjs.SettingsCode.GDControlsToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDControlsToggleBGObjects1[0].getCenterYInScene()) - (gdjs.SettingsCode.GDControlsButtonObjects1[i].getHeight()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackBG"), gdjs.SettingsCode.GDBackBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackBGObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDBackBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackBGObjects1[k] = gdjs.SettingsCode.GDBackBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDBackBGObjects1 */
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].setY((( gdjs.SettingsCode.GDBackBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDBackBGObjects1[0].getCenterYInScene()) - (gdjs.SettingsCode.GDBackButtonObjects1[i].getHeight()) / 2 + 8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
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
gdjs.copyArray(runtimeScene.getObjects("ControlText"), gdjs.SettingsCode.GDControlTextObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlTextObjects1[i].getBehavior("Text").setText("TOUCH + MOUSE ENABLED");
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlsLabel"), gdjs.SettingsCode.GDControlsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsLabelObjects1[i].getBehavior("Text").setText("CONTROLS");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
}

}


{

gdjs.SettingsCode.GDControlsButtonObjects1.length = 0;

gdjs.SettingsCode.GDControlsToggleBGObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SettingsCode.GDControlsButtonObjects1_1final.length = 0;
gdjs.SettingsCode.GDControlsToggleBGObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDControlsToggleBGObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDControlsToggleBGObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDControlsToggleBGObjects2[k] = gdjs.SettingsCode.GDControlsToggleBGObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDControlsToggleBGObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDControlsToggleBGObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDControlsToggleBGObjects1_1final.indexOf(gdjs.SettingsCode.GDControlsToggleBGObjects2[j]) === -1 )
            gdjs.SettingsCode.GDControlsToggleBGObjects1_1final.push(gdjs.SettingsCode.GDControlsToggleBGObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ControlsButton"), gdjs.SettingsCode.GDControlsButtonObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDControlsButtonObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDControlsButtonObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDControlsButtonObjects2[k] = gdjs.SettingsCode.GDControlsButtonObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDControlsButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDControlsButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDControlsButtonObjects1_1final.indexOf(gdjs.SettingsCode.GDControlsButtonObjects2[j]) === -1 )
            gdjs.SettingsCode.GDControlsButtonObjects1_1final.push(gdjs.SettingsCode.GDControlsButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SettingsCode.GDControlsButtonObjects1_1final, gdjs.SettingsCode.GDControlsButtonObjects1);
gdjs.copyArray(gdjs.SettingsCode.GDControlsToggleBGObjects1_1final, gdjs.SettingsCode.GDControlsToggleBGObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 45 * runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber(), 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1 - runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("PerigeeSettings", "TouchControls", runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlsButton"), gdjs.SettingsCode.GDControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].getBehavior("Text").setText("STICK");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setColor("102;240;255");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setX((( gdjs.SettingsCode.GDControlsToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDControlsToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDControlsButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlsButton"), gdjs.SettingsCode.GDControlsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].getBehavior("Text").setText("TOUCH");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setColor("102;240;255");
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsButtonObjects1[i].setX((( gdjs.SettingsCode.GDControlsToggleBGObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDControlsToggleBGObjects1[0].getCenterXInScene()) - (gdjs.SettingsCode.GDControlsButtonObjects1[i].getWidth()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDControlsToggleBGObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDControlsToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDControlsToggleBGObjects1[k] = gdjs.SettingsCode.GDControlsToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDControlsToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDControlsToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Pressed.png", runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggleBG"), gdjs.SettingsCode.GDControlsToggleBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDControlsToggleBGObjects1.length;i<l;++i) {
    if ( !(gdjs.SettingsCode.GDControlsToggleBGObjects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDControlsToggleBGObjects1[k] = gdjs.SettingsCode.GDControlsToggleBGObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDControlsToggleBGObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDControlsToggleBGObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleBGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleBGObjects1[i].setTexture("assets/Menu_Button_Cyan_Idle.png", runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ControlsLabel"), gdjs.SettingsCode.GDControlsLabelObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsLabelObjects1[i].setX(476);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDControlsLabelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsLabelObjects1[i].setY(474 - (gdjs.SettingsCode.GDControlsLabelObjects1[i].getHeight()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlText"), gdjs.SettingsCode.GDControlTextObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlTextObjects1[i].getBehavior("Text").setText("STICK + FIRE BUTTON — screen touch will not fire");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ControlText"), gdjs.SettingsCode.GDControlTextObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlTextObjects1[i].getBehavior("Text").setText("TOUCH SCREEN — touch to AIM + FIRE + BOOST");
}
}
}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects1.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects2.length = 0;
gdjs.SettingsCode.GDMusicButtonObjects1.length = 0;
gdjs.SettingsCode.GDMusicButtonObjects2.length = 0;
gdjs.SettingsCode.GDTitleBoxObjects1.length = 0;
gdjs.SettingsCode.GDTitleBoxObjects2.length = 0;
gdjs.SettingsCode.GDButtonBGObjects1.length = 0;
gdjs.SettingsCode.GDButtonBGObjects2.length = 0;
gdjs.SettingsCode.GDSFXButtonObjects1.length = 0;
gdjs.SettingsCode.GDSFXButtonObjects2.length = 0;
gdjs.SettingsCode.GDControlTextObjects1.length = 0;
gdjs.SettingsCode.GDControlTextObjects2.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1.length = 0;
gdjs.SettingsCode.GDBackButtonObjects2.length = 0;
gdjs.SettingsCode.GDButtonBG2Objects1.length = 0;
gdjs.SettingsCode.GDButtonBG2Objects2.length = 0;
gdjs.SettingsCode.GDSound_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDSound_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDMusic_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDMusic_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDPause_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDPause_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDSettings_9595PanelObjects1.length = 0;
gdjs.SettingsCode.GDSettings_9595PanelObjects2.length = 0;
gdjs.SettingsCode.GDBackBGObjects1.length = 0;
gdjs.SettingsCode.GDBackBGObjects2.length = 0;
gdjs.SettingsCode.GDSettings_9595DimmerObjects1.length = 0;
gdjs.SettingsCode.GDSettings_9595DimmerObjects2.length = 0;
gdjs.SettingsCode.GDMusicToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDMusicToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDSoundToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDSoundToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDMusicLabelObjects1.length = 0;
gdjs.SettingsCode.GDMusicLabelObjects2.length = 0;
gdjs.SettingsCode.GDSoundLabelObjects1.length = 0;
gdjs.SettingsCode.GDSoundLabelObjects2.length = 0;
gdjs.SettingsCode.GDControlsLabelObjects1.length = 0;
gdjs.SettingsCode.GDControlsLabelObjects2.length = 0;
gdjs.SettingsCode.GDControlsToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDControlsToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDControlsButtonObjects1.length = 0;
gdjs.SettingsCode.GDControlsButtonObjects2.length = 0;
gdjs.SettingsCode.GDPlanetObjects1.length = 0;
gdjs.SettingsCode.GDPlanetObjects2.length = 0;
gdjs.SettingsCode.GDPlanetIntroObjects1.length = 0;
gdjs.SettingsCode.GDPlanetIntroObjects2.length = 0;
gdjs.SettingsCode.GDCommanderPortraitObjects1.length = 0;
gdjs.SettingsCode.GDCommanderPortraitObjects2.length = 0;
gdjs.SettingsCode.GDCommsPanelObjects1.length = 0;
gdjs.SettingsCode.GDCommsPanelObjects2.length = 0;
gdjs.SettingsCode.GDCommanderNameTextObjects1.length = 0;
gdjs.SettingsCode.GDCommanderNameTextObjects2.length = 0;
gdjs.SettingsCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.SettingsCode.GDCommsDialogueTextObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDBGObjects1.length = 0;
gdjs.SettingsCode.GDBGObjects2.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects1.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects2.length = 0;
gdjs.SettingsCode.GDMusicButtonObjects1.length = 0;
gdjs.SettingsCode.GDMusicButtonObjects2.length = 0;
gdjs.SettingsCode.GDTitleBoxObjects1.length = 0;
gdjs.SettingsCode.GDTitleBoxObjects2.length = 0;
gdjs.SettingsCode.GDButtonBGObjects1.length = 0;
gdjs.SettingsCode.GDButtonBGObjects2.length = 0;
gdjs.SettingsCode.GDSFXButtonObjects1.length = 0;
gdjs.SettingsCode.GDSFXButtonObjects2.length = 0;
gdjs.SettingsCode.GDControlTextObjects1.length = 0;
gdjs.SettingsCode.GDControlTextObjects2.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1.length = 0;
gdjs.SettingsCode.GDBackButtonObjects2.length = 0;
gdjs.SettingsCode.GDButtonBG2Objects1.length = 0;
gdjs.SettingsCode.GDButtonBG2Objects2.length = 0;
gdjs.SettingsCode.GDSound_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDSound_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDMusic_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDMusic_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDPause_9595buttonObjects1.length = 0;
gdjs.SettingsCode.GDPause_9595buttonObjects2.length = 0;
gdjs.SettingsCode.GDSettings_9595PanelObjects1.length = 0;
gdjs.SettingsCode.GDSettings_9595PanelObjects2.length = 0;
gdjs.SettingsCode.GDBackBGObjects1.length = 0;
gdjs.SettingsCode.GDBackBGObjects2.length = 0;
gdjs.SettingsCode.GDSettings_9595DimmerObjects1.length = 0;
gdjs.SettingsCode.GDSettings_9595DimmerObjects2.length = 0;
gdjs.SettingsCode.GDMusicToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDMusicToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDSoundToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDSoundToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDMusicLabelObjects1.length = 0;
gdjs.SettingsCode.GDMusicLabelObjects2.length = 0;
gdjs.SettingsCode.GDSoundLabelObjects1.length = 0;
gdjs.SettingsCode.GDSoundLabelObjects2.length = 0;
gdjs.SettingsCode.GDControlsLabelObjects1.length = 0;
gdjs.SettingsCode.GDControlsLabelObjects2.length = 0;
gdjs.SettingsCode.GDControlsToggleBGObjects1.length = 0;
gdjs.SettingsCode.GDControlsToggleBGObjects2.length = 0;
gdjs.SettingsCode.GDControlsButtonObjects1.length = 0;
gdjs.SettingsCode.GDControlsButtonObjects2.length = 0;
gdjs.SettingsCode.GDPlanetObjects1.length = 0;
gdjs.SettingsCode.GDPlanetObjects2.length = 0;
gdjs.SettingsCode.GDPlanetIntroObjects1.length = 0;
gdjs.SettingsCode.GDPlanetIntroObjects2.length = 0;
gdjs.SettingsCode.GDCommanderPortraitObjects1.length = 0;
gdjs.SettingsCode.GDCommanderPortraitObjects2.length = 0;
gdjs.SettingsCode.GDCommsPanelObjects1.length = 0;
gdjs.SettingsCode.GDCommsPanelObjects2.length = 0;
gdjs.SettingsCode.GDCommanderNameTextObjects1.length = 0;
gdjs.SettingsCode.GDCommanderNameTextObjects2.length = 0;
gdjs.SettingsCode.GDCommsDialogueTextObjects1.length = 0;
gdjs.SettingsCode.GDCommsDialogueTextObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
