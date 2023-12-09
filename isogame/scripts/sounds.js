//john mcraven
//basic soundevents

var soundeventData = {
	snd__player_step : {
		sounds : [
			"assets/snd__player_step__dirt_01.wav",
			"assets/snd__player_step__dirt_02.wav",
			"assets/snd__player_step__dirt_03.wav",
			"assets/snd__player_step__dirt_04.wav",
			"assets/snd__player_step__dirt_05.wav",
			"assets/snd__player_step__dirt_06.wav",
			"assets/snd__player_step__dirt_07.wav",
			"assets/snd__player_step__dirt_08.wav",
			"assets/snd__player_step__dirt_09.wav",
		],
		volume : 0.4,
		noRepeat : true,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__player_step_tile : {
		sounds : [
			"assets/snd__player_step__tile_01.wav",
			"assets/snd__player_step__tile_02.wav",
			"assets/snd__player_step__tile_03.wav",
			"assets/snd__player_step__tile_04.wav",
			"assets/snd__player_step__tile_05.wav",
			"assets/snd__player_step__tile_06.wav",
			"assets/snd__player_step__tile_07.wav",
			"assets/snd__player_step__tile_08.wav",
			"assets/snd__player_step__tile_09.wav",
		],
		volume : 1,
		noRepeat : true,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__ambient_ext_base : {
		sounds : [
			"assets/snd__ambient__ext_base_loop.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : 5,
		loop : true,
	},
	snd__ambient_ext_wind : {
		sounds : [
			"assets/snd__ambient__ext_wind_loop.wav",
		],
		volume : 0.1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : true,
		fadeIn : 10,
		loop : true,
	},
	snd__ambient__ext_rand : {
		sounds : [
			"assets/snd__ambient__ext_rand_01.wav",
			"assets/snd__ambient__ext_rand_02.wav",
			"assets/snd__ambient__ext_rand_03.wav",
			"assets/snd__ambient__ext_rand_04.wav",
			"assets/snd__ambient__ext_rand_05.wav",
			"assets/snd__ambient__ext_rand_06.wav",
			"assets/snd__ambient__ext_rand_07.wav",
			"assets/snd__ambient__ext_rand_08.wav",
			"assets/snd__ambient__ext_rand_09.wav",
			"assets/snd__ambient__ext_rand_10.wav",
			"assets/snd__ambient__ext_rand_11.wav",
		],
		volume : 0.6,
		noRepeat : true,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__ambient__int_base : {
		sounds : [
			"assets/snd__ambient__int_base_loop.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : 0.5,
		loop : true,
	},
	snd__ambient__int_music : {
		sounds : [
			"assets/snd__ambient__int_music.wav",
		],
		volume : 0.4,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : 0.5,
		loop : true,
	},
	snd__ambient__int_rand : {
		sounds : [
			"assets/snd__ambient__int_rand_01.wav",
			"assets/snd__ambient__int_rand_02.wav",
			"assets/snd__ambient__int_rand_03.wav",
			"assets/snd__ambient__int_rand_04.wav",
			"assets/snd__ambient__int_rand_05.wav",
			"assets/snd__ambient__int_rand_06.wav",
			"assets/snd__ambient__int_rand_07.wav",
			"assets/snd__ambient__int_rand_08.wav",
			"assets/snd__ambient__int_rand_09.wav",
			"assets/snd__ambient__int_rand_10.wav",
			"assets/snd__ambient__int_rand_11.wav",
			"assets/snd__ambient__int_rand_12.wav",
			"assets/snd__ambient__int_rand_13.wav",
			"assets/snd__ambient__int_rand_14.wav",
			"assets/snd__ambient__int_rand_15.wav",
			"assets/snd__ambient__int_rand_16.wav",
			"assets/snd__ambient__int_rand_17.wav",
			"assets/snd__ambient__int_rand_18.wav",
			"assets/snd__ambient__int_rand_19.wav",
		],
		volume : 1,
		noRepeat : true,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__music__playgo : {
		sounds : [
			"assets/snd__music__playgo.mp3",
		],
		volume : 0.2,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__player__anim_cin01__wake_action : {
		sounds : [
			"assets/snd__player__anim_cin01__wake_action.wav",
		],
		volume : 0.15,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__scripted__carwreck_trunk_open : {
		sounds : [
			"assets/snd__scripted__carwreck_trunk_open.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__scripted__aquire_crowbar : {
		sounds : [
			"assets/snd__scripted__aquire_crowbar.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__scripted__gasstation_door_unlock : {
		sounds : [
			"assets/snd__scripted__gasstation_door_unlock.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__scripted__gasstation_door_open : {
		sounds : [
			"assets/snd__scripted__gasstation_door_open.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_metal_open : {
		sounds : [
			"assets/snd__fol__door_metal_open_01.wav",
			"assets/snd__fol__door_metal_open_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_metal_move : {
		sounds : [
			"assets/snd__fol__door_metal_move_01.wav",
			"assets/snd__fol__door_metal_move_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_metal_close : {
		sounds : [
			"assets/snd__fol__door_metal_close_01.wav",
			"assets/snd__fol__door_metal_close_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_wood_open : {
		sounds : [
			"assets/snd__fol__door_wood_open_01.wav",
			"assets/snd__fol__door_wood_open_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_wood_move : {
		sounds : [
			"assets/snd__fol__door_wood_move_01.wav",
			"assets/snd__fol__door_wood_move_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_wood_close : {
		sounds : [
			"assets/snd__fol__door_wood_close_01.wav",
			"assets/snd__fol__door_wood_close_02.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__fol__door_wood_locked : {
		sounds : [
			"assets/snd__fol__door_wood_locked_01.wav",
			"assets/snd__fol__door_wood_locked_02.wav",
		],
		volume : 0.2,
		noRepeat : false,
		scaleByCameraZoom : true,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__ambient__broomcloset_fakeout : {
		sounds : [
			"assets/snd__ambient__broomcloset_fakeout.wav",
		],
		volume : 1,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__scripted__headache : {
		sounds : [
			"assets/snd__scripted__headache.wav",
		],
		volume : 0.8,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : false,
		loop : false,
	},
	snd__ambient__orbvoid_base_loop : {
		sounds : [
			"assets/snd__ambient__orbvoid_base_loop.wav",
		],
		volume : 0.8,
		noRepeat : false,
		scaleByCameraZoom : false,
		divideByCameraZoom : false,
		fadeIn : 10,
		loop : true,
	},
}
var soundInside = true;
function soundInit() {
	//startup game ambience
	if (worldsData["currentWorld"] == "shopfloor") {
		playSoundEvent("snd__ambient__int_base");
		playSoundEvent("snd__ambient__int_music");
	} else if (worldsData["currentWorld"] == "orbvoid") {
	} else {
		playSoundEvent("snd__ambient_ext_base");
		playSoundEvent("snd__ambient_ext_wind");
	}
}

function soundUpdate(deltaTime) {
	//random ambient events, hard coded cause cant be bothered to implement it properly
	if (worldsData["currentWorld"] == "shopfloor") {
		if (!soundeventData["snd__ambient__int_rand"]["next"]) {soundeventData["snd__ambient__int_rand"]["next"] = CurTime() + getRandomInt(3,10);}
		if (CurTime() > soundeventData["snd__ambient__int_rand"]["next"]) {
			playSoundEvent("snd__ambient__int_rand");
			soundeventData["snd__ambient__int_rand"]["next"] = CurTime() + getRandomInt(5,15);
		}
	} else if (worldsData["currentWorld"] == "orbvoid") {
	} else {
		if (!soundeventData["snd__ambient__ext_rand"]["next"]) {soundeventData["snd__ambient__ext_rand"]["next"] = CurTime() + getRandomInt(3,10);}
		if (CurTime() > soundeventData["snd__ambient__ext_rand"]["next"]) {
			playSoundEvent("snd__ambient__ext_rand");
			soundeventData["snd__ambient__ext_rand"]["next"] = CurTime() + getRandomInt(10,20);
		}
	}
	
	//update parameters for looping sounds
	for (var i=0, max=Object.keys(soundeventData).length; i < max; i++) {
		sndevt = Object.keys(soundeventData)[i];
		if (soundeventData[sndevt]["loop"] && "htmlAudio" in soundeventData[sndevt]) {
			var volume = soundeventData[sndevt]["volume"];
			if (soundeventData[sndevt]["scaleByCameraZoom"]) {
				volume *= Clamp(camData["zoom"] / 5, 0, 5);
			}
			if (soundeventData[sndevt]["divideByCameraZoom"]) {
				volume /= Clamp(camData["zoom"] / 5, 0.1, 5);
			}
			if (soundeventData[sndevt]["fadeIn"]) {
				if (!soundeventData[sndevt]["fadeInValue"]) {soundeventData[sndevt]["fadeInValue"] = 0;}
				soundeventData[sndevt]["fadeInValue"] += deltaTime / soundeventData[sndevt]["fadeIn"];
				soundeventData[sndevt]["fadeInValue"] = Clamp(soundeventData[sndevt]["fadeInValue"], 0, 1);
				volume *= soundeventData[sndevt]["fadeInValue"];
			}
			volume = Clamp(volume, 0, 1);
			if (!volume) {volume = 0;}
			//default looping kinda sucks so we do it manually with a crossfade
			if (soundeventData[sndevt]["activeHtmlAudio"] == 1) {
				if (soundeventData[sndevt]["htmlAudio"].duration - soundeventData[sndevt]["htmlAudio"].currentTime <= 1) {
					soundeventData[sndevt]["activeHtmlAudio"] = 2;
					soundeventData[sndevt]["htmlAudio2"].play();
				}
			} else {
				if (soundeventData[sndevt]["htmlAudio2"].duration - soundeventData[sndevt]["htmlAudio2"].currentTime <= 1) {
					soundeventData[sndevt]["activeHtmlAudio"] = 1;
					soundeventData[sndevt]["htmlAudio"].play();
				}
			}
			if (soundeventData[sndevt]["activeHtmlAudio"] == 1) {
				soundeventData[sndevt]["activeBlend1"] = Clamp(soundeventData[sndevt]["activeBlend1"] + deltaTime, 0, 1);
				soundeventData[sndevt]["activeBlend2"] = Clamp(soundeventData[sndevt]["activeBlend2"] - deltaTime, 0, 1);
			} else {
				soundeventData[sndevt]["activeBlend1"] = Clamp(soundeventData[sndevt]["activeBlend1"] - deltaTime, 0, 1);
				soundeventData[sndevt]["activeBlend2"] = Clamp(soundeventData[sndevt]["activeBlend2"] + deltaTime, 0, 1);
			}
			if (!soundeventData[sndevt]["activeBlend1"]) {soundeventData[sndevt]["activeBlend1"] = 1};
			if (!soundeventData[sndevt]["activeBlend2"]) {soundeventData[sndevt]["activeBlend2"] = 0};
			soundeventData[sndevt]["htmlAudio"].volume = volume * soundeventData[sndevt]["activeBlend1"];
			soundeventData[sndevt]["htmlAudio2"].volume = volume * soundeventData[sndevt]["activeBlend2"];
		}
	}
}

function soundStop() {
	for (var asset in audioElements) {
		audioElements[asset].pause();
		audioElements[asset].currentTime = 0;
	}
	for (var i=0, max=Object.keys(soundeventData).length; i < max; i++) {
		sndevt = Object.keys(soundeventData)[i];
		if (soundeventData[sndevt]["htmlAudio"]) {
			soundeventData[sndevt]["htmlAudio"].pause();
			soundeventData[sndevt]["htmlAudio"].currentTime = 0;
		}
		if (soundeventData[sndevt]["htmlAudio2"]) {
			soundeventData[sndevt]["htmlAudio2"].pause();
			soundeventData[sndevt]["htmlAudio2"].currentTime = 0;
		}
	}
}

function playSoundEvent(sndevt) {
	if (sndevt == "snd__player_step" && worldsData["currentWorld"] == "shopfloor") {
		sndevt = "snd__player_step_tile";
	}
	if (sndevt == "snd__player_step" && worldsData["currentWorld"] == "orbvoid") {
		sndevt = "snd__player_step_tile";
	}
	if (sndevt in soundeventData) {
		var volume = soundeventData[sndevt]["volume"];
		var sndindex = getRandomInt(0, soundeventData[sndevt]["sounds"].length-1);
		if (soundeventData[sndevt]["noRepeat"]) {
			if ("lastPlayed" in soundeventData[sndevt]) {
				sndindex = getRandomInt(0, soundeventData[sndevt]["sounds"].length-2);
				if (soundeventData[sndevt]["sounds"][sndindex] == soundeventData[sndevt]["lastPlayed"]) {
					sndindex++;
				}
			}
			soundeventData[sndevt]["lastPlayed"] = soundeventData[sndevt]["sounds"][sndindex];
		}
		if (soundeventData[sndevt]["scaleByCameraZoom"]) {
			volume *= Clamp(camData["zoom"] * Clamp(camData["zoom"], 0, 1), 0, 2);
		}
		if (soundeventData[sndevt]["divideByCameraZoom"]) {
			volume /= Clamp(camData["zoom"] * Clamp(camData["zoom"], 0, 1), 0.1, 2);
		}
		if (soundeventData[sndevt]["loop"]) {
			soundeventData[sndevt]["htmlAudio"] = new Audio(soundeventData[sndevt]["sounds"][sndindex]);
			soundeventData[sndevt]["htmlAudio2"] = new Audio(soundeventData[sndevt]["sounds"][sndindex]);
			if (soundeventData[sndevt]["fadeIn"]) {
				soundeventData[sndevt]["htmlAudio"].volume = 0;
			} else {
				soundeventData[sndevt]["htmlAudio"].volume = volume;
			}
			soundeventData[sndevt]["htmlAudio2"].volume = 0;
			if (sndevt == "snd__ambient__int_music") {
				soundeventData[sndevt]["htmlAudio"].currentTime = 48;
			}
			soundeventData[sndevt]["htmlAudio"].play();
			soundeventData[sndevt]["activeHtmlAudio"] = 1;
			soundeventData[sndevt]["activeBlend1"] = 1;
			soundeventData[sndevt]["activeBlend2"] = 0;
		} else {
			playSound(soundeventData[sndevt]["sounds"][sndindex], volume);
		}
	}
}

function playSound(asset, volume) {
	if (!(asset in audioElements)) {PrecacheSound(asset);}
	audioElements[asset].volume = Clamp(volume, 0, 1);
	audioElements[asset].pause();
	audioElements[asset].currentTime = 0;
	audioElements[asset].play();
}