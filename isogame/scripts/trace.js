//john mcraven
//handles tracing hulls, used for collision and interaction

var traceData = {
	hulls : { //fun fact these are all put in manually, which wasnt very fun!
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
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
			ignoreWorldCheck : false,
		},
		env__gas_station_int_trigger_blood : {
			points : [
				{x: 147, y: 156},
				{x: 334, y: 398},
				{x: 598, y: 581},
				{x: 828, y: 490},
				{x: 320, y: 124},
				{x:   0, y: 354},
			],
			mins : {x:   0, y: 124},
			maxs : {x: 828, y: 581},
			closeup : false,
			ignoreWorldCheck : false,
		},
		env__gas_station_int_trigger_drag : {
			points : [
				{x: 240, y: 348},
				{x: 322, y: 328},
				{x: 496, y: 372},
				{x: 508, y: 301},
				{x: 318, y: 210},
			],
			mins : {x: 240, y: 210},
			maxs : {x: 508, y: 372},
			closeup : false,
			ignoreWorldCheck : false,
		},
		env__gas_station_ext_sign : {
			points : [
				{x:  -8, y: 384},
				{x: 107, y: 494},
				{x: 133, y: 478},
				{x:  19, y: 370},
			],
			mins : {x:  -8, y: 370},
			maxs : {x: 133, y: 494},
			closeup : false,
			ignoreWorldCheck : false,
		},
		env__foliage__deadgrass_01 : {
			points : [
				{x:10192, y: 3412},
				{x:10208, y: 3562},
				{x: 9298, y: 3636},
				{x: 8568, y: 3592},
				{x: 8018, y: 3492},
				{x: 8054, y: 3360},
				{x: 8230, y: 3226},
				{x: 8516, y: 3250},
				{x: 8716, y: 3282},
				{x: 8844, y: 3154},
				{x: 8660, y: 2806},
				{x: 9000, y: 2352},
				{x: 9520, y: 2206},
				{x: 9912, y: 2186},
				{x:10206, y: 2356},
				{x:10065, y: 2613},
				{x: 9720, y: 2890},
				{x: 9954, y: 3144},
				{x:10176, y: 3172},
				{x:10614, y: 2908},
				{x:11026, y: 2996},
				{x:10936, y: 3316},
				{x:10812, y: 3390},
				{x:10648, y: 3472},
				{x:10492, y: 3280},
				{x:10260, y: 3258},
			],
			mins : {x: 8018, y: 2186},
			maxs : {x:11026, y: 3636},
			closeup : false,
			ignoreWorldCheck : true,
		},
		env__foliage__deadgrass_02 : {
			points : [
				{x:7837, y:3877},
				{x:8172, y:3963},
				{x:8199, y:4084},
				{x:7771, y:4126},
				{x:7387, y:4098},
				{x:7308, y:3922},
				{x:7578, y:3867},
			],
			mins : {x:7308, y:3867},
			maxs : {x:8199, y:4126},
			closeup : false,
			ignoreWorldCheck : true,
		},
		env__foliage__deadgrass_03 : {
			points : [
				{x:11320, y: 3358},
				{x:11536, y: 3582},
				{x:11716, y: 3534},
				{x:11626, y: 3218},
				{x:11432, y: 2992},
				{x:11092, y: 3062},
				{x:11056, y: 3216},
			],
			mins : {x:11056, y: 2992},
			maxs : {x:11716, y: 3582},
			closeup : false,
			ignoreWorldCheck : true,
		},
		env__foliage__deadgrass_04 : {
			points : [
				{x:    0, y: 6472},
				{x: 1864, y: 5384},
				{x: 3816, y: 3248},
				{x: 6648, y: 1672},
				{x: 9000, y:  576},
				{x: 8816, y:    8},
				{x: 5280, y:  960},
				{x: 1440, y: 2368},
				{x:    0, y: 4464},
			],
			mins : {x:    0, y:    8},
			maxs : {x: 9000, y: 6472},
			closeup : false,
			ignoreWorldCheck : true,
		},
		env__foliage__conifer_01 : {
			points : [
				{x:    0, y: 6204},
				{x:  770, y: 5753},
				{x: 1001, y: 5192},
				{x: 2244, y: 4378},
				{x: 2679, y: 3759},
				{x: 2673, y: 3087},
				{x: 2298, y: 2475},
				{x: 1755, y: 2049},
				{x: 1983, y: 1590},
				{x: 2709, y: 1842},
				{x: 2754, y: 2484},
				{x: 3421, y: 2838},
				{x: 5379, y: 1969},
				{x: 7645, y:  836},
				{x: 8624, y:  187},
				{x:11814, y:  473},
				{x:14311, y:  957},
				{x:15972, y: 1760},
				{x:15631, y: 2090},
				{x:13651, y: 2552},
				{x:12540, y: 2750},
				{x:11902, y: 2937},
				{x:11407, y: 3157},
				{x:11077, y: 3410},
				{x:12419, y: 3157},
				{x:13750, y: 2838},
				{x:15345, y: 2486},
				{x:16280, y: 2398},
				{x:16500, y: 2464},
				{x:16503, y: 3099},
				{x:15270, y: 3111},
				{x:14102, y: 3311},
				{x:12804, y: 3839},
				{x:11077, y: 4103},
				{x:10076, y: 4147},
				{x: 7812, y: 4104},
				{x: 6193, y: 4048},
				{x: 4347, y: 4890},
				{x: 3223, y: 5588},
				{x: 2860, y: 6325},
				{x: 3553, y: 5951},
				{x: 4290, y: 5258},
				{x: 4862, y: 4906},
				{x: 5412, y: 4763},
				{x: 5665, y: 4422},
				{x: 6226, y: 4213},
				{x: 7810, y: 4180},
				{x: 8998, y: 4345},
				{x:10252, y: 4477},
				{x:11242, y: 4345},
				{x:12452, y: 4081},
				{x:13002, y: 4015},
				{x:14245, y: 3542},
				{x:15158, y: 3289},
				{x:16566, y: 3498},
				{x:17589, y: 3487},
				{x:17523, y: -704},
				{x: -770, y: -957},
				{x: -704, y: 6369},
			],
			mins : {x: -770, y: -957},
			maxs : {x:17589, y: 6699},
			closeup : false,
			ignoreWorldCheck : true,
		},
		env__foliage__conifer_02 : {
			points : [
				{x: -165, y: 6204},
				{x: 1320, y: 3223},
				{x: 2112, y: 1760},
				{x: 5181, y:  924},
				{x: 6897, y:  -44},
				{x:11847, y: -539},
				{x:16984, y: 1265},
				{x:17061, y:-1496},
				{x: -407, y:-1639},
			],
			mins : {x: -407, y:-1639},
			maxs : {x:17061, y: 6204},
			closeup : false,
			ignoreWorldCheck : true,
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
			ignoreWorldCheck : true,
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
			ignoreWorldCheck : true,
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
			ignoreWorldCheck : true,
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
			ignoreWorldCheck : true,
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
			ignoreWorldCheck : true,
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
	if (!hull["closeup"] && !hull["ignoreWorldCheck"] && ent.parentElement.id != worldsData["currentWorld"]) {return;}
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