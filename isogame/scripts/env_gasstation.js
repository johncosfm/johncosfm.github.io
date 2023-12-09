//john mcraven
//the one single building in the game so im just gonna hack it together instead of doing anything reusable
var gasstationData = {
	elem : false,
	textures : {
		exterior : "assets/tex__env__gas_station.png",
		int_base : "assets/tex__env__gasstation_int_base.png",
		int_layer1:"assets/tex__env__gasstation_int_layer1.png",
		int_layer2:"assets/tex__env__gasstation_int_layer2.png",
		int_layer3:"assets/tex__env__gasstation_int_layer3.png",
		int_layer4:"assets/tex__env__gasstation_int_layer4.png",
	},
	closeup : false,
	closeupOpacity : 0,
	closeupAnimPlaying : false,
	doorLocked : true,
	doorOpen : false,
	messages : {
		sawExt : false,
		entered : false,
		sawBlood : false,
		sawDrag : false,
		sawBloodDoor : false,
	},
	orbvoidFlickerStrength : 0,
	orbvoidFlickerValue: 0,
	orbvoidFlickerNextSet: 0,
	voidmode : false,
}

function gasstationPrecache() {
	PrecacheUrl(gasstationData["textures"]["int_base"]);
	PrecacheUrl(gasstationData["textures"]["int_layer1"]);
	PrecacheUrl(gasstationData["textures"]["int_layer2"]);
	PrecacheUrl(gasstationData["textures"]["int_layer3"]);
	PrecacheUrl(gasstationData["textures"]["int_layer4"]);
}

function gasstationInit() {
	gasstationData["elem"] = document.getElementById("gasstation");
	gasstationData["elem"].style.backgroundImage = "url(\""+ gasstationData["textures"]["exterior"] +"\")";
	gasstationData["elem"].style.width  = "1500px";
	gasstationData["elem"].style.height = "1500px";
	GetEntData(gasstationData["elem"])["origin"]["x"] = 7545;
	GetEntData(gasstationData["elem"])["origin"]["y"] = 879;
	UpdateEntOrigin(gasstationData["elem"]);
	
	gasstationData["doorElem"] = document.getElementById("gasstation_door");
	GetEntData(gasstationData["doorElem"])["origin"]["x"] = 7682;
	GetEntData(gasstationData["doorElem"])["origin"]["y"] = 1470;
	UpdateEntOrigin(gasstationData["doorElem"]);
	
	gasstationData["gasstation_int_base"] = document.getElementById("gasstation_int_base");
	gasstationData["gasstation_int_base"].style.backgroundImage = "url(\""+ gasstationData["textures"]["int_base"] +"\")";
	gasstationData["gasstation_int_base"].style.width  = "928px";
	gasstationData["gasstation_int_base"].style.height = "773px";

	gasstationData["gasstation_int_layer1"] = document.getElementById("gasstation_int_layer1");
	gasstationData["gasstation_int_layer1"].style.backgroundImage = "url(\""+ gasstationData["textures"]["int_layer1"] +"\")";
	gasstationData["gasstation_int_layer1"].style.width  = "928px";
	gasstationData["gasstation_int_layer1"].style.height = "773px";

	gasstationData["gasstation_int_layer2"] = document.getElementById("gasstation_int_layer2");
	gasstationData["gasstation_int_layer2"].style.backgroundImage = "url(\""+ gasstationData["textures"]["int_layer2"] +"\")";
	gasstationData["gasstation_int_layer2"].style.width  = "928px";
	gasstationData["gasstation_int_layer2"].style.height = "773px";
	
	gasstationData["gasstation_int_layer3"] = document.getElementById("gasstation_int_layer3");
	gasstationData["gasstation_int_layer3"].style.backgroundImage = "url(\""+ gasstationData["textures"]["int_layer3"] +"\")";
	gasstationData["gasstation_int_layer3"].style.width  = "928px";
	gasstationData["gasstation_int_layer3"].style.height = "773px";

	gasstationData["gasstation_int_layer4"] = document.getElementById("gasstation_int_layer4");
	gasstationData["gasstation_int_layer4"].style.backgroundImage = "url(\""+ gasstationData["textures"]["int_layer4"] +"\")";
	gasstationData["gasstation_int_layer4"].style.width  = "928px";
	gasstationData["gasstation_int_layer4"].style.height = "773px";
	
	addEventListener("mousedown", gasstationInputMouseDown);
}

function gasstationUpdate(deltaTime) {
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["elem"], "env__gas_station_trigger_stairs")) {
		if (curMsg == "") {setMessage("There is a sign on the stairs reading \"out of order\". I'll have to find another way inside.")};
	} else {
		if (curMsg == "There is a sign on the stairs reading \"out of order\". I'll have to find another way inside.") {setMessage("")};
	}
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["elem"], "env__gas_station_trigger_backside")) {
		gasstationData["elem"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 50) - GetEntData(gasstationData["elem"])["origin"]["y"];
	} else {
		gasstationData["elem"].dataset.sorting_offset = 0;
	}
	if (!gasstationData["doorOpen"] && traceEntHull(cursorPosWS, gasstationData["doorElem"], "env__gas_station_door_interact")) {
		if (gasstationData["doorLocked"]) {
			gasstationData["doorElem"].dataset.sequence = "env__gasstation_ext_door__anim_locked_hover";
		} else {
			gasstationData["doorElem"].dataset.sequence = "env__gasstation_ext_door__anim_preidle_hover";
		}
	} else if (!gasstationData["doorOpen"]) {
		if (gasstationData["doorLocked"]) {
			gasstationData["doorElem"].dataset.sequence = "env__gasstation_ext_door__anim_locked";
		} else {
			gasstationData["doorElem"].dataset.sequence = "env__gasstation_ext_door__anim_preidle";
		}
	}
	if (gasstationData["closeup"] && !gasstationData["closeupAnimPlaying"] && !gasstationData["doorLocked"]) {
		camData["locked"] = false;
		playerData["locked"] = false;
		gasstationData["closeup"] = false;
		document.getElementById("generated_gasstation_door_closeup").remove();
	}
	if (gasstationData["closeup"]) {
		document.getElementById("generated_gasstation_door_closeup").style.transform = "scale("+7.3*(window.innerHeight/1291)+")";
		if (gasstationData["closeupOpacity"] < 1) {
			gasstationData["closeupOpacity"] += deltaTime / 0.4;
			gasstationData["closeupOpacity"] = Clamp(gasstationData["closeupOpacity"], 0, 1)
			SetEntOpacity(document.getElementById("generated_gasstation_door_closeup"), Math.round(gasstationData["closeupOpacity"] * 4) / 4);
		}
		if (gasstationData["closeupOpacity"] == 1) {
			if (!gasstationData["closeupAnimPlaying"] && (traceEntHull(cursorPos, document.getElementById("generated_gasstation_door_closeup"), "closeup__gasstation_door__boards_1") 
			|| traceEntHull(cursorPos, document.getElementById("generated_gasstation_door_closeup"), "closeup__gasstation_door__boards_2"))) {
				if (!playerData["hasCrowbar"]) {
					setMessage("I Can't get the door open with these boards in the way. Maybe there's a tool somewhere that could pry them off.");
				}
				document.getElementById("generated_gasstation_door_closeup").style.cursor = "pointer";
			} else {
				if (curMsg == "I Can't get the door open with these boards in the way. Maybe there's a tool somewhere that could pry them off.") {setMessage("");}
				document.getElementById("generated_gasstation_door_closeup").style.cursor = "default";
			}
		}
	}
	
	//interior
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_layer1"], "env__gas_station_int_layer1_sort")) {
		gasstationData["gasstation_int_layer1"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 50);
	} else {
		gasstationData["gasstation_int_layer1"].dataset.sorting_offset = 0;
	}
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_layer2"], "env__gas_station_int_layer2_sort")) {
		gasstationData["gasstation_int_layer2"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 50);
	} else {
		gasstationData["gasstation_int_layer2"].dataset.sorting_offset = 0;
	}
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_layer3"], "env__gas_station_int_layer3_sort")) {
		gasstationData["gasstation_int_layer3"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 50);
	} else {
		gasstationData["gasstation_int_layer3"].dataset.sorting_offset = 0;
	}
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_layer4"], "env__gas_station_int_layer4_sort")) {
		gasstationData["gasstation_int_layer4"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 50);
	} else {
		gasstationData["gasstation_int_layer4"].dataset.sorting_offset = 0;
	}
	
	if (!gasstationData["messages"]["sawBlood"] && traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_base"], "env__gas_station_int_trigger_blood")) {
		gasstationData["messages"]["sawBlood"] = true;
/* 		var message = "That's a lot of blood. I don't like this.";
		setMessage(message);
		setTimeout(() => {if (curMsg == message) {
			setMessage("");
		}}, 4000); */
	}
	if(gasstationData["messages"]["sawBlood"] && !gasstationData["messages"]["sawDrag"]
	&& traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["gasstation_int_base"], "env__gas_station_int_trigger_drag")) {
		gasstationData["messages"]["sawDrag"] = true;
		var message = "Someone or something was dragged across the floor here. I'm not sure what could bleed this much.";
		setMessage(message);
		setTimeout(() => {if (curMsg == message) {
			setMessage("");
		}}, 4000);
	}
	
	//orbvoid flickering
	if (gasstationData["orbvoidFlickerStrength"] > 0) {
		if (CurTime() > gasstationData["orbvoidFlickerNextSet"]) {
			gasstationData["orbvoidFlickerValue"] = ((getRandomInt(0, 32)/32) * gasstationData["orbvoidFlickerStrength"]) + (1-gasstationData["orbvoidFlickerStrength"])
			gasstationData["orbvoidFlickerNextSet"] = CurTime() + 0.1;
		}
		worldsData["fade"] = gasstationData["orbvoidFlickerValue"];
	}
	
	//doors
	if (worldsData["currentWorld"] == "shopfloor") {
		if (traceEntHull(cursorPosWS, document.getElementById("door_01"), "env__door_01_interact") || traceEntHull(cursorPosWS, document.getElementById("door_02"), "env__door_01_interact")) {
			playerData["lockNewGoals"] = true;
		} else {
			playerData["lockNewGoals"] = false;
		}
	}
	//doors
	if (worldsData["currentWorld"] == "orbvoid") {
		if (!gasstationData["voidmode"] && traceEntHull(cursorPosWS, document.getElementById("door_03"), "env__door_03_interact")) {
			playerData["lockNewGoals"] = true;
		} else {
			playerData["lockNewGoals"] = false;
		}
	}
}

function gasstationInputMouseDown(e) {
	if (e.button != 0) {return;}
	//door 01
	if (traceEntHull(cursorPosWS, document.getElementById("door_01"), "env__door_01_interact")) {
		var player = GetEntData(document.getElementById("player"));
		var interactTargetPos = texToWorldSpace({x: 119, y: 171}, document.getElementById("door_01"));
		var message = "I can't go through that door, it's too far away.";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 100) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		if (curMsg == message) {setMessage("");}
		document.getElementById("door_01").dataset.sequence = "env__door_01__anim_open";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 20) {
			playerData["scriptedGoalInput"] = true;
			if (playerData["hasCrowbar"]) {
				playerData["scriptedGoalAnim"] = "player__anim_crowbar_idle";
			} else {
				playerData["scriptedGoalAnim"] = "player__anim_base_idle";
			}
			playerData["goalInput"]["x"] = interactTargetPos["x"];
			playerData["goalInput"]["y"] = interactTargetPos["y"];
			playerData["pathInfo"]["stale"] = true;
			playerData["useGoalInput"] = true;
		} else {
			document.getElementById("player").dataset.sequence_direction = "dir_045";
		}
		return;
	}
	//door 02
	if (traceEntHull(cursorPosWS, document.getElementById("door_02"), "env__door_01_interact")) {
		var player = GetEntData(document.getElementById("player"));
		var interactTargetPos = texToWorldSpace({x: 119, y: 171}, document.getElementById("door_02"));
		var message = "I can't go through that door, it's too far away.";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 100) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		if (curMsg == message) {setMessage("");}
		document.getElementById("door_02").dataset.sequence = "env__door_02__anim_open";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 20) {
			playerData["scriptedGoalInput"] = true;
			if (playerData["hasCrowbar"]) {
				playerData["scriptedGoalAnim"] = "player__anim_crowbar_idle";
			} else {
				playerData["scriptedGoalAnim"] = "player__anim_base_idle";
			}
			playerData["goalInput"]["x"] = interactTargetPos["x"];
			playerData["goalInput"]["y"] = interactTargetPos["y"];
			playerData["pathInfo"]["stale"] = true;
			playerData["useGoalInput"] = true;
		} else {
			document.getElementById("player").dataset.sequence_direction = "dir_045";
		}
		return;
	}
	//door 03
	if (!gasstationData["voidmode"] && traceEntHull(cursorPosWS, document.getElementById("door_03"), "env__door_03_interact")) {
		var player = GetEntData(document.getElementById("player"));
		var interactTargetPos = texToWorldSpace({x: 119, y: 171}, document.getElementById("door_03"));
		var message = "I can't go through that door, it's too far away.";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 100) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		if (worldsData["currentWorld"] == "orbvoid") {
			playSoundEvent("snd__fol__door_wood_locked");
			var message = "Inconveniently, the door is now locked.";
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 1000);
		} else {
			if (curMsg == message) {setMessage("");}
			document.getElementById("door_03").dataset.sequence = "env__door_03__anim_open";
			if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 20) {
				playerData["scriptedGoalInput"] = true;
				if (playerData["hasCrowbar"]) {
					playerData["scriptedGoalAnim"] = "player__anim_crowbar_idle";
				} else {
					playerData["scriptedGoalAnim"] = "player__anim_base_idle";
				}
				playerData["goalInput"]["x"] = interactTargetPos["x"];
				playerData["goalInput"]["y"] = interactTargetPos["y"];
				playerData["pathInfo"]["stale"] = true;
				playerData["useGoalInput"] = true;
			} else {
				document.getElementById("player").dataset.sequence_direction = "dir_045";
			}
		}
		return;
	}
	//exterior stuff
	if (gasstationData["closeup"]) {
		if (gasstationData["closeupAnimPlaying"]) {return;}
		if(playerData["hasCrowbar"] && (traceEntHull(cursorPos, document.getElementById("generated_gasstation_door_closeup"), "closeup__gasstation_door__boards_1") 
		|| traceEntHull(cursorPos, document.getElementById("generated_gasstation_door_closeup"), "closeup__gasstation_door__boards_2"))) {
			document.getElementById("generated_gasstation_door_closeup").dataset.sequence = "closeup__gasstation_door__anim_action";
			gasstationData["closeupAnimPlaying"] = true;
		}
		if (!traceEntHull(cursorPos, document.getElementById("generated_gasstation_door_closeup"), "closeup__gasstation_door__exit_inv")) {
			camData["locked"] = false;
			playerData["locked"] = false;
			gasstationData["closeup"] = false;
			document.getElementById("generated_gasstation_door_closeup").remove();
		}
	} else {
		if (!traceEntHull(cursorPosWS, gasstationData["doorElem"], "env__gas_station_door_interact")) {return;}
		var player = GetEntData(document.getElementById("player"));
		var interactTargetPos = texToWorldSpace({x: 47, y: 169}, gasstationData["doorElem"]);
		var message = "I can't reach that, it's too far away.";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 200) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		//set scripted goal input
		playerData["scriptedGoalInput"] = true;
		if (!gasstationData["doorLocked"]) {
			playerData["scriptedGoalAnim"] = "player__anim_cin03_doorinteract_unlocked";
		} else if (playerData["hasCrowbar"]) {
			playerData["scriptedGoalAnim"] = "player__anim_cin03_doorinteract_crowbar";
		} else {
			playerData["scriptedGoalAnim"] = "player__anim_cin03_doorinteract";
		}
		playerData["goalInput"]["x"] = interactTargetPos["x"];
		playerData["goalInput"]["y"] = interactTargetPos["y"];
		playerData["pathInfo"]["stale"] = true;
		playerData["useGoalInput"] = true;
		if (curMsg == message) {setMessage("");}
	}
}

function gassttationDoorInteractStart() {
	camData["locked"] = true;
	playerData["locked"] = true;
	gasstationData["closeup"] = true;
	gasstationData["closeupOpacity"] = 0;
	//spawn popup
	var newelem = document.createElement("div");
	newelem.id = "generated_gasstation_door_closeup";
	newelem.dataset.sequence = "closeup__gasstation_door__anim_preidle";
	newelem.style.margin = "auto";
	newelem.style.position = "relative";
	newelem.style.opacity = 0;
	newelem.style.top = "calc(50% - (169px/2))";
	newelem.style.transform = "scale("+6*(window.innerHeight/1291)+")";
	document.getElementById("zoom").parentNode.insertBefore(newelem, document.getElementById("zoom").nextSibling);
}

function gassttationDoorInteractOpen() {
	camData["locked"] = true;
	playerData["locked"] = true;
	gasstationData["doorOpen"] = true;
	gasstationData["doorElem"].dataset.sequence = "env__gasstation_ext_door__anim_action";
}

function gasstationStartVoidMode() {
	gasstationData["voidmode"] = true;
	document.getElementById("fakecloset").style.display = "none";
	document.getElementById("door_03").style.display = "none";
}