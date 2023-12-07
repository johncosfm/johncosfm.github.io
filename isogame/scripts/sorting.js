//john mcraven
//handles zsorting for entities

var sortData = {
	fancySorting : {
		player_waypoint : {
			texture: "assets/tex__player_waypoint__depth.png",
			resolution : {
				x : 256,
				y : 256,
			},
			grid : {
				x : 3,
				y : 2,
			},
			slices : 6,
			sliceSize : 7,
			additive : false,
		},
	},
}

function sortInit() {
	//setup entities with fancy sorts
	//these all have to have different z-index values, so theyre created next to the object instead of as children
	//global will update origins for them when the parent element origin is updated.
	var elem = document.getElementsByTagName("*");
	for (var i=0, max=elem.length; i < max; i++) {
		if ("fancy_sorting" in elem[i].dataset) {
			if (!(elem[i].dataset.fancy_sorting in sortData["fancySorting"])) {continue;}
			GetEntData(elem[i]);
			var info = sortData["fancySorting"][elem[i].dataset.fancy_sorting];
			elem[i].style.width  = info["resolution"]["x"] + "px";
			elem[i].style.height = info["resolution"]["y"] + "px";
			for (var x=info["slices"], y=0; x > y; x--) {
				var newelem = document.createElement("div");
				GetEntData(newelem);
				newelem.id = "generated_" + elem[i].id + "_child_" + x;
				newelem.dataset.sorting_offset = ((x - 0.5) - (info["slices"]/2)) * info["sliceSize"];
				newelem.style.backgroundImage = "url(\""+ info["texture"] +"\")";
				newelem.style.width  = info["resolution"]["x"] + "px";
				newelem.style.height = info["resolution"]["y"] + "px";
				var xFrame = Math.round((((x-1) / info["grid"]["x"]) - Math.floor((x-1) / info["grid"]["x"])) * info["grid"]["x"]);
				var yFrame = Math.round(((Math.floor((x-1) / info["grid"]["x"]) / info["grid"]["y"]) - Math.floor(Math.floor((x-1) / info["grid"]["x"]) / info["grid"]["y"])) * info["grid"]["y"]);
				newelem.style.backgroundPosition = (-info["resolution"]["x"] * xFrame)+"px "+(-info["resolution"]["y"] * yFrame)+"px";
				if (info["additive"]) {newelem.style.mixBlendMode = "screen"}
				if ("origin_offsetx" in elem[i].dataset) {newelem.dataset.origin_offsetx = elem[i].dataset.origin_offsetx}
				if ("origin_offsety" in elem[i].dataset) {newelem.dataset.origin_offsety = elem[i].dataset.origin_offsety}
				UpdateEntOrigin(newelem)
				entData["entities"][elem[i].dataset.ent_index]["children"].push(newelem.dataset.ent_index);
				elem[i].parentNode.insertBefore(newelem, elem[i].nextSibling);
				max++;
			}
		}
	}
}

function sortUpdate() {
	//the z index of everything under the game div is set just by its origin plus its offset
	var elem = document.getElementById(worldsData["currentWorld"]).children;
	for (var i=0, max=elem.length; i < max; i++) {
		var offset = 0;
		if ("sorting_offset" in elem[i].dataset) {offset = elem[i].dataset.sorting_offset;}
		if (elem[i].id == "world") {
			offset = -10000;
		}
		elem[i].style.zIndex = Math.round(GetEntData(elem[i])["origin"]["y"] + Number(offset));
	}
}