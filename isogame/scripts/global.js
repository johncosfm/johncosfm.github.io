//john mcraven
//globals that need to be accessed by multiple different scripts and generic functions

var entData = { //data for and about entities (which are just html elements)
	entCount : 0,
	entities : {},
}

function globalInit() {
	addEventListener("mousemove", globalInputMousemove);
	//set ent origin offsets
	var elem = document.getElementsByTagName("*");
	for (var i=0, max=elem.length; i < max; i++) {
		if ("origin_x" in elem[i].dataset) {GetEntData(elem[i])["origin"]["x"] = Number(elem[i].dataset.origin_x); UpdateEntOrigin(elem[i]);}
		if ("origin_y" in elem[i].dataset) {GetEntData(elem[i])["origin"]["y"] = Number(elem[i].dataset.origin_y); UpdateEntOrigin(elem[i]);}
		if(("origin_offsetx" in elem[i].dataset) || ("origin_offsety" in elem[i].dataset)) {
			GetEntData(elem[i]);
			UpdateEntOrigin(elem[i]);
		}
	}
}

function GetEntData(elem) {
	if (!("ent_index" in elem.dataset)) {
		entData["entCount"] += 1; 
		entData["entities"][entData["entCount"]] = { //new ents get this template assigned
			id : "",
			seqData : {},
			htmlElement : elem,
			origin : {
				x : 0,
				y : 0,
			},
			children : [],
		};
		elem.dataset.ent_index = entData["entCount"];
		entData["entities"][elem.dataset.ent_index]["id"] = elem.id;
	}
	return entData["entities"][elem.dataset.ent_index];
}

function UpdateEntOrigin(elem) {
	var offsetX = 0;
	var offsetY = 0;
	if ("origin_offsetx" in elem.dataset) {offsetX = elem.dataset.origin_offsetx;}
	if ("origin_offsety" in elem.dataset) {offsetY = elem.dataset.origin_offsety;}
	elem.style.left = (entData["entities"][elem.dataset.ent_index]["origin"]["x"] - offsetX) + "px";
	elem.style.top =  (entData["entities"][elem.dataset.ent_index]["origin"]["y"] - offsetY) + "px";
	//also need to update the origin of child entities
	for (var i = 0; i < entData["entities"][elem.dataset.ent_index]["children"].length; i++) {
		entData["entities"][entData["entities"][elem.dataset.ent_index]["children"][i]]["origin"]["x"] = entData["entities"][elem.dataset.ent_index]["origin"]["x"];
		entData["entities"][entData["entities"][elem.dataset.ent_index]["children"][i]]["origin"]["y"] = entData["entities"][elem.dataset.ent_index]["origin"]["y"];
		UpdateEntOrigin(entData["entities"][entData["entities"][elem.dataset.ent_index]["children"][i]]["htmlElement"]);
	}
}

function SetEntOpacity(elem, o) { //need a function for this cause the kids need it set too
	elem.style.opacity = o;
	for (var i = 0; i < GetEntData(elem)["children"].length; i++) {
		entData["entities"][entData["entities"][elem.dataset.ent_index]["children"][i]]["htmlElement"].style.opacity = o;
	}
}

function CurTime() {
	return Date.now() / 1000;
}

var precacheList = []
function PrecacheUrl(src) {
	if (!document.getElementById("generated_precache")) {
		var newelem = document.createElement("div");
		newelem.id = "generated_precache";
		newelem.style.width = 0;
		newelem.style.height = 0;
		newelem.style.overflow = "hidden";
		newelem.style.content = "";
		
		document.getElementById("game").parentNode.insertBefore(newelem, document.getElementById("game").nextSibling);
	}
	if (!precacheList.includes(src)) {
		precacheList.push(src);
		document.getElementById("generated_precache").style.content += " url(" + src + ")"
	}
}

function Clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}

var cursorPos = {
	x : 0,
	y : 0,
}
var cursorPosWS = {
	x : 0,
	y : 0,
}
var cursorHasMovedAtLeastOnce = false;
function globalInputMousemove(e) {
	cursorPos["x"] = e.clientX;
	cursorPos["y"] = e.clientY;
	var rect = document.getElementById("game").getBoundingClientRect()
	cursorPosWS["x"] = (e.clientX - rect.left)/ camData["realScale"];
	cursorPosWS["y"] = (e.clientY - rect.top) / camData["realScale"];
	cursorHasMovedAtLeastOnce = true;
}

var curMsg = "";
function setMessage(msg) {
	if (msg != curMsg) {
		document.getElementById("msg").innerHTML = "<span>" + msg + "</span>";
		curMsg = msg;
	}
}

function isCursorOnscreen() {
	return document.getElementById("body").matches(':hover') && cursorHasMovedAtLeastOnce;
}

function calcAngle(x1, y1, x2, y2) {
	var rotated1 = calcVectorRotate(x1, y1, -90);
	var rotated2 = calcVectorRotate(x2, y2, -90);
	x1 = rotated1["x"];
	y1 = rotated1["y"];
	x2 = rotated2["x"];
	y2 = rotated2["y"];
	return ((Math.atan2((y2 - y1), (x2 - x1)) * 180) / Math.PI);
}

function calcVectorRotate(x, y, ang) {
    ang = ang * (Math.PI/180);
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    return {
		x : x * cos - y * sin,
		y : x * sin + y * cos,
	};
}

function calcDist(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

var audioElements = {};
function PrecacheSound(asset) {
	audioElements[asset] = new Audio(asset);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function texToWorldSpace(pos, ent) {
	var rect = ent.getBoundingClientRect();
	var globalrect = document.getElementById("game").getBoundingClientRect()
	return {
		x: ((rect.left - globalrect.left) / camData["realScale"]) + pos["x"],
		y: ((rect.top - globalrect.top) / camData["realScale"]) + pos["y"]
	};
}