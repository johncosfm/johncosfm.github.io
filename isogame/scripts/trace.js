//john mcraven
//handles tracing hulls, used for collision and interaction

var traceData = {
	hulls : {
		env__carwreck : {
			points : [
				{x: -18, y: 145},
				{x:  24, y: 233},
				{x:  74, y: 252},
				{x: 334, y: 150},
				{x: 332, y: 123},
				{x: 260, y:  60},
				{x: 237, y:  57},
			],
			mins : {x: -18, y:  57},
			maxs : {x: 334, y: 252},
			closeup : false,
		},
		env__carwreck_trunk_closed : {
			points : [
				{x: 228, y:  44},
				{x: 245, y:  58},
				{x: 254, y:  69},
				{x: 266, y:  86},
				{x: 271, y:  96},
				{x: 272, y: 103},
				{x: 279, y: 101},
				{x: 313, y:  88},
				{x: 318, y:  88},
				{x: 304, y:  70},
				{x: 291, y:  55},
				{x: 269, y:  36},
				{x: 261, y:  36},
				{x: 234, y:  42},
			],
			mins : {x: 228, y:  36},
			maxs : {x: 313, y: 103},
			closeup : false,
		},
		env__gas_station : {
			points : [
				{x:  78, y: 655},
				{x: 204, y: 755},
				{x: 152, y: 767},
				{x: 195, y: 782},
				{x: 632, y:1107},
				{x: 656, y:1105},
				{x: 669, y:1095},
				{x: 989, y:1337},
				{x:1022, y:1339},
				{x:1268, y:1151},
				{x:1281, y:1127},
				{x:1453, y: 996},
				{x:1449, y: 979},
				{x: 522, y: 355},
				{x:  84, y: 635},
			],
			mins : {x:  78, y: 355},
			maxs : {x:1449, y:1339},
			closeup : false,
		},
		env__gas_station_trigger_stairs : {
			points : [
				{x:  59, y: 659},
				{x: 124, y: 721},
				{x: 163, y: 683},
				{x: 102, y: 634},
			],
			mins : {x:  59, y: 634},
			maxs : {x: 163, y: 721},
			closeup : false,
		},
		env__gas_station_trigger_backside : {
			points : [
				{x:1240, y: 994},
				{x:1905, y: 990},
				{x:1861, y: 570},
				{x:1074, y:  73},
				{x: 483, y: 205},
			],
			mins : {x: 483, y:  73},
			maxs : {x:1905, y: 994},
			closeup : false,
		},
		env__gas_station_door_interact : {
			points : [
				{x:  76, y:  24},
				{x:  81, y: 120},
				{x: 123, y: 160},
				{x: 127, y:  55},
			],
			mins : {x:  76, y:  24},
			maxs : {x: 127, y: 160},
			closeup : false,
		},
		env__gas_station_int_base : {
			points : [
				{x: 591, y: 759},
				{x:  44, y: 370},
				{x: 231, y: 236},
				{x: 227, y: 216},
				{x: 242, y: 204},
				{x: 320, y: 253},
				{x: 364, y: 226},
				{x: 488, y: 314},
				{x: 522, y: 320},
				{x: 567, y: 350},
				{x: 586, y: 355},
				{x: 634, y: 394},
				{x: 652, y: 392},
				{x: 832, y: 521},
				{x: 841, y: 522},
				{x: 868, y: 504},
				{x: 914, y: 534},
				{x: 592, y: 759},
				{x: 592, y: 991},
				{x:1141, y: 991},
				{x:1141, y:-196},
				{x:-159, y:-196},
				{x:-159, y: 991},
				{x: 591, y: 991},
			],
			mins : {x:-159, y:-196},
			maxs : {x:1141, y: 991},
			closeup : false,
		},
		env__gas_station_int_base_2 : {
			points : [
				{x: 522, y: 758},
				{x: 674, y: 758},
				{x: 674, y: 991},
				{x: 522, y: 991},
			],
			mins : {x: 522, y: 758},
			maxs : {x: 674, y: 991},
			closeup : false,
		},
		env__gas_station_int_layer1 : {
			points : [
				{x: 264, y: 341},
				{x: 340, y: 395},
				{x: 339, y: 413},
				{x: 371, y: 435},
				{x: 395, y: 422},
				{x: 398, y: 414},
				{x: 450, y: 379},
				{x: 337, y: 310},
			],
			mins : {x: 264, y: 310},
			maxs : {x: 450, y: 435},
			closeup : false,
		},
		env__gas_station_int_layer1_sort : {
			points : [
				{x: 275, y: 340},
				{x: -30, y: 340},
				{x: -30, y: -30},
				{x: 945, y: -30},
				{x: 945, y: 380},
				{x: 438, y: 380},
			],
			mins : {x: -30, y: -30},
			maxs : {x: 945, y: 380},
			closeup : false,
		},
		env__gas_station_int_layer2 : {
			points : [
				{x: 134, y: 375},
				{x: 134, y: 383},
				{x: 156, y: 401},
				{x: 161, y: 402},
				{x: 254, y: 466},
				{x: 226, y: 483},
				{x: 268, y: 511},
				{x: 295, y: 491},
				{x: 295, y: 483},
				{x: 345, y: 447},
				{x: 345, y: 442},
				{x: 197, y: 344},
			],
			mins : {x: 134, y: 344},
			maxs : {x: 345, y: 511},
			closeup : false,
		},
		env__gas_station_int_layer2_sort : {
			points : [
				{x: 140, y: 383},
				{x: -30, y: 383},
				{x: -30, y: -30},
				{x: 945, y: -30},
				{x: 945, y: 450},
				{x: 330, y: 450},
			],
			mins : {x: -30, y: -30},
			maxs : {x: 945, y: 450},
			closeup : false,
		},
		env__gas_station_int_layer3 : {
			points : [
				{x: 472, y: 406},
				{x: 805, y: 648},
				{x: 866, y: 602},
				{x: 527, y: 367},
			],
			mins : {x: 472, y: 406},
			maxs : {x: 866, y: 648},
			closeup : false,
		},
		env__gas_station_int_layer3_sort : {
			points : [
				{x: 491, y: 411},
				{x: -30, y: 411},
				{x: -30, y: -30},
				{x: 945, y: -30},
				{x: 945, y: 608},
				{x: 824, y: 608},
			],
			mins : {x: -30, y: -30},
			maxs : {x: 945, y: 608},
			closeup : false,
		},
		env__gas_station_int_layer4 : {
			points : [
				{x: 349, y: 524},
				{x: 349, y: 530},
				{x: 465, y: 612},
				{x: 453, y: 622},
				{x: 489, y: 649},
				{x: 558, y: 602},
				{x: 584, y: 603},
				{x: 585, y: 553},
				{x: 562, y: 553},
				{x: 432, y: 465},
			],
			mins : {x: 349, y: 465},
			maxs : {x: 585, y: 649},
			closeup : false,
		},
		env__gas_station_int_layer4_sort : {
			points : [
				{x: 362, y: 530},
				{x: -30, y: 530},
				{x: -30, y: -30},
				{x: 945, y: -30},
				{x: 945, y: 592},
				{x: 576, y: 592},
			],
			mins : {x: -30, y: -30},
			maxs : {x: 945, y: 592},
			closeup : false,
		},
		closeup__carwreck_trunk__crowbar : {
			points : [
				{x: 119, y:  83},
				{x: 117, y:  83},
				{x: 112, y:  84},
				{x: 109, y:  85},
				{x: 104, y:  87},
				{x:  99, y:  90},
				{x:  95, y:  92},
				{x:  92, y:  98},
				{x:  93, y: 103},
				{x:  97, y: 106},
				{x: 104, y: 108},
				{x: 186, y: 130},
				{x: 191, y: 132},
				{x: 195, y: 135},
				{x: 199, y: 137},
				{x: 212, y: 143},
				{x: 212, y: 141},
				{x: 207, y: 136},
				{x: 198, y: 130},
				{x: 192, y: 127},
				{x: 105, y: 105},
				{x: 100, y: 103},
				{x:  98, y: 101},
				{x:  98, y:  98},
				{x: 100, y:  94},
				{x: 104, y:  91},
				{x: 111, y:  89},
				{x: 113, y:  88},
				{x: 116, y:  88},
				{x: 120, y:  87},
				{x: 121, y:  86},
				{x: 120, y:  85},
			],
			mins : {x:  92, y:  83},
			maxs : {x: 212, y: 143},
			closeup : true,
		},
		closeup__carwreck_trunk__exit_inv : {
			points : [
				{x:   0, y:  26},
				{x:   0, y: 169},
				{x: 300, y: 169},
				{x: 300, y:   0},
				{x:  19, y:   0},
				{x:  22, y:   7},
			],
			mins : {x:   0, y:   0},
			maxs : {x: 300, y: 169},
			closeup : true,
		},
		closeup__gasstation_door__boards_1 : {
			points : [
				{x:  43, y:  73},
				{x:  45, y:  81},
				{x:  47, y:  83},
				{x:  48, y:  93},
				{x: 116, y:  87},
				{x: 186, y:  77},
				{x: 203, y:  72},
				{x: 221, y:  72},
				{x: 246, y:  68},
				{x: 243, y:  46},
				{x: 149, y:  58},
				{x: 107, y:  65},
				{x:  65, y:  70},
			],
			mins : {x:  43, y:  46},
			maxs : {x: 246, y: 144},
			closeup : true,
		},
		closeup__gasstation_door__boards_2 : {
			points : [
				{x:  48, y: 106},
				{x:  49, y: 118},
				{x:  48, y: 124},
				{x:  63, y: 127},
				{x: 131, y: 134},
				{x: 172, y: 137},
				{x: 209, y: 141},
				{x: 242, y: 144},
				{x: 241, y: 121},
				{x: 201, y: 118},
				{x: 158, y: 113},
				{x:  82, y: 110},
				{x:  72, y: 108},
				{x:  57, y: 107},
			],
			mins : {x:  43, y:  46},
			maxs : {x: 246, y: 144},
			closeup : true,
		},
		closeup__gasstation_door__exit_inv : {
			points : [
				{x:   0, y:   0},
				{x:   0, y: 169},
				{x: 300, y: 169},
				{x: 300, y:   0},
			],
			mins : {x:   0, y:   0},
			maxs : {x: 300, y: 169},
			closeup : true,
		},
	},
}

function globalCollisionTrace(pos) {
	for (var i = 1, max = entData["entCount"] + 1; i < max; i++) {
		if (traceEnt(pos, entData["entities"][i]["htmlElement"])) {return true;}
	}
	return false;
}

function traceEnt(pos, ent) {
	if (!("collision" in ent.dataset)) {return false;}
	return traceEntHull(pos, ent, ent.dataset.collision);
}

function traceEntHull(pos, ent, hull) {
	hull = traceData["hulls"][hull];
	if (!hull["closeup"] && ent.parentElement.id != worldsData["currentWorld"]) {return;}
	var mins = traceConvertTexCoords(hull["mins"], ent, hull["closeup"]);
	var maxs = traceConvertTexCoords(hull["maxs"], ent, hull["closeup"]);
	if (pos["x"] < mins["x"] || pos["x"] > maxs["x"] || pos["y"] < mins["y"] || pos["y"] > maxs["y"]) {return false;}
	var hits = 0;
	var loopback = 0;
	for (var i = 0, max = hull["points"].length; i < max; i++) {
		if (hull["points"][i] == "BREAK") {
			loopback = i+1;
			continue;
		}
		var b1 = traceConvertTexCoords(hull["points"][i], ent, hull["closeup"]);
		var b2;
		if (i + 1 < max) {
			if (hull["points"][i+1] == "BREAK") {continue;}
			b2 = traceConvertTexCoords(hull["points"][i+1], ent, hull["closeup"]);
		} else {
			b2 = traceConvertTexCoords(hull["points"][loopback], ent, hull["closeup"]);
		}
		if (doLinesIntersect(mins["x"] - 100, mins["y"] - 100, pos["x"], pos["y"], b1["x"], b1["y"], b2["x"], b2["y"])) {hits++;}
	}
	if(hits % 2 == 0) {return false;}
	return true;
}

function traceConvertTexCoords(pos, ent, closeup) {
	if (closeup) {
		var rect = ent.getBoundingClientRect();
		var scale = Number(ent.style.transform.replace("scale(", "").replace(")", ""))
		return {
			x: rect.left + pos["x"] * scale,
			y: rect.top + pos["y"] * scale
		};
	} else {
		return texToWorldSpace(pos, ent);
	}
}

function doLinesIntersect(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};