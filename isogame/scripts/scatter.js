//john mcraven
//scatters assets, used for foliage

var scatterData = {
	totalElements : 0,
	entDefs : {
		env__foliage__deadgrass : {
			number : 600,
			textures : [
				"assets/tex__env__foliage__deadgrass_01.png",
				"assets/tex__env__foliage__deadgrass_02.png",
				"assets/tex__env__foliage__deadgrass_03.png",
				"assets/tex__env__foliage__deadgrass_04.png",
				"assets/tex__env__foliage__deadgrass_05.png",
			],
			resolution : [
				{x: 154, y: 123},
				{x: 115, y: 127},
				{x: 121, y: 140},
				{x:  47, y:  44},
				{x:  51, y:  27},
			],
			offset : [
				{x:  78, y:  65},
				{x:  47, y:  74},
				{x:  52, y:  62},
				{x:  20, y:  23},
				{x:  25, y:  13},
			],
			canFlip : true,
			zones : [
				"env__foliage__deadgrass_01",
				"env__foliage__deadgrass_02",
				"env__foliage__deadgrass_03",
				"env__foliage__deadgrass_04",
			],
			HTMLanchor : "grass_anchor",
		},
		env__foliage__conifer : {
			number : 600,
			textures : [
				"assets/tex__env__foliage__conifer_01.png",
				"assets/tex__env__foliage__conifer_02.png",
				"assets/tex__env__foliage__conifer_01.png",
				"assets/tex__env__foliage__conifer_02.png",
				"assets/tex__env__foliage__conifer_03.png",
				"assets/tex__env__foliage__conifer_04.png",
			],
			resolution : [
				{x: 234, y: 331},
				{x: 294, y: 403},
				{x: 234, y: 331},
				{x: 294, y: 403},
				{x: 146, y: 158},
				{x: 195, y: 313},
			],
			offset : [
				{x: 118, y: 310},
				{x: 149, y: 389},
				{x: 118, y: 310},
				{x: 149, y: 389},
				{x:  69, y: 144},
				{x: 107, y: 306},
			],
			canFlip : true,
			zones : [
				"env__foliage__conifer_01",
			],
			HTMLanchor : "trees_anchor",
		},
		env__foliage__conifer_dense : {
			number : 200,
			textures : [
				"assets/tex__env__foliage__conifer_05.png",
			],
			resolution : [
				{x: 193, y: 433},
			],
			offset : [
				{x: 98, y: 426},
			],
			canFlip : true,
			zones : [
				"env__foliage__conifer_02",
			],
			HTMLanchor : "trees_anchor",
		},
	},
}

function scatterInit() {
	var baseline = 0;
	for (var def in scatterData["entDefs"]) {
		var breakloop = 10000;
		var mins = {x:-2120, y:-1960}
		var maxs = {x:14168, y: 5168}
/* 		if (scatterData["entDefs"][def]["zones"].length > 0) { //didnt work + not much improvement lol
			mins = {x:14168, y: 5168}
			maxs = {x:-2120, y:-1960}
			for (var zone in scatterData["entDefs"][def]["zones"]) {
				var zonemins = traceConvertTexCoords(traceData["hulls"][scatterData["entDefs"][def]["zones"][zone]]["mins"], document.getElementById("world_ref"), false);
				var zonemaxs = traceConvertTexCoords(traceData["hulls"][scatterData["entDefs"][def]["zones"][zone]]["maxs"], document.getElementById("world_ref"), false);
				if (zonemins["x"] < mins["x"]) {mins["x"] = zonemins["x"];}
				if (zonemins["y"] < mins["y"]) {mins["y"] = zonemins["y"];}
				if (zonemaxs["x"] > maxs["x"]) {maxs["x"] = zonemaxs["x"];}
				if (zonemaxs["y"] > maxs["y"]) {maxs["y"] = zonemaxs["y"];}
			}
		} */
		while (scatterData["totalElements"] < (scatterData["entDefs"][def]["number"] + baseline) && breakloop > 0) {
			scatterTryAndCreateAThink({x:getRandomInt(mins["x"], maxs["x"]),y:getRandomInt(mins["y"], maxs["y"])}, def);
			breakloop--;
		}
		baseline += scatterData["entDefs"][def]["number"];
	}
}

function scatterTryAndCreateAThink(pos, def) {
	//make sure it can be here
	if (scatterData["entDefs"][def]["zones"].length > 0) {
		var canexist = false;
		for (var zone in scatterData["entDefs"][def]["zones"]) {
			if (traceEntHull(pos, document.getElementById("world_ref"), scatterData["entDefs"][def]["zones"][zone])) {
				canexist = true;
				break;
			}
		}
		if (!canexist) {return;}
	}
	//also shouldnt clip into other objects
	if (globalCollisionTrace(pos)) {return;}
	
	scatterData["totalElements"]++;
	var newelem = document.createElement("div");
	GetEntData(newelem);
	newelem.id = "generated_scatter_" + scatterData["totalElements"];
	var texnum = getRandomInt(0,scatterData["entDefs"][def]["textures"].length-1);
	newelem.style.backgroundImage = "url("+ scatterData["entDefs"][def]["textures"][texnum] +")";
	newelem.style.width  = scatterData["entDefs"][def]["resolution"][texnum]["x"] + "px";
	newelem.style.height = scatterData["entDefs"][def]["resolution"][texnum]["y"] + "px";
	newelem.dataset.origin_offsetx = scatterData["entDefs"][def]["offset"][texnum]["x"];
	newelem.dataset.origin_offsety = scatterData["entDefs"][def]["offset"][texnum]["y"];
	GetEntData(newelem)["origin"]["x"] = pos["x"];
	GetEntData(newelem)["origin"]["y"] = pos["y"];
	UpdateEntOrigin(newelem);
	if (scatterData["entDefs"][def]["canFlip"] && getRandomInt(0,1) == 1) {
		newelem.style.transform = "scaleX(-1)";
	}
	document.getElementById(scatterData["entDefs"][def]["HTMLanchor"]).parentNode.insertBefore(newelem, document.getElementById(scatterData["entDefs"][def]["HTMLanchor"]).nextSibling);
}