//john mcraven
//handles playing sprite animations

var animData = { //big dict with all the info needed for animations
//PLAYER ANIMS
	player__anim_base_idle_step : { //copy of idle but with a step animevent at the start, for snapping to
		textures: {
			dir_000 : "assets/tex__player__anim_base_idle__000.png",
			dir_045 : "assets/tex__player__anim_base_idle__045.png",
			dir_090 : "assets/tex__player__anim_base_idle__090.png",
			dir_135 : "assets/tex__player__anim_base_idle__135.png",
			dir_180 : "assets/tex__player__anim_base_idle__180.png",
			dir_225 : "assets/tex__player__anim_base_idle__225.png",
			dir_270 : "assets/tex__player__anim_base_idle__270.png",
			dir_315 : "assets/tex__player__anim_base_idle__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : false,
			swap : "player__anim_base_idle",
		},
		rootMotion : false,
		animEvents : {0 : "playSoundEvent('snd__player_step')"},
	},
	player__anim_crowbar_idle_step : { //copy of idle but with a step animevent at the start, for snapping to
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_idle__000.png",
			dir_045 : "assets/tex__player__anim_crowbar_idle__045.png",
			dir_090 : "assets/tex__player__anim_crowbar_idle__090.png",
			dir_135 : "assets/tex__player__anim_crowbar_idle__135.png",
			dir_180 : "assets/tex__player__anim_crowbar_idle__180.png",
			dir_225 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_idle__270.png",
			dir_315 : "assets/tex__player__anim_crowbar_idle__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : false,
			swap : "player__anim_crowbar_idle",
		},
		rootMotion : false,
		animEvents : {0 : "playSoundEvent('snd__player_step')"},
	},
	player__anim_base_idle : {
		textures: {
			dir_000 : "assets/tex__player__anim_base_idle__000.png",
			dir_045 : "assets/tex__player__anim_base_idle__045.png",
			dir_090 : "assets/tex__player__anim_base_idle__090.png",
			dir_135 : "assets/tex__player__anim_base_idle__135.png",
			dir_180 : "assets/tex__player__anim_base_idle__180.png",
			dir_225 : "assets/tex__player__anim_base_idle__225.png",
			dir_270 : "assets/tex__player__anim_base_idle__270.png",
			dir_315 : "assets/tex__player__anim_base_idle__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	player__anim_crowbar_idle : {
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_idle__000.png",
			dir_045 : "assets/tex__player__anim_crowbar_idle__045.png",
			dir_090 : "assets/tex__player__anim_crowbar_idle__090.png",
			dir_135 : "assets/tex__player__anim_crowbar_idle__135.png",
			dir_180 : "assets/tex__player__anim_crowbar_idle__180.png",
			dir_225 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_idle__270.png",
			dir_315 : "assets/tex__player__anim_crowbar_idle__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	player__anim_base_walkstart : {
		textures: {
			dir_000 : "assets/tex__player__anim_base_walkstart__000.png",
			dir_045 : "assets/tex__player__anim_base_walkstart__045.png",
			dir_090 : "assets/tex__player__anim_base_walkstart__090.png",
			dir_135 : "assets/tex__player__anim_base_walkstart__135.png",
			dir_180 : "assets/tex__player__anim_base_walkstart__180.png",
			dir_225 : "assets/tex__player__anim_base_walkstart__225.png",
			dir_270 : "assets/tex__player__anim_base_walkstart__270.png",
			dir_315 : "assets/tex__player__anim_base_walkstart__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 5,
			y : 4,
		},
		length : 20,
		endBehaviour : {
			loop : false,
			swap : "player__anim_base_walk",
		},
		rootMotion : { //relative to coords in sfm, not site coords. conversion is handled in code.
			neg: {x : "000.00", y : "000.00"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "000.00", y : "000.00"},
			2  : {x : "000.00", y : "000.00"},
			3  : {x : "000.00", y : "000.00"},
			4  : {x : "000.05", y : "000.04"},
			5  : {x : "000.58", y : "000.46"},
			6  : {x : "002.03", y : "001.01"},
			7  : {x : "005.16", y : "001.45"},
			8  : {x : "008.82", y : "001.25"},
			9  : {x : "012.07", y : "000.66"},
			10 : {x : "014.99", y : "-00.02"},
			11 : {x : "018.24", y : "-01.20"},
			12 : {x : "021.91", y : "-02.58"},
			13 : {x : "025.87", y : "-03.79"},
			14 : {x : "030.12", y : "-04.70"},
			15 : {x : "034.77", y : "-05.29"},
			16 : {x : "039.72", y : "-05.63"},
			17 : {x : "044.47", y : "-05.82"},
			18 : {x : "049.56", y : "-06.02"},
			19 : {x : "054.65", y : "-06.22"},
		},
		animEvents : {
			11 : "playSoundEvent('snd__player_step')",
			18 : "playSoundEvent('snd__player_step')",
		},
	},
	player__anim_crowbar_walkstart : {
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_walkstart__000.png",
			dir_045 : "assets/tex__player__anim_crowbar_walkstart__045.png",
			dir_090 : "assets/tex__player__anim_crowbar_walkstart__090.png",
			dir_135 : "assets/tex__player__anim_crowbar_walkstart__135.png",
			dir_180 : "assets/tex__player__anim_crowbar_walkstart__180.png",
			dir_225 : "assets/tex__player__anim_crowbar_walkstart__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_walkstart__270.png",
			dir_315 : "assets/tex__player__anim_crowbar_walkstart__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 5,
			y : 4,
		},
		length : 20,
		endBehaviour : {
			loop : false,
			swap : "player__anim_crowbar_walk",
		},
		rootMotion : { //relative to coords in sfm, not site coords. conversion is handled in code.
			neg: {x : "000.00", y : "000.00"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "000.00", y : "000.00"},
			2  : {x : "000.00", y : "000.00"},
			3  : {x : "000.00", y : "000.00"},
			4  : {x : "000.05", y : "000.04"},
			5  : {x : "000.58", y : "000.46"},
			6  : {x : "002.03", y : "001.01"},
			7  : {x : "005.16", y : "001.45"},
			8  : {x : "008.82", y : "001.25"},
			9  : {x : "012.07", y : "000.66"},
			10 : {x : "014.99", y : "-00.02"},
			11 : {x : "018.24", y : "-01.20"},
			12 : {x : "021.91", y : "-02.58"},
			13 : {x : "025.87", y : "-03.79"},
			14 : {x : "030.12", y : "-04.70"},
			15 : {x : "034.77", y : "-05.29"},
			16 : {x : "039.72", y : "-05.63"},
			17 : {x : "044.47", y : "-05.82"},
			18 : {x : "049.56", y : "-06.02"},
			19 : {x : "054.65", y : "-06.22"},
		},
		animEvents : {
			11 : "playSoundEvent('snd__player_step')",
			18 : "playSoundEvent('snd__player_step')",
		},
	},
	player__anim_base_walk : {
		textures: {
			dir_000 : "assets/tex__player__anim_base_walk__000.png",
			dir_045 : "assets/tex__player__anim_base_walk__045.png",
			dir_090 : "assets/tex__player__anim_base_walk__090.png",
			dir_135 : "assets/tex__player__anim_base_walk__135.png",
			dir_180 : "assets/tex__player__anim_base_walk__180.png",
			dir_225 : "assets/tex__player__anim_base_walk__225.png",
			dir_270 : "assets/tex__player__anim_base_walk__270.png",
			dir_315 : "assets/tex__player__anim_base_walk__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 6,
			y : 6,
		},
		length : 31,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : {
			neg: {x : "-06.01", y : "000.64"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "006.01", y : "-00.64"},
			2  : {x : "012.03", y : "-01.29"},
			3  : {x : "018.05", y : "-01.93"},
			4  : {x : "024.06", y : "-02.58"},
			5  : {x : "030.08", y : "-03.23"},
			6  : {x : "036.10", y : "-03.87"},
			7  : {x : "042.11", y : "-04.52"},
			8  : {x : "048.13", y : "-05.16"},
			9  : {x : "054.15", y : "-05.81"},
			10 : {x : "060.16", y : "-06.46"},
			11 : {x : "066.18", y : "-07.10"},
			12 : {x : "072.20", y : "-07.75"},
			13 : {x : "078.21", y : "-08.40"},
			14 : {x : "084.23", y : "-09.04"},
			15 : {x : "090.25", y : "-09.69"},
			16 : {x : "096.26", y : "-10.33"},
			17 : {x : "102.28", y : "-10.98"},
			18 : {x : "108.30", y : "-11.63"},
			19 : {x : "114.31", y : "-12.27"},
			20 : {x : "120.33", y : "-12.92"},
			21 : {x : "126.35", y : "-13.57"},
			22 : {x : "132.36", y : "-14.21"},
			23 : {x : "138.38", y : "-14.86"},
			24 : {x : "144.40", y : "-15.50"},
			25 : {x : "150.41", y : "-16.15"},
			26 : {x : "156.43", y : "-16.80"},
			27 : {x : "162.45", y : "-17.44"},
			28 : {x : "168.46", y : "-18.09"},
			29 : {x : "174.48", y : "-18.74"},
			30 : {x : "180.50", y : "-19.38"},
		},
		animEvents : {
			3 : "playSoundEvent('snd__player_step')",
			9 : "playSoundEvent('snd__player_step')",
			14 : "playSoundEvent('snd__player_step')",
			19 : "playSoundEvent('snd__player_step')",
			24 : "playSoundEvent('snd__player_step')",
			29 : "playSoundEvent('snd__player_step')",
		},
	},
	player__anim_crowbar_walk : {
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_walk__000.png",
			dir_045 : "assets/tex__player__anim_crowbar_walk__045.png",
			dir_090 : "assets/tex__player__anim_crowbar_walk__090.png",
			dir_135 : "assets/tex__player__anim_crowbar_walk__135.png",
			dir_180 : "assets/tex__player__anim_crowbar_walk__180.png",
			dir_225 : "assets/tex__player__anim_crowbar_walk__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_walk__270.png",
			dir_315 : "assets/tex__player__anim_crowbar_walk__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 6,
			y : 6,
		},
		length : 31,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : {
			neg: {x : "-06.01", y : "000.64"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "006.01", y : "-00.64"},
			2  : {x : "012.03", y : "-01.29"},
			3  : {x : "018.05", y : "-01.93"},
			4  : {x : "024.06", y : "-02.58"},
			5  : {x : "030.08", y : "-03.23"},
			6  : {x : "036.10", y : "-03.87"},
			7  : {x : "042.11", y : "-04.52"},
			8  : {x : "048.13", y : "-05.16"},
			9  : {x : "054.15", y : "-05.81"},
			10 : {x : "060.16", y : "-06.46"},
			11 : {x : "066.18", y : "-07.10"},
			12 : {x : "072.20", y : "-07.75"},
			13 : {x : "078.21", y : "-08.40"},
			14 : {x : "084.23", y : "-09.04"},
			15 : {x : "090.25", y : "-09.69"},
			16 : {x : "096.26", y : "-10.33"},
			17 : {x : "102.28", y : "-10.98"},
			18 : {x : "108.30", y : "-11.63"},
			19 : {x : "114.31", y : "-12.27"},
			20 : {x : "120.33", y : "-12.92"},
			21 : {x : "126.35", y : "-13.57"},
			22 : {x : "132.36", y : "-14.21"},
			23 : {x : "138.38", y : "-14.86"},
			24 : {x : "144.40", y : "-15.50"},
			25 : {x : "150.41", y : "-16.15"},
			26 : {x : "156.43", y : "-16.80"},
			27 : {x : "162.45", y : "-17.44"},
			28 : {x : "168.46", y : "-18.09"},
			29 : {x : "174.48", y : "-18.74"},
			30 : {x : "180.50", y : "-19.38"},
		},
		animEvents : {
			3 : "playSoundEvent('snd__player_step')",
			9 : "playSoundEvent('snd__player_step')",
			14 : "playSoundEvent('snd__player_step')",
			19 : "playSoundEvent('snd__player_step')",
			24 : "playSoundEvent('snd__player_step')",
			29 : "playSoundEvent('snd__player_step')",
		},
	},
	player__anim_cin01_wake_action : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_045 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_090 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_135 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_180 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_225 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_270 : "assets/tex__player__anim_cin01_wake_action__000.png",
			dir_315 : "assets/tex__player__anim_cin01_wake_action__000.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 18,
			y : 18,
		},
		length : 309,
		endBehaviour : {
			loop : false,
			swap : "player__anim_cin01_wake_postidle",
		},
		rootMotion : false,
		animEvents : {
			0 : "camData['locked'] = true; playerData['locked'] = true; playSoundEvent('snd__player__anim_cin01__wake_action')",
			30 : "playSoundEvent('snd__music__playgo')",
			260 : "camData['locked'] = false; playerData['locked'] = false",
		},
	},
	player__anim_cin01_wake_postidle : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_045 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_090 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_135 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_180 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_225 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_270 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
			dir_315 : "assets/tex__player__anim_cin01_wake_postidle__000.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 8,
			y : 7,
		},
		length : 53,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	player__anim_cin02_opentrunk_action : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_045 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_090 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_135 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_180 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_225 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_270 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
			dir_315 : "assets/tex__player__anim_cin02_opentrunk_action__045.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 4,
			y : 3,
		},
		length : 12,
		endBehaviour : {
			loop : false,
			swap : "player__anim_cin02_opentrunk_postidle",
		},
		rootMotion : false,
		animEvents : {
			6 : "playSoundEvent('snd__player_step')",
			11 : "carwreckInteractStart()",
		},
	},
	player__anim_cin02_opentrunk_postidle : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_045 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_090 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_135 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_180 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_225 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_270 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
			dir_315 : "assets/tex__player__anim_cin02_opentrunk_postidle__045.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	player__anim_cin02_closetrunk_action : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_045 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_090 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_135 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_180 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_225 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_270 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
			dir_315 : "assets/tex__player__anim_cin02_closetrunk_action__045.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 4,
			y : 4,
		},
		length : 16,
		endBehaviour : {
			loop : false,
			swap : "player__anim_base_idle",
		},
		rootMotion : false,
		animEvents : {
			5 : "playSoundEvent('snd__player_step')",
			13 : "playSoundEvent('snd__player_step')",
			14 : "playerData['locked'] = false",
		},
	},
	player__anim_cin02_closetrunk_crowbar_action : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_045 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_090 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_135 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_180 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_225 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_270 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
			dir_315 : "assets/tex__player__anim_cin02_closetrunk_crowbar_action__045.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 4,
			y : 4,
		},
		length : 16,
		endBehaviour : {
			loop : false,
			swap : "player__anim_crowbar_idle",
		},
		rootMotion : false,
		animEvents : {
			5 : "playSoundEvent('snd__player_step')",
			13 : "playSoundEvent('snd__player_step')",
			14 : "playerData['locked'] = false",
		},
	},
	player__anim_cin03_doorinteract : {
		textures: {
			dir_000 : "assets/tex__player__anim_base_idle__225.png",
			dir_045 : "assets/tex__player__anim_base_idle__225.png",
			dir_090 : "assets/tex__player__anim_base_idle__225.png",
			dir_135 : "assets/tex__player__anim_base_idle__225.png",
			dir_180 : "assets/tex__player__anim_base_idle__225.png",
			dir_225 : "assets/tex__player__anim_base_idle__225.png",
			dir_270 : "assets/tex__player__anim_base_idle__225.png",
			dir_315 : "assets/tex__player__anim_base_idle__225.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : false,
			swap : "player__anim_base_idle",
		},
		rootMotion : false,
		animEvents : {0 : "playSoundEvent('snd__player_step'); document.getElementById('player').dataset.sequence_direction = 'dir_225'; gassttationDoorInteractStart()"},
	},
	player__anim_cin03_doorinteract_crowbar : {
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_045 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_090 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_135 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_180 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_225 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_idle__225.png",
			dir_315 : "assets/tex__player__anim_crowbar_idle__225.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 9,
		},
		length : 90,
		endBehaviour : {
			loop : false,
			swap : "player__anim_crowbar_idle",
		},
		rootMotion : false,
		animEvents : {0 : "playSoundEvent('snd__player_step'); document.getElementById('player').dataset.sequence_direction = 'dir_225'; gassttationDoorInteractStart()"},
	},
	player__anim_cin03_doorinteract_unlocked : {
		textures: {
			dir_000 : "assets/tex__player__anim_crowbar_walkstart__000.png",
			dir_045 : "assets/tex__player__anim_crowbar_walkstart__045.png",
			dir_090 : "assets/tex__player__anim_crowbar_walkstart__090.png",
			dir_135 : "assets/tex__player__anim_crowbar_walkstart__135.png",
			dir_180 : "assets/tex__player__anim_crowbar_walkstart__180.png",
			dir_225 : "assets/tex__player__anim_crowbar_walkstart__225.png",
			dir_270 : "assets/tex__player__anim_crowbar_walkstart__270.png",
			dir_315 : "assets/tex__player__anim_crowbar_walkstart__315.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 5,
			y : 4,
		},
		length : 20,
		endBehaviour : {
			loop : false,
			swap : "player__anim_crowbar_walk",
		},
		rootMotion : { //relative to coords in sfm, not site coords. conversion is handled in code.
			neg: {x : "000.00", y : "000.00"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "000.00", y : "000.00"},
			2  : {x : "000.00", y : "000.00"},
			3  : {x : "000.00", y : "000.00"},
			4  : {x : "000.05", y : "000.04"},
			5  : {x : "000.58", y : "000.46"},
			6  : {x : "002.03", y : "001.01"},
			7  : {x : "005.16", y : "001.45"},
			8  : {x : "008.82", y : "001.25"},
			9  : {x : "012.07", y : "000.66"},
			10 : {x : "014.99", y : "-00.02"},
			11 : {x : "018.24", y : "-01.20"},
			12 : {x : "021.91", y : "-02.58"},
			13 : {x : "025.87", y : "-03.79"},
			14 : {x : "030.12", y : "-04.70"},
			15 : {x : "034.77", y : "-05.29"},
			16 : {x : "039.72", y : "-05.63"},
			17 : {x : "044.47", y : "-05.82"},
			18 : {x : "049.56", y : "-06.02"},
			19 : {x : "054.65", y : "-06.22"},
		},
		animEvents : {
			0 : "playSoundEvent('snd__player_step'); document.getElementById('player').dataset.sequence_direction = 'dir_225'; gassttationDoorInteractOpen()",
			11: "playSoundEvent('snd__player_step')",
			18: "playSoundEvent('snd__player_step')",
		},
	},
//CLOSEUP ANIMS
	closeup__carwreck_trunk__anim_open_preidle : {
		textures: {
			dir_000 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_045 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_090 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_135 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_180 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_225 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_270 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
			dir_315 : "assets/tex__closeup__carwreck_trunk__anim_open_preidle.png",
		},
		framerate : 60,
		resolution : {
			x : 300,
			y : 169,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	closeup__carwreck_trunk__anim_open_action : {
		textures: {
			dir_000 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_045 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_090 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_135 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_180 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_225 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_270 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
			dir_315 : "assets/tex__closeup__carwreck_trunk__anim_open_action.png",
		},
		framerate : 10,
		resolution : {
			x : 300,
			y : 169,
		},
		grid : {
			x : 3,
			y : 2,
		},
		length : 5,
		endBehaviour : {
			loop : false,
			swap : "closeup__carwreck_trunk__anim_open_postidle",
		},
		rootMotion : false,
		animEvents : {
			1 : "playSoundEvent('snd__scripted__carwreck_trunk_open')",
			3 : "carwreckData['trunkOpen'] = true",
			4 : "carwreckData['trunkGrabEnabled'] = true",
		},
	},
	closeup__carwreck_trunk__anim_open_postidle : {
		textures: {
			dir_000 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_045 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_090 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_135 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_180 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_225 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_270 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
			dir_315 : "assets/tex__closeup__carwreck_trunk__anim_open_postidle.png",
		},
		framerate : 60,
		resolution : {
			x : 300,
			y : 169,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	closeup__carwreck_trunk__anim_loot : {
		textures: {
			dir_000 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_045 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_090 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_135 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_180 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_225 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_270 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
			dir_315 : "assets/tex__closeup__carwreck_trunk__anim_loot.png",
		},
		framerate : 60,
		resolution : {
			x : 300,
			y : 169,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 2,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {
			0 : "playerData['hasCrowbar'] = true; playSoundEvent('snd__scripted__aquire_crowbar'); document.getElementById('generated_carwreckcloseup').style.cursor = 'default'",
		},
	},
	closeup__gasstation_door__anim_preidle : {
		textures: {
			dir_000 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_045 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_090 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_135 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_180 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_225 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_270 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
			dir_315 : "assets/tex__closeup__gasstation_door__anim_preidle.png",
		},
		framerate : 60,
		resolution : {
			x : 300,
			y : 196,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	closeup__gasstation_door__anim_action : {
		textures: {
			dir_000 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_045 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_090 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_135 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_180 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_225 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_270 : "assets/tex__closeup__gasstation_door__anim_action.png",
			dir_315 : "assets/tex__closeup__gasstation_door__anim_action.png",
		},
		framerate : 10,
		resolution : {
			x : 300,
			y : 196,
		},
		grid : {
			x : 8,
			y : 8,
		},
		length : 58,
		endBehaviour : {
			loop : false,
			swap : "closeup__gasstation_door__anim_postidle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__scripted__gasstation_door_unlock')",
			52 : "gasstationData['doorLocked'] = false",
		},
	},
	closeup__gasstation_door__anim_postidle : {
		textures: {
			dir_000 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_045 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_090 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_135 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_180 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_225 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_270 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
			dir_315 : "assets/tex__closeup__gasstation_door__anim_postidle.png",
		},
		framerate : 60,
		resolution : {
			x : 300,
			y : 196,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {0 : "gasstationData['closeupAnimPlaying'] = false"},
	},
//ENVIRONMENT ANIMS
	env__gasstation_ext_door__anim_locked : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_locked.png",
		},
		framerate : 60,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__gasstation_ext_door__anim_locked_hover : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_locked_hover.png",
		},
		framerate : 60,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__gasstation_ext_door__anim_preidle : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_preidle.png",
		},
		framerate : 60,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__gasstation_ext_door__anim_preidle_hover : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_preidle_hover.png",
		},
		framerate : 60,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__gasstation_ext_door__anim_action : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_action.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_action.png",
		},
		framerate : 10,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 4,
			y : 3,
		},
		length : 12,
		endBehaviour : {
			loop : false,
			swap : "env__gasstation_ext_door__anim_postidle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__scripted__gasstation_door_open')",
			11: "worldsData['goalWorld'] = 'shopfloor'",
		},
	},
	env__gasstation_ext_door__anim_postidle : {
		textures: {
			dir_000 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_045 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_090 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_135 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_180 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_225 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_270 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
			dir_315 : "assets/tex__env__gasstation_ext_door__anim_postidle.png",
		},
		framerate : 60,
		resolution : {
			x : 217,
			y : 217,
		},
		grid : {
			x : 1,
			y : 1,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
};

function animPrecache() {
	//collect list of textures used
	for (var seq in animData) {
		for (var dir in animData[seq]["textures"]) {
			PrecacheUrl(animData[seq]["textures"][dir]);
		}
	}
}

function animInit() {
	//calc root motion vectors
	for (var seq in animData) {
		if (animData[seq]["rootMotion"]) {
			replacement = {};
			for (var key in animData[seq]["rootMotion"]) {
				if (key == "neg") {continue;}
				replacement[key] = {};
				if (key - 1 in animData[seq]["rootMotion"]) {
					replacement[key]["y"] = animData[seq]["rootMotion"][key]["x"] - animData[seq]["rootMotion"][key-1]["x"];
					replacement[key]["x"] = animData[seq]["rootMotion"][key]["y"] - animData[seq]["rootMotion"][key-1]["y"];
				} else {
					replacement[key]["y"] = animData[seq]["rootMotion"][key]["x"] - animData[seq]["rootMotion"]["neg"]["x"];
					replacement[key]["x"] = animData[seq]["rootMotion"][key]["y"] - animData[seq]["rootMotion"]["neg"]["y"];
				}
			}
			animData[seq]["rootMotion"] = replacement;
		}
	}
}

//seqData = {
//	curSeq : "sequence name",
//	nextFrameNum : 1,
//	nextFrameTime : CurTime() + 1/fps,
//}
function animUpdate() {
	var elem = document.getElementsByTagName("*");
	for (var i=0, max=elem.length; i < max; i++) {
		if ("sequence" in elem[i].dataset) {
			var curSeq = elem[i].dataset.sequence;
			var entdata = GetEntData(elem[i]);
			//make sure the sequence exists
			if (!(curSeq in animData)) {continue;}
			//wait for our frame
			if ("curSeq" in entdata["seqData"] && entdata["seqData"]["nextFrameTime"] > CurTime()) {continue;}
			//before we start we need new sequence data
			if (!("curSeq" in entdata["seqData"]) || entdata["seqData"]["curSeq"] != curSeq) {
				//setup sequence
				entData["entities"][elem[i].dataset.ent_index]["seqData"] = {
					curSeq : curSeq,
					nextFrameNum : 0,
					nextFrameTime : CurTime(),
				}
			}
			entdata = GetEntData(elem[i]);
			//default to dir_000 if we dont have a direction already set
			if (!("sequence_direction" in elem[i].dataset) || elem[i].dataset.sequence_direction == "false") {elem[i].dataset.sequence_direction = "dir_000";}
			var nextframe = entData["entities"][elem[i].dataset.ent_index]["seqData"]["nextFrameNum"]
			var xFrame = Math.round(((nextframe / animData[curSeq]["grid"]["x"]) - Math.floor(nextframe / animData[curSeq]["grid"]["x"])) * animData[curSeq]["grid"]["x"]);
			var yFrame = Math.round(((Math.floor(nextframe / animData[curSeq]["grid"]["x"]) / animData[curSeq]["grid"]["y"]) - Math.floor(Math.floor(nextframe / animData[curSeq]["grid"]["x"]) / animData[curSeq]["grid"]["y"])) * animData[curSeq]["grid"]["y"]);
			//set visuals
			elem[i].style.backgroundImage = "url(\""+ animData[curSeq]["textures"][elem[i].dataset.sequence_direction] +"\")";
			elem[i].style.width  = animData[curSeq]["resolution"]["x"] + "px";
			elem[i].style.height = animData[curSeq]["resolution"]["y"] + "px";
			elem[i].style.backgroundPosition = (-animData[curSeq]["resolution"]["x"] * xFrame)+"px "+(-animData[curSeq]["resolution"]["y"] * yFrame)+"px";
			//apply root motion if availiable
			if (animData[curSeq]["rootMotion"] && nextframe in animData[curSeq]["rootMotion"]) {
				var dir = Number(elem[i].dataset.sequence_direction.slice(4));
				var rootMotion = calcVectorRotate(Number(animData[curSeq]["rootMotion"][nextframe]["x"]), Number(animData[curSeq]["rootMotion"][nextframe]["y"]), dir);
				rootMotion["x"] = entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] + rootMotion["x"] * 1.8;
				rootMotion["y"] = entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] + rootMotion["y"] * 1.4;
				if (globalCollisionTrace(rootMotion)) {
					if (elem[i].id == "player") {playerData["useGoalInput"] = false;} //just immedietly give up on pathfinding
					var rootMotionTrimmed = {
						x : rootMotion["x"],
						y : entData["entities"][elem[i].dataset.ent_index]["origin"]["y"],
					}
					if (!globalCollisionTrace(rootMotionTrimmed)) {
						rootMotionTrimmed["y"] = rootMotion["y"] * 0.5 + rootMotionTrimmed["y"] * 0.5;
						if (!globalCollisionTrace(rootMotionTrimmed)) {
							entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] = rootMotion["x"];
							entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] = rootMotionTrimmed["y"];
						} else {
							entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] = rootMotion["x"];
							entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] = entData["entities"][elem[i].dataset.ent_index]["origin"]["y"];
						}
					} else {
						rootMotionTrimmed = {
							x : entData["entities"][elem[i].dataset.ent_index]["origin"]["x"],
							y : rootMotion["y"],
						}
						if (!globalCollisionTrace(rootMotionTrimmed)) {
							rootMotionTrimmed["x"] = rootMotion["x"] * 0.5 + rootMotionTrimmed["x"] * 0.5;
							if (!globalCollisionTrace(rootMotionTrimmed)) {
								entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] = rootMotionTrimmed["x"];
								entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] = rootMotion["y"];
							} else {
								entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] = entData["entities"][elem[i].dataset.ent_index]["origin"]["x"];
								entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] = rootMotion["y"];
							}
						} else {
							if (elem[i].id == "player") {
								//+"" so it assigns the string and not the actual object i hate it when it assigns the actual object and then other random parts of the code
								//make changes to playerData["stuck"] and it messes up the object and breaks seemingly unrelated things its so annoying to debug that stuff
								playerData["stuck"] = player.dataset.sequence_direction;
							}
						}
					}
				} else {
					entData["entities"][elem[i].dataset.ent_index]["origin"]["x"] = rootMotion["x"];
					entData["entities"][elem[i].dataset.ent_index]["origin"]["y"] = rootMotion["y"];
				}
				UpdateEntOrigin(elem[i]);
			}
			//animEvents
			if (nextframe in animData[curSeq]["animEvents"]) {
				eval(animData[curSeq]["animEvents"][nextframe]);
			}
			//update sequence
			entData["entities"][elem[i].dataset.ent_index]["seqData"]["nextFrameTime"] = CurTime() + (1 / animData[curSeq]["framerate"]);
			if (entData["entities"][elem[i].dataset.ent_index]["seqData"]["nextFrameNum"] < animData[curSeq]["length"] - 1) {
				entData["entities"][elem[i].dataset.ent_index]["seqData"]["nextFrameNum"] += 1;
			} else {
				if (animData[curSeq]["endBehaviour"]["loop"]) {
					entData["entities"][elem[i].dataset.ent_index]["seqData"]["nextFrameNum"] = 0;
				}
				if (animData[curSeq]["endBehaviour"]["swap"]) {
					elem[i].dataset.sequence = animData[curSeq]["endBehaviour"]["swap"];
				}
			}
		}
	}
}