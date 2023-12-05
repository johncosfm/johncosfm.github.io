//john mcraven
//the broken down car that the player can get the crowbar from

var carwreckData = {
	elem : false,
	closeup : false,
	closeupOpacity : 0,
	closeupAnimStarted : false,
	textures : {
		trunkClosed : "assets/tex__env__carwreck_closed.png",
		trunkClosedHover : "assets/tex__env__carwreck_closed_hover.png",
		trunkOpen: "assets/tex__env__carwreck_open.png",
		trunkOpenHover: "assets/tex__env__carwreck_open_hover.png",
	},
	trunkOpen : false,
	trunkGrabEnabled : false,
	looted : false,
}

function carwreckPrecache() {
	for (var texture in carwreckData["textures"]) {
		PrecacheUrl(carwreckData["textures"][texture]);
	}
}

function carwreckInit() {
	carwreckData["elem"] = document.getElementById("carwreck");
	carwreckData["elem"].style.backgroundImage = "url(\""+ carwreckData["textures"]["trunkClosed"] +"\")";
	carwreckData["elem"].style.width  = "320px";
	carwreckData["elem"].style.height = "233px";
	GetEntData(carwreckData["elem"])["origin"]["x"] = 5579;
	GetEntData(carwreckData["elem"])["origin"]["y"] = 1784;
	UpdateEntOrigin(carwreckData["elem"]);

	addEventListener("mousedown", carwreckInputMouseDown);
}

function carwreckUpdate(deltaTime) {
	if (!carwreckData["closeup"] && traceEntHull(cursorPosWS, document.getElementById("carwreck"), "env__carwreck_trunk_closed")) {
		if (carwreckData["trunkOpen"] && !carwreckData["looted"]) {
			carwreckData["elem"].style.backgroundImage = "url(\""+ carwreckData["textures"]["trunkOpenHover"] +"\")";
		} else if (!carwreckData["looted"]) {
			carwreckData["elem"].style.backgroundImage = "url(\""+ carwreckData["textures"]["trunkClosedHover"] +"\")";
		}
		playerData["lockNewGoals"] = true;
	} else {
		if (carwreckData["trunkOpen"]) {
			carwreckData["elem"].style.backgroundImage = "url(\""+ carwreckData["textures"]["trunkOpen"] +"\")";
		} else {
			carwreckData["elem"].style.backgroundImage = "url(\""+ carwreckData["textures"]["trunkClosed"] +"\")";
		}
		playerData["lockNewGoals"] = false;
	}
	if (carwreckData["closeup"]) {
		document.getElementById("generated_carwreckcloseup").style.transform = "scale("+7.5*(window.innerHeight/1291)+")";
		if (!carwreckData["closeupAnimStarted"]) {
			carwreckData["closeupOpacity"] += deltaTime / 0.4;
			carwreckData["closeupOpacity"] = Clamp(carwreckData["closeupOpacity"], 0, 1)
			SetEntOpacity(document.getElementById("generated_carwreckcloseup"), Math.round(carwreckData["closeupOpacity"] * 4) / 4);
			if (carwreckData["closeupOpacity"] == 1) {
				if (!carwreckData["trunkOpen"]) {
					document.getElementById("generated_carwreckcloseup").dataset.sequence = "closeup__carwreck_trunk__anim_open_action";
				}
				carwreckData["closeupAnimStarted"] = true;
			}
		}
		if (carwreckData["trunkGrabEnabled"] && carwreckData["closeupAnimStarted"]) {
			if (traceEntHull(cursorPos, document.getElementById("generated_carwreckcloseup"), "closeup__carwreck_trunk__crowbar")) {
				setMessage("A sturdy crowbar, Looks useful for prying wooden objects apart.");
				document.getElementById("generated_carwreckcloseup").style.cursor = "grab";
			} else {
				if (curMsg == "A sturdy crowbar, Looks useful for prying wooden objects apart.") {setMessage("");}
				document.getElementById("generated_carwreckcloseup").style.cursor = "default";
			}
		}
	}
}

function carwreckInputMouseDown(e) {
	if (e.button != 0) {return;}
	if (carwreckData["closeup"]) {
		if (carwreckData["trunkGrabEnabled"] && carwreckData["closeupAnimStarted"] && traceEntHull(cursorPos, document.getElementById("generated_carwreckcloseup"), "closeup__carwreck_trunk__crowbar")) {
			setMessage("");
			carwreckData["trunkGrabEnabled"] = false;
			carwreckData["looted"] = true;
			document.getElementById("generated_carwreckcloseup").style.cursor = "grabbing";
			document.getElementById("generated_carwreckcloseup").dataset.sequence = "closeup__carwreck_trunk__anim_loot";
			setTimeout(() => {if (document.getElementById("generated_carwreckcloseup")) {
				camData["locked"] = false;
				carwreckData["closeup"] = false;
				document.getElementById("generated_carwreckcloseup").remove();
				if (playerData["hasCrowbar"]) {
					document.getElementById("player").dataset.sequence = "player__anim_cin02_closetrunk_crowbar_action";
				} else {
					document.getElementById("player").dataset.sequence = "player__anim_cin02_closetrunk_action";
				}
				document.getElementById("player").dataset.sequence_direction = "dir_045";
			}}, 1000);
		}
		if (!traceEntHull(cursorPos, document.getElementById("generated_carwreckcloseup"), "closeup__carwreck_trunk__exit_inv")) {
			camData["locked"] = false;
			carwreckData["closeup"] = false;
			document.getElementById("generated_carwreckcloseup").remove();
			if (playerData["hasCrowbar"]) {
				document.getElementById("player").dataset.sequence = "player__anim_cin02_closetrunk_crowbar_action";
			} else {
				document.getElementById("player").dataset.sequence = "player__anim_cin02_closetrunk_action";
			}
			document.getElementById("player").dataset.sequence_direction = "dir_045";
		}
	} else {
		if (!traceEntHull(cursorPosWS, carwreckData["elem"], "env__carwreck_trunk_closed")) {return;}
		var player = GetEntData(document.getElementById("player"));
		var interactTargetPos = texToWorldSpace({x: 340, y:77}, carwreckData["elem"]);
		var message = "Doesn't seem to be anything else of note in there.";
		if (carwreckData["looted"]) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		message = "I can't reach that, it's too far away.";
		if (calcDist(interactTargetPos["x"], interactTargetPos["y"], player["origin"]["x"], player["origin"]["y"]) > 200) {
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 2000);
			return;
		}
		//set scripted goal input
		playerData["scriptedGoalInput"] = true;
		playerData["scriptedGoalAnim"] = "player__anim_cin02_opentrunk_action";
		playerData["goalInput"]["x"] = interactTargetPos["x"];
		playerData["goalInput"]["y"] = interactTargetPos["y"];
		playerData["pathInfo"]["stale"] = true;
		playerData["useGoalInput"] = true;
		if (curMsg == message) {setMessage("");}
	}
}

function carwreckInteractStart() { //hit end of interact anim
	camData["locked"] = true;
	playerData["locked"] = true;
	carwreckData["closeup"] = true;
	carwreckData["closeupOpacity"] = 0;
	carwreckData["closeupAnimStarted"] = false;
	//spawn popup
	var newelem = document.createElement("div");
	newelem.id = "generated_carwreckcloseup";
	if (!carwreckData["trunkOpen"]) {
		newelem.dataset.sequence = "closeup__carwreck_trunk__anim_open_preidle";
	} else {
		newelem.dataset.sequence = "closeup__carwreck_trunk__anim_open_postidle";
	}
	newelem.style.margin = "auto";
	newelem.style.position = "relative";
	newelem.style.opacity = 0;
	newelem.style.top = "calc(50% - (169px/2))";
	newelem.style.transform = "scale("+6*(window.innerHeight/1291)+")";
	document.getElementById("zoom").parentNode.insertBefore(newelem, document.getElementById("zoom").nextSibling);
}