//john mcraven
//the one single building in the game so im just gonna hack it together instead of doing anything reusable
var gasstationData = {
	elem : false,
	textures : {
		exterior : "assets/tex__env__gas_station.png",
	},
	closeup : false,
	closeupOpacity : 0,
	closeupAnimPlaying : false,
	doorLocked : true,
	doorOpen : false,
}

function gasstationInit() {
	gasstationData["elem"] = document.getElementById("gasstation");
	gasstationData["doorElem"] = document.getElementById("gasstation_door");
	gasstationData["elem"].style.backgroundImage = "url(\""+ gasstationData["textures"]["exterior"] +"\")";
	gasstationData["elem"].style.width  = "1500px";
	gasstationData["elem"].style.height = "1500px";
	GetEntData(gasstationData["elem"])["origin"]["x"] = 7545;
	GetEntData(gasstationData["elem"])["origin"]["y"] = 879;
	UpdateEntOrigin(gasstationData["elem"]);
	GetEntData(gasstationData["doorElem"])["origin"]["x"] = 7682;
	GetEntData(gasstationData["doorElem"])["origin"]["y"] = 1470;
	UpdateEntOrigin(gasstationData["doorElem"]);
	
	addEventListener("mousedown", gasstationInputMouseDown);
}

function gasstationUpdate(deltaTime) {
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["elem"], "env__gas_station_trigger_stairs")) {
		if (curMsg == "") {setMessage("There is a sign on the stairs reading \"out of order\". I'll have to find another way inside.")};
	} else {
		if (curMsg == "There is a sign on the stairs reading \"out of order\". I'll have to find another way inside.") {setMessage("")};
	}
	if (traceEntHull(GetEntData(document.getElementById("player"))["origin"], gasstationData["elem"], "env__gas_station_trigger_backside")) {
		gasstationData["elem"].dataset.sorting_offset = (GetEntData(document.getElementById("player"))["origin"]["y"] + 5) - GetEntData(gasstationData["elem"])["origin"]["y"];
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
}

function gasstationInputMouseDown(e) {
	if (e.button != 0) {return;}
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