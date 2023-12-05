//john mcraven
//handles transforming the main game div to simulate camera movement
var camData = {
	position : { //relative to top left of game div, screen should center to this
		x : 0,
		y : 0,
	},
	zoom : 1,
	realScale : 1,
	drag : false,
	holdingCtrl : false,
	locked : false,
	dontUpdatePosNextFrame : false, //lazy fix for a bug while trying to zoom while dragging, at the cost of 14ms of input delay in that scenario
}
var camInitialPosSet = false

function camInit() {
	addEventListener("wheel", camInputZoom);
	addEventListener("mousedown", camInputMouseDown);
	addEventListener("mouseup", camInputMouseUp);
	addEventListener("keydown", camInputKeyDown);
	addEventListener("keyup", camInputKeyUp);
}

function camUpdate() {
	//var debugmsg = ""
	
	if (!camInitialPosSet) {
		camData["position"]["x"] = GetEntData(document.getElementById("player"))["origin"]["x"];
		camData["position"]["y"] = GetEntData(document.getElementById("player"))["origin"]["y"] - 10;
		camData["zoom"] = 0.1;
	}
	if (camData["drag"] && !camData["locked"]) {
		//middle mouse dragging
		//debugmsg += "dragging camera";
		camData["position"]["x"] = camData["dragData"]["positionAnchor"]["x"] - (cursorPos["x"] - camData["dragData"]["cursorPosAnchor"]["x"]) / camData["realScale"];
		camData["position"]["y"] = camData["dragData"]["positionAnchor"]["y"] - (cursorPos["y"] - camData["dragData"]["cursorPosAnchor"]["y"]) / camData["realScale"];
	} /* else if (isCursorOnscreen() && (cursorPos["x"] > window.innerWidth * 0.9 || cursorPos["x"] < window.innerWidth * 0.1 || cursorPos["y"] > window.innerHeight * 0.9 || cursorPos["y"] < window.innerHeight * 0.1)) {
		//screen edge pulling
		debugmsg += "pushing camera";
		var offsetX = cursorPos["x"] - (window.innerWidth * 0.5);
		var offsetY = cursorPos["y"] - (window.innerHeight * 0.5);
		var length = Math.sqrt((offsetX * offsetX) + (offsetY * offsetY));
		offsetX = offsetX / Math.abs(length);
		offsetY = offsetY / Math.abs(length);
		debugmsg += "<br/>x: "+offsetX.toFixed(2)+" y: "+offsetY.toFixed(2)+" length:"+length.toFixed(2);
		camData["position"]["x"] += (offsetX * 6) / camData["zoom"];
		camData["position"]["y"] += (offsetY * 6) / camData["zoom"];
	} */
	
	//apply camera position
	var x = (window.innerWidth * 0.5) - camData["position"]["x"];
	var y = (window.innerHeight * 0.5) - camData["position"]["y"];
	var windowScaleFactor = ((window.innerWidth * 0.5) + (window.innerHeight * 0.5)) / 1425.5; //scale to roughly match sizing on a 1920x1080 monitor
	var scale = camData["zoom"] * Clamp(windowScaleFactor, 0.2, 3);
	camData["realScale"] = scale;
	if (!camData["dontUpdatePosNextFrame"]) {
		document.getElementById("game").style.transform = "translate(" + x + "px, " + y + "px)";
		document.getElementById("zoom").style.transform = "scale("+scale+")";
	} else {camData["dontUpdatePosNextFrame"] = false;}
	if (!camInitialPosSet) {
		camData["zoom"] = 4;
		camInitialPosSet = true;
	}
	
	//debug
	//debugmsg += "<br/>x: " + camData["position"]["x"].toFixed(2) + "<br/>y: " + camData["position"]["y"].toFixed(2) + "<br/>zoom: " + camData["zoom"].toFixed(2);
	//setMessage(debugmsg);
}

function camInputZoom(e) {
	//dont zoom if the user is resizing the page using ctrl+mousewheel
	if (camData["holdingCtrl"]) {return;}
	if (camData["locked"]) {return;}
	
	var newZoom = Clamp(camData["zoom"] + (-e.deltaY / 1000) * camData["zoom"], 0.3, 15);
	//zoom should center around the cursor, so update the cam coords
	var cursorPosCustom = cursorPos;
	if (camData["drag"] && "dragData" in camData) {
		cursorPosCustom = camData["dragData"]["cursorPosAnchor"];
	}
	var windowScaleFactor =  Clamp(((window.innerWidth * 0.5) + (window.innerHeight * 0.5)) / 1425.5, 0.2, 3);
    var diff = (window.innerWidth / (camData["zoom"] * windowScaleFactor)) - (window.innerWidth / (newZoom * windowScaleFactor));
    var ratio = (cursorPosCustom["x"] - (window.innerWidth * 0.5)) / window.innerWidth;
	if (camData["drag"] && "dragData" in camData) {
		camData["dragData"]["positionAnchor"]["x"] += diff * ratio;
	} else {
		camData["position"]["x"] += diff * ratio;
	}
    var diff = (window.innerHeight / (camData["zoom"] * windowScaleFactor)) - (window.innerHeight / (newZoom * windowScaleFactor));
    var ratio = (cursorPosCustom["y"] - (window.innerHeight * 0.5)) / window.innerHeight;
	if (camData["drag"] && "dragData" in camData) {
		camData["dragData"]["positionAnchor"]["y"] += diff * ratio;
		camData["dontUpdatePosNextFrame"] = true;
	} else {
		camData["position"]["y"] += diff * ratio;
	}
	
	camData["zoom"] = newZoom;
}

function camInputMouseDown(e) {
	if (!isCursorOnscreen()) {return;}
	camData["drag"] = e.button == 1;
	if (camData["drag"]) {
		camData["dragData"] = {};
		camData["dragData"]["cursorPosAnchor"] = {};
		camData["dragData"]["cursorPosAnchor"]["x"] = cursorPos["x"];
		camData["dragData"]["cursorPosAnchor"]["y"] = cursorPos["y"];
		camData["dragData"]["positionAnchor"] = {};
		camData["dragData"]["positionAnchor"]["x"] = camData["position"]["x"];
		camData["dragData"]["positionAnchor"]["y"] = camData["position"]["y"];
	}
}

function camInputMouseUp(e) {
	if (e.button == 1) {camData["drag"] = false;}
}

function camInputKeyDown(e) {
	camData["holdingCtrl"] = e.keyCode == 17;
}

function camInputKeyUp(e) {
	if (e.keyCode == 17) {camData["holdingCtrl"] = false};
}