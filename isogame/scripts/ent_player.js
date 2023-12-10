//john mcraven
//player controller, mainly handles player movement and navigation

var playerData = {
	keyInput : {
		x : 0,
		y : 0,
	},
	keysPressed : { //avoids wasd and arrow keys doubling up inputs
		up : false,
		left : false,
		right : false,
		down : false,
	},
	goalInput : {
		x : 0,
		y : 0,
	},
	useGoalInput : false,
	pathInfo : {
		stale : true,
		primaryDir : "dir_000",
		secondaryDir : "dir_000",
		onPrimary : true,
	},
	scriptedGoalInput : false,
	scriptedGoalAnim : "player__anim_base_idle",
	locked : false,
	lockNewGoals : false,
	stuck : false,
	waypointOpacity : 0,
	hasCrowbar : false,
	showKeybindsTime : 0,
}

function playerInit() {
	addEventListener("keydown", playerInputKeyDown);
	addEventListener("keyup", playerInputKeyUp);
	addEventListener("mousedown", playerInputMouseDown);
}

var playerMinDistLastFrame;
function playerUpdate(deltaTime) {
	var player = document.getElementById("player");
	//update waypoint position
	if ((isCursorOnscreen() || playerData["useGoalInput"]) && !playerData["locked"] && (!playerData["lockNewGoals"] || playerData["useGoalInput"]) && !playerData["scriptedGoalInput"]) {
		if (playerData["useGoalInput"]) {
			GetEntData(document.getElementById("player_waypoint"))["origin"]["x"] = playerData["goalInput"]["x"];
			GetEntData(document.getElementById("player_waypoint"))["origin"]["y"] = playerData["goalInput"]["y"];
			if (!globalCollisionTrace(playerData["goalInput"])) {
				playerData["waypointOpacity"] += deltaTime * 4;
			} else {
				playerData["waypointOpacity"] = 0;
			}
		} else {
			GetEntData(document.getElementById("player_waypoint"))["origin"]["x"] = cursorPosWS["x"];
			GetEntData(document.getElementById("player_waypoint"))["origin"]["y"] = cursorPosWS["y"];
			if (!globalCollisionTrace(cursorPosWS)) {
				playerData["waypointOpacity"] += deltaTime * 4;
			} else {
				playerData["waypointOpacity"] = 0;
			}
		}
		UpdateEntOrigin(document.getElementById("player_waypoint"));
	} else {
		playerData["waypointOpacity"] = 0;
	}
	playerData["waypointOpacity"] = Clamp(playerData["waypointOpacity"], 0, 1);
	//update player direction and movement
	var newDir = false;
	var newSeq = false;
	if (playerData["useGoalInput"]) {
		//find the 2 directions that are going to make up the path
		if (playerData["pathInfo"]["stale"]) {
			var angle = calcAngle(GetEntData(player)["origin"]["x"], GetEntData(player)["origin"]["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]);
			if (angle < 0) {angle += 360};
			if (angle > 337.5) {angle -= 360}; //lol
			playerData["pathInfo"]["primaryDir"] = Math.round(angle/45)*45;
			while (playerData["pathInfo"]["primaryDir"].toString().length < 3) {playerData["pathInfo"]["primaryDir"] = "0" + playerData["pathInfo"]["primaryDir"];}
			playerData["pathInfo"]["primaryDir"] = "dir_" + playerData["pathInfo"]["primaryDir"];
			if (angle - (Math.round(angle/45)*45) > 0) {
				playerData["pathInfo"]["secondaryDir"] = (Math.round(angle/45)*45) + 45;
			} else {
				playerData["pathInfo"]["secondaryDir"] = (Math.round(angle/45)*45) - 45;
			}
			if (playerData["pathInfo"]["secondaryDir"] == 360) {playerData["pathInfo"]["secondaryDir"] = 0;}
			if (playerData["pathInfo"]["secondaryDir"] == -45) {playerData["pathInfo"]["secondaryDir"] = 315;}
			while (playerData["pathInfo"]["secondaryDir"].toString().length < 3) {playerData["pathInfo"]["secondaryDir"] = "0" + playerData["pathInfo"]["secondaryDir"];}
			playerData["pathInfo"]["secondaryDir"] = "dir_" + playerData["pathInfo"]["secondaryDir"];
			playerData["pathInfo"]["onPrimary"] = true;
			playerData["pathInfo"]["stale"] = false;
		}
		var minDist = calcDist(GetEntData(player)["origin"]["x"], GetEntData(player)["origin"]["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]);
		if (playerData["pathInfo"]["onPrimary"]) {
			newDir = playerData["pathInfo"]["primaryDir"];
			// what if we turned next frame
			var nextFrameMinDist = minDist + 20;
			var simFrame = GetEntData(player)["seqData"]["nextFrameNum"];
			var simPos = {
				x: GetEntData(player)["origin"]["x"],
				y: GetEntData(player)["origin"]["y"],
			}
			var simSeq = player.dataset.sequence;
			var simDir = playerData["pathInfo"]["primaryDir"];
			while(true) {
				//figure out root motion for frame
				if (animData[simSeq]["rootMotion"] && simFrame in animData[simSeq]["rootMotion"]) {
					var dir = Number(simDir.slice(4));
					var rootMotion = calcVectorRotate(Number(animData[simSeq]["rootMotion"][simFrame]["x"]), Number(animData[simSeq]["rootMotion"][simFrame]["y"]), dir);
					simPos["x"] += rootMotion["x"] * 1.8;
					simPos["y"] += rootMotion["y"] * 1.4;
				} else {break;}
				//see if that gets us closer
				if (calcDist(simPos["x"], simPos["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]) < nextFrameMinDist) {
					nextFrameMinDist = calcDist(simPos["x"], simPos["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]);
				} else {break;}
				//advance frame, switch anims, ect
				if (simFrame < animData[simSeq]["length"] - 1) {
					simFrame += 1;
				} else {
					if (animData[simSeq]["endBehaviour"]["loop"]) {
						simFrame = 0;
					}
					if (animData[simSeq]["endBehaviour"]["swap"]) {
						simFrame = 0;
						simSeq = animData[simSeq]["endBehaviour"]["swap"];
					}
				}
				simDir = playerData["pathInfo"]["secondaryDir"];
			}
			// what if we turned this frame
			thisFrameMinDist = minDist + 20;
			simFrame = GetEntData(player)["seqData"]["nextFrameNum"];
			simPos = {
				x: GetEntData(player)["origin"]["x"],
				y: GetEntData(player)["origin"]["y"],
			}
			simSeq = player.dataset.sequence;
			simDir = playerData["pathInfo"]["secondaryDir"];
			while(true) {
				if (animData[simSeq]["rootMotion"] && simFrame in animData[simSeq]["rootMotion"]) {
					var dir = Number(simDir.slice(4));
					var rootMotion = calcVectorRotate(Number(animData[simSeq]["rootMotion"][simFrame]["x"]), Number(animData[simSeq]["rootMotion"][simFrame]["y"]), dir);
					simPos["x"] += rootMotion["x"] * 1.8;
					simPos["y"] += rootMotion["y"] * 1.4;
				} else {break;}
				if (calcDist(simPos["x"], simPos["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]) < thisFrameMinDist) {
					thisFrameMinDist = calcDist(simPos["x"], simPos["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]);
				} else {break;}
				if (simFrame < animData[simSeq]["length"] - 1) {
					simFrame += 1;
				} else {
					if (animData[simSeq]["endBehaviour"]["loop"]) {
						simFrame = 0;
					}
					if (animData[simSeq]["endBehaviour"]["swap"]) {
						simFrame = 0;
						simSeq = animData[simSeq]["endBehaviour"]["swap"];
					}
				}
			}
			if (thisFrameMinDist < nextFrameMinDist) {
				newDir = playerData["pathInfo"]["secondaryDir"];
				playerData["pathInfo"]["onPrimary"] = false;
			}
		} else {
			newDir = playerData["pathInfo"]["secondaryDir"];
			//advance one frame, if we would start getting further away at that point then stop
			var simFrame = GetEntData(player)["seqData"]["nextFrameNum"];
			var simPos = {
				x: GetEntData(player)["origin"]["x"],
				y: GetEntData(player)["origin"]["y"],
			}
			var simSeq = player.dataset.sequence;
			var simDir = playerData["pathInfo"]["secondaryDir"];
			if (animData[simSeq]["rootMotion"] && simFrame in animData[simSeq]["rootMotion"]) {
				var dir = Number(simDir.slice(4));
				var rootMotion = calcVectorRotate(Number(animData[simSeq]["rootMotion"][simFrame]["x"]), Number(animData[simSeq]["rootMotion"][simFrame]["y"]), dir);
				simPos["x"] += rootMotion["x"] * 1.8;
				simPos["y"] += rootMotion["y"] * 1.4;
				if (calcDist(simPos["x"], simPos["y"], playerData["goalInput"]["x"], playerData["goalInput"]["y"]) > minDist) {
					newDir = false;
				}
			}
		}
		//if we are already actually there then stop the path right away
		if((GetEntData(player)["seqData"]["curSeq"] == "player__anim_base_walkstart" || GetEntData(player)["seqData"]["curSeq"] == "player__anim_base_walk"
		|| GetEntData(player)["seqData"]["curSeq"] == "player__anim_crowbar_walkstart" || GetEntData(player)["seqData"]["curSeq"] == "player__anim_crowbar_walk")
		&& Math.round(GetEntData(player)["origin"]["x"]) == Math.round(playerData["goalInput"]["x"]) && Math.round(GetEntData(player)["origin"]["y"]) == Math.round(playerData["goalInput"]["y"])) {
			newDir = false;
		} else if (Math.round(GetEntData(player)["origin"]["x"]) == Math.round(playerData["goalInput"]["x"]) && Math.round(GetEntData(player)["origin"]["y"]) == Math.round(playerData["goalInput"]["y"])) {
			newDir = player.dataset.sequence_direction;
		}
	} else {
		//probably a lot of way better ways to do this but cant be bothered
		if (playerData["keyInput"]["x"] == 0 && playerData["keyInput"]["y"] ==-1) {newDir = "dir_000";}
		if (playerData["keyInput"]["x"] ==-1 && playerData["keyInput"]["y"] ==-1) {newDir = "dir_045";}
		if (playerData["keyInput"]["x"] ==-1 && playerData["keyInput"]["y"] == 0) {newDir = "dir_090";}
		if (playerData["keyInput"]["x"] ==-1 && playerData["keyInput"]["y"] == 1) {newDir = "dir_135";}
		if (playerData["keyInput"]["x"] == 0 && playerData["keyInput"]["y"] == 1) {newDir = "dir_180";}
		if (playerData["keyInput"]["x"] == 1 && playerData["keyInput"]["y"] == 1) {newDir = "dir_225";}
		if (playerData["keyInput"]["x"] == 1 && playerData["keyInput"]["y"] == 0) {newDir = "dir_270";}
		if (playerData["keyInput"]["x"] == 1 && playerData["keyInput"]["y"] ==-1) {newDir = "dir_315";}
		if (newDir) {playerData["waypointOpacity"] = 0};
	}
	if (newDir && !playerData["locked"] && !playerData["stuck"] || playerData["stuck"] != newDir) {
		playerData["stuck"] = false;
		if ((!("sequence_direction" in player.dataset) || player.dataset.sequence_direction != newDir) && newDir && !playerData["locked"]) {player.dataset.sequence_direction = newDir;}
		if (!("sequence" in player.dataset)) {
			newSeq = "player__anim_base_walkstart";
		} else if (player.dataset.sequence != "player__anim_base_walkstart" && player.dataset.sequence != "player__anim_base_walk"
			&& player.dataset.sequence != "player__anim_crowbar_walkstart" && player.dataset.sequence != "player__anim_crowbar_walk") {
			newSeq = "player__anim_base_walkstart";
		}
	} else if (!("sequence" in player.dataset) || (player.dataset.sequence == "player__anim_base_walkstart" || player.dataset.sequence == "player__anim_base_walk" 
		|| player.dataset.sequence == "player__anim_crowbar_walkstart" || player.dataset.sequence == "player__anim_crowbar_walk")) {
		if (playerData["scriptedGoalInput"]) {
			newSeq = playerData["scriptedGoalAnim"];
		} else {
			newSeq = "player__anim_base_idle_step";
		}
		playerData["waypointOpacity"] = 0;
		if (playerData["useGoalInput"] || playerData["scriptedGoalInput"]) {
			playerData["useGoalInput"] = false;
			playerData["scriptedGoalInput"] = false;
			GetEntData(player)["origin"]["x"] = playerData["goalInput"]["x"];
			GetEntData(player)["origin"]["y"] = playerData["goalInput"]["y"];
			UpdateEntOrigin(player);
		}
	}
	SetEntOpacity(document.getElementById("player_waypoint"), Math.round(playerData["waypointOpacity"] * 4) / 4);
	//sequence remap for crowbar
	if (!playerData["locked"]) {
		if (newSeq && playerData["hasCrowbar"]) {
			player.dataset.sequence = newSeq.replace("player__anim_base", "player__anim_crowbar");
		} else if (newSeq) {
			player.dataset.sequence = newSeq;
		}
	}
	
	//if we arent using goal locomotion then manually swap in the anim and skip the slow windup
	if (newSeq == "player__anim_base_walkstart" && entData["entities"][player.dataset.ent_index]["seqData"]["curSeq"] != player.dataset.sequence) {
		entData["entities"][player.dataset.ent_index]["seqData"]["curSeq"] = player.dataset.sequence;
		entData["entities"][player.dataset.ent_index]["seqData"]["nextFrameNum"] = 4;
	}
	
	//update keybind text
	playerData["showKeybindsTime"] = Clamp(playerData["showKeybindsTime"] - deltaTime, 0, 100);
	document.getElementById("controls").style.opacity = Math.round(Clamp(playerData["showKeybindsTime"], 0, 1) * 10) / 10;
	if (playerData["showKeybindsTime"] > 0) {
		document.getElementById("controls").style.display = "block";
	} else {
		document.getElementById("controls").style.display = "none";
	}
}

function playerInputKeyDown(e) {
	if (playerData["locked"]) {return;}
	if ((e.keyCode == 87 || e.keyCode == 38) && !playerData["keysPressed"]["up"]) { //w or up arrow
		playerData["keyInput"]["y"] += 1;
		playerData["keysPressed"]["up"] = true;
		playerData["useGoalInput"] = false;
		playerData["scriptedGoalInput"] = false;
	}
	if ((e.keyCode == 83 || e.keyCode == 40) && !playerData["keysPressed"]["down"]) { //s or down arrow
		playerData["keyInput"]["y"] -= 1;
		playerData["keysPressed"]["down"] = true;
		playerData["useGoalInput"] = false;
		playerData["scriptedGoalInput"] = false;
	}
	if ((e.keyCode == 68 || e.keyCode == 39) && !playerData["keysPressed"]["right"]) { //d or right arrow
		playerData["keyInput"]["x"] += 1;
		playerData["keysPressed"]["right"] = true;
		playerData["useGoalInput"] = false;
		playerData["scriptedGoalInput"] = false;
	}
	if ((e.keyCode == 65 || e.keyCode == 37) && !playerData["keysPressed"]["left"]) { //a or left arrow
		playerData["keyInput"]["x"] -= 1;
		playerData["keysPressed"]["left"] = true;
		playerData["useGoalInput"] = false;
		playerData["scriptedGoalInput"] = false;
	}
	playerData["keyInput"]["x"] = Clamp(playerData["keyInput"]["x"], -1, 1);
	playerData["keyInput"]["y"] = Clamp(playerData["keyInput"]["y"], -1, 1);
}

function playerInputKeyUp(e) {
	if ((e.keyCode == 87 || e.keyCode == 38) && playerData["keysPressed"]["up"]) { //w or up arrow
		playerData["keyInput"]["y"] -= 1;
		playerData["keysPressed"]["up"] = false;
	}
	if ((e.keyCode == 83 || e.keyCode == 40) && playerData["keysPressed"]["down"]) { //s or down arrow
		playerData["keyInput"]["y"] += 1;
		playerData["keysPressed"]["down"] = false;
	}
	if ((e.keyCode == 68 || e.keyCode == 39) && playerData["keysPressed"]["right"]) { //d or right arrow
		playerData["keyInput"]["x"] -= 1;
		playerData["keysPressed"]["right"] = false;
	}
	if ((e.keyCode == 65 || e.keyCode == 37) && playerData["keysPressed"]["left"]) { //a or left arrow
		playerData["keyInput"]["x"] += 1;
		playerData["keysPressed"]["left"] = false;
	}
	playerData["keyInput"]["x"] = Clamp(playerData["keyInput"]["x"], -1, 1);
	playerData["keyInput"]["y"] = Clamp(playerData["keyInput"]["y"], -1, 1);
}

function playerInputMouseDown(e) {
	if (!isCursorOnscreen()) {return;}
	if (playerData["locked"]) {return;}
	if (playerData["lockNewGoals"]) {return;}
	if (e.button == 0) {
		if (globalCollisionTrace(cursorPosWS)) {return;}
		playerData["goalInput"]["x"] = cursorPosWS["x"];
		playerData["goalInput"]["y"] = cursorPosWS["y"];
		playerData["pathInfo"]["stale"] = true;
		playerData["useGoalInput"] = true;
		playerData["scriptedGoalInput"] = false;
	}
}