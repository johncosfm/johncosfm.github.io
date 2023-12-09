//john mcraven
//handles switching between game scenes

var worldsData = {
	currentWorld : "overworld",
	goalWorld : "overworld",
	inTransition : false,
	fade : 0,
	worlds : {
		overworld : {
			playerStart : {
				x : 7629,
				y : 1542,
				dir : "dir_045",
			},
			cameraStart : {
				x : 7629,
				y : 1471,
				zoom : 2.3,
			},
		},
		shopfloor : {
			playerStart : {
				x : 576,
				y : 725,
				dir : "dir_225",
			},
			cameraStart : {
				x : 584,
				y : 631,
				zoom : 3.5,
			},
		},
		orbvoid : {
			playerStart : {
				x : 207,
				y : 290,
				dir : "dir_135",
			},
			cameraStart : {
				x : 186,
				y : 217,
				zoom : 3.5,
			},
		},
	},
}

function setWorld(newWorld) {
	worldsData["currentWorld"] = newWorld;
	//update visibility
	for (var world in worldsData["worlds"]) {
		if (world == newWorld) {
			document.getElementById(world).style.display = "block";
		} else {
			document.getElementById(world).style.display = "none";
		}
	}
	//restart sounds
	soundStop();
	soundInit();
	//move elements
	document.getElementById(newWorld).appendChild(document.getElementById("player"));
	document.getElementById(newWorld).appendChild(document.getElementById("player_waypoint"));
	for (var i = 0; i < GetEntData(document.getElementById("player_waypoint"))["children"].length; i++) {
		document.getElementById(newWorld).appendChild(entData["entities"][GetEntData(document.getElementById("player_waypoint"))["children"][i]]["htmlElement"]);
	}
	//update player and camera positions
	GetEntData(document.getElementById("player"))["origin"]["x"] = worldsData["worlds"][newWorld]["playerStart"]["x"];
	GetEntData(document.getElementById("player"))["origin"]["y"] = worldsData["worlds"][newWorld]["playerStart"]["y"];
	UpdateEntOrigin(document.getElementById("player"));
	document.getElementById("player").dataset.sequence_direction = worldsData["worlds"][newWorld]["playerStart"]["dir"];
	if (playerData['hasCrowbar']) {
		document.getElementById("player").dataset.sequence = "player__anim_crowbar_idle";
	} else {
		document.getElementById("player").dataset.sequence = "player__anim_base_idle";
	}
	GetEntData(document.getElementById("player"))["seqData"]["nextFrameTime"] = 0;
	camData["position"]["x"] = worldsData["worlds"][newWorld]["cameraStart"]["x"];
	camData["position"]["y"] = worldsData["worlds"][newWorld]["cameraStart"]["y"];
	camData["zoom"] = worldsData["worlds"][newWorld]["cameraStart"]["zoom"];
	
	playerData["useGoalInput"] = false;
	setMessage("");
	
	//game specific hacky stuff
	if (newWorld == "overworld") {
		gasstationData["doorOpen"] = false;
	}
	if (newWorld == "shopfloor") {
		if (!gasstationData["messages"]["entered"]) {
			gasstationData["messages"]["entered"] = true;
			var message = "There's an awful smell like something died in here. At least it's relativley warm, I would have frozen to death if I had stayed outside much longer.";
			setMessage(message);
			setTimeout(() => {if (curMsg == message) {
				setMessage("");
			}}, 6000);
		}
	}
	if (newWorld == "orbvoid") {
		playSoundEvent("snd__ambient__broomcloset_fakeout");
		setTimeout(() => {playerData["locked"] = true; playerData["useGoalInput"] = false; document.getElementById("player").dataset.sequence = "player__anim_cin04_headache_action"}, 2000);
	}
}

function worldsUpdate(deltaTime) {
	if (worldsData["currentWorld"] != worldsData["goalWorld"]) {
		worldsData["inTransition"] = true;
		playerData["locked"] = true;
		camData["locked"] = true;
		worldsData["fade"] = Clamp(worldsData["fade"] + (deltaTime / 0.2), 0, 1);
		if (worldsData["fade"] == 1) {
			setWorld(worldsData["goalWorld"]);
		}
	} else {
		worldsData["fade"] = Clamp(worldsData["fade"] - (deltaTime / 0.2), 0, 1);
		if (worldsData["fade"] == 0 && worldsData["inTransition"]) {
			worldsData["inTransition"] = false;
			playerData["locked"] = false;
			camData["locked"] = false;
		}
	}
	if (worldsData["inTransition"] || worldsData["fade"] > 0) {
		document.getElementById("screenfade").style.display = "block";
	} else {
		document.getElementById("screenfade").style.display = "none";
	}
	document.getElementById("screenfade").style.opacity = Math.round(worldsData["fade"] * 10) / 10;
}