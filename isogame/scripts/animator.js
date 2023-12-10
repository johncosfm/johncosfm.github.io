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
			260 : "camData['locked'] = false; playerData['locked'] = false; playerData['showKeybindsTime'] = 15",
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
	player__anim_cin04_headache_action : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_045 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_090 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_135 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_180 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_225 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_270 : "assets/tex__player__anim_cin04_headache_action__135.png",
			dir_315 : "assets/tex__player__anim_cin04_headache_action__135.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 12,
			y : 10,
		},
		length : 120,
		endBehaviour : {
			loop : false,
			swap : "player__anim_cin04_headache_postidle",
		},
		rootMotion : { //relative to coords in sfm, not site coords. conversion is handled in code.
			neg: {x : "000.00", y : "000.00"},
			0  : {x : "000.00", y : "000.00"},
			1  : {x : "000.60", y : "-00.25"},
			2  : {x : "001.31", y : "-00.63"},
			3  : {x : "001.65", y : "-01.38"},
			4  : {x : "001.65", y : "-02.48"},
			5  : {x : "000.93", y : "-03.38"},
			6  : {x : "000.00", y : "-03.92"},
			7  : {x : "-00.98", y : "-04.20"},
			8  : {x : "-01.94", y : "-04.63"},
			9  : {x : "-02.99", y : "-05.00"},
			10 : {x : "-04.07", y : "-05.02"},
			11 : {x : "-05.15", y : "-04.71"},
			12 : {x : "-06.03", y : "-04.37"},
			13 : {x : "-06.77", y : "-03.93"},
			14 : {x : "-07.51", y : "-03.30"},
			15 : {x : "-08.52", y : "-02.27"},
			16 : {x : "-10.67", y : "-00.30"},
			17 : {x : "-12.73", y : "002.08"},
			18 : {x : "-13.67", y : "003.93"},
			19 : {x : "-14.95", y : "004.90"},
			20 : {x : "-16.57", y : "005.68"},
			21 : {x : "-17.03", y : "005.89"},
			22 : {x : "-16.63", y : "006.18"},
			23 : {x : "-15.82", y : "006.65"},
			24 : {x : "-14.92", y : "007.13"},
			25 : {x : "-13.93", y : "007.53"},
			26 : {x : "-12.64", y : "007.52"},
			27 : {x : "-11.16", y : "006.73"},
			28 : {x : "-09.07", y : "005.07"},
			29 : {x : "-07.37", y : "003.51"},
			30 : {x : "-06.54", y : "002.61"},
			31 : {x : "-06.13", y : "002.13"},
			32 : {x : "-05.72", y : "001.80"},
			33 : {x : "-05.46", y : "001.82"},
			34 : {x : "-05.09", y : "002.11"},
			35 : {x : "-04.18", y : "002.50"},
			36 : {x : "-03.60", y : "002.72"},
			37 : {x : "-03.19", y : "002.92"},
			38 : {x : "-02.60", y : "003.30"},
			39 : {x : "-01.59", y : "004.19"},
			40 : {x : "000.07", y : "004.80"},
			41 : {x : "001.79", y : "004.82"},
			42 : {x : "003.11", y : "005.08"},
			43 : {x : "004.18", y : "004.80"},
			44 : {x : "005.13", y : "004.51"},
			45 : {x : "005.85", y : "004.24"},
			46 : {x : "006.06", y : "003.87"},
			47 : {x : "006.09", y : "003.64"},
			48 : {x : "006.04", y : "003.49"},
			49 : {x : "005.83", y : "003.26"},
			50 : {x : "005.48", y : "003.09"},
			51 : {x : "004.97", y : "002.85"},
			52 : {x : "004.32", y : "002.58"},
			53 : {x : "003.69", y : "002.38"},
			54 : {x : "003.44", y : "001.89"},
			55 : {x : "003.55", y : "001.26"},
			56 : {x : "003.68", y : "000.78"},
			57 : {x : "003.93", y : "000.30"},
			58 : {x : "004.01", y : "-00.20"},
			59 : {x : "003.91", y : "-00.55"},
			60 : {x : "003.60", y : "-00.69"},
			61 : {x : "003.12", y : "-00.67"},
			62 : {x : "002.64", y : "-00.64"},
			63 : {x : "002.31", y : "-00.64"},
			64 : {x : "002.15", y : "-00.76"},
			65 : {x : "002.14", y : "-01.09"},
			66 : {x : "002.25", y : "-01.64"},
			67 : {x : "002.38", y : "-02.29"},
			68 : {x : "002.61", y : "-02.85"},
			69 : {x : "002.90", y : "-03.45"},
			70 : {x : "003.47", y : "-04.10"},
			71 : {x : "004.65", y : "-04.65"},
			72 : {x : "006.45", y : "-05.11"},
			73 : {x : "008.55", y : "-05.39"},
			74 : {x : "009.81", y : "-05.23"},
			75 : {x : "010.41", y : "-04.82"},
			76 : {x : "010.61", y : "-04.50"},
			77 : {x : "010.66", y : "-04.17"},
			78 : {x : "010.76", y : "-03.81"},
			79 : {x : "011.05", y : "-03.52"},
			80 : {x : "011.47", y : "-03.31"},
			81 : {x : "011.76", y : "-03.28"},
			82 : {x : "011.61", y : "-03.80"},
			83 : {x : "010.92", y : "-04.68"},
			84 : {x : "009.79", y : "-05.68"},
			85 : {x : "008.35", y : "-06.40"},
			86 : {x : "006.99", y : "-06.93"},
			87 : {x : "005.97", y : "-07.37"},
			88 : {x : "005.42", y : "-07.46"},
			89 : {x : "005.46", y : "-07.23"},
			90 : {x : "006.18", y : "-06.72"},
			91 : {x : "007.34", y : "-06.00"},
			92 : {x : "008.75", y : "-05.16"},
			93 : {x : "010.16", y : "-04.27"},
			94 : {x : "011.41", y : "-03.45"},
			95 : {x : "012.37", y : "-02.74"},
			96 : {x : "012.91", y : "-02.57"},
			97 : {x : "012.93", y : "-02.79"},
			98 : {x : "012.40", y : "-03.04"},
			99 : {x : "011.51", y : "-03.46"},
			100: {x : "010.43", y : "-04.01"},
			101: {x : "009.25", y : "-04.63"},
			102: {x : "008.21", y : "-05.13"},
			103: {x : "007.55", y : "-05.36"},
			104: {x : "007.45", y : "-05.41"},
			105: {x : "007.71", y : "-05.34"},
			106: {x : "008.10", y : "-05.25"},
			107: {x : "008.38", y : "-05.23"},
			108: {x : "008.44", y : "-05.25"},
			109: {x : "008.44", y : "-05.25"},
			110: {x : "008.44", y : "-05.25"},
			111: {x : "008.44", y : "-05.25"},
			112: {x : "008.44", y : "-05.25"},
			113: {x : "008.44", y : "-05.25"},
			114: {x : "008.44", y : "-05.25"},
			115: {x : "008.44", y : "-05.25"},
			116: {x : "008.44", y : "-05.25"},
			117: {x : "008.44", y : "-05.25"},
			118: {x : "008.44", y : "-05.25"},
			119: {x : "008.44", y : "-05.25"},
			120: {x : "008.44", y : "-05.25"},
		},
		animEvents : {
			0: "playerData['locked'] = true; document.getElementById('player').dataset.sequence_direction = 'dir_135'; playSoundEvent('snd__scripted__headache'); playerData['hasCrowbar'] = false",
			4: "gasstationData['orbvoidFlickerStrength'] = 1",
			13: "gasstationData['orbvoidFlickerStrength'] = 0.5",
			39: "gasstationData['orbvoidFlickerStrength'] = 1",
			43: "gasstationData['orbvoidFlickerStrength'] = 0.1; gasstationData['orbvoidFlickerValue'] = 1.5; gasstationData['orbvoidFlickerNextSet'] = CurTime() + 0.2",
			44: "gasstationStartVoidMode()",
			59: "gasstationData['orbvoidFlickerStrength'] = 0; document.getElementById('orb_core').style.display = 'block'; document.getElementById('orb_bloom').style.display = 'block'",
			26 : "playSoundEvent('snd__ambient__orbvoid_base_loop'); playSoundEvent('snd__ambient__orbvoid_orb_prox')",
			119: "playerData['locked'] = false",
		},
	},
	player__anim_cin04_headache_postidle : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_045 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_090 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_135 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_180 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_225 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_270 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
			dir_315 : "assets/tex__player__anim_cin04_headache_postidle__135.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 10,
			y : 10,
		},
		length : 100,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	player__anim_cin05_falling_idle : {
		textures: {
			dir_000 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_045 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_090 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_135 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_180 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_225 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_270 : "assets/tex__player__anim_cin05_falling_idle.png",
			dir_315 : "assets/tex__player__anim_cin05_falling_idle.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 9,
			y : 8,
		},
		length : 67,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {
			everyFrame : "camData['zoom'] -= 0.004; gasstationData['whiteoutOpacity'] = Clamp(gasstationData['whiteoutOpacity'] - 0.01, 0, 1);"
			+"if (gasstationData['whiteoutOpacity'] == 0) {animData['player__anim_cin05_falling_idle']['animEvents']['everyFrame'] = animData['player__anim_cin05_falling_idle']['animEvents']['switchto']}",
			
			switchto : "if (gasstationData['whiteoutOpacity'] < 1) {camData['zoom'] -= 0.004;} else {animData['player__anim_cin05_falling_idle']['endBehaviour']['loop'] = false} gasstationData['whiteoutOpacity'] = Clamp(gasstationData['whiteoutOpacity'] + 0.01, 0, 1)"
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
			11: "worldsData['worlds']['shopfloor']['playerStart'] = {x: 576, y: 725, dir: 'dir_225'}; worldsData['worlds']['shopfloor']['cameraStart'] = {x: 584, y: 631, zoom: 3.5};"
				+"worldsData['goalWorld'] = 'shopfloor'; setTimeout(() => {document.getElementById('door_01').dataset.sequence = 'env__door_01__anim_close'}, 150)",
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
	env__door_01__anim_open : {
		textures: {
			dir_000 : "assets/tex__env__door_01__anim_open.png",
			dir_045 : "assets/tex__env__door_01__anim_open.png",
			dir_090 : "assets/tex__env__door_01__anim_open.png",
			dir_135 : "assets/tex__env__door_01__anim_open.png",
			dir_180 : "assets/tex__env__door_01__anim_open.png",
			dir_225 : "assets/tex__env__door_01__anim_open.png",
			dir_270 : "assets/tex__env__door_01__anim_open.png",
			dir_315 : "assets/tex__env__door_01__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 3,
			y : 2,
		},
		length : 5,
		endBehaviour : {
			loop : false,
			swap : "env__door_01__anim_open_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_metal_open'); playSoundEvent('snd__fol__door_metal_move')",
			4 : "worldsData['goalWorld'] = 'overworld'",
		},
	},
	env__door_01__anim_open_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_01__anim_close.png",
			dir_045 : "assets/tex__env__door_01__anim_close.png",
			dir_090 : "assets/tex__env__door_01__anim_close.png",
			dir_135 : "assets/tex__env__door_01__anim_close.png",
			dir_180 : "assets/tex__env__door_01__anim_close.png",
			dir_225 : "assets/tex__env__door_01__anim_close.png",
			dir_270 : "assets/tex__env__door_01__anim_close.png",
			dir_315 : "assets/tex__env__door_01__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__door_01__anim_close : {
		textures: {
			dir_000 : "assets/tex__env__door_01__anim_close.png",
			dir_045 : "assets/tex__env__door_01__anim_close.png",
			dir_090 : "assets/tex__env__door_01__anim_close.png",
			dir_135 : "assets/tex__env__door_01__anim_close.png",
			dir_180 : "assets/tex__env__door_01__anim_close.png",
			dir_225 : "assets/tex__env__door_01__anim_close.png",
			dir_270 : "assets/tex__env__door_01__anim_close.png",
			dir_315 : "assets/tex__env__door_01__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 3,
		endBehaviour : {
			loop : false,
			swap : "env__door_01__anim_closed_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_metal_move')",
			2 : "playSoundEvent('snd__fol__door_metal_close')",
		},
	},
	env__door_01__anim_closed_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_01__anim_open.png",
			dir_045 : "assets/tex__env__door_01__anim_open.png",
			dir_090 : "assets/tex__env__door_01__anim_open.png",
			dir_135 : "assets/tex__env__door_01__anim_open.png",
			dir_180 : "assets/tex__env__door_01__anim_open.png",
			dir_225 : "assets/tex__env__door_01__anim_open.png",
			dir_270 : "assets/tex__env__door_01__anim_open.png",
			dir_315 : "assets/tex__env__door_01__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 3,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__door_02__anim_open : {
		textures: {
			dir_000 : "assets/tex__env__door_02__anim_open.png",
			dir_045 : "assets/tex__env__door_02__anim_open.png",
			dir_090 : "assets/tex__env__door_02__anim_open.png",
			dir_135 : "assets/tex__env__door_02__anim_open.png",
			dir_180 : "assets/tex__env__door_02__anim_open.png",
			dir_225 : "assets/tex__env__door_02__anim_open.png",
			dir_270 : "assets/tex__env__door_02__anim_open.png",
			dir_315 : "assets/tex__env__door_02__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 3,
		endBehaviour : {
			loop : false,
			swap : "env__door_02__anim_open_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_wood_open'); playSoundEvent('snd__fol__door_wood_move')",
			2 : "worldsData['goalWorld'] = 'orbvoid'; setTimeout(() => {document.getElementById('door_03').dataset.sequence = 'env__door_03__anim_close'}, 150)",
		},
	},
	env__door_02__anim_open_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_02__anim_close.png",
			dir_045 : "assets/tex__env__door_02__anim_close.png",
			dir_090 : "assets/tex__env__door_02__anim_close.png",
			dir_135 : "assets/tex__env__door_02__anim_close.png",
			dir_180 : "assets/tex__env__door_02__anim_close.png",
			dir_225 : "assets/tex__env__door_02__anim_close.png",
			dir_270 : "assets/tex__env__door_02__anim_close.png",
			dir_315 : "assets/tex__env__door_02__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__door_02__anim_close : {
		textures: {
			dir_000 : "assets/tex__env__door_02__anim_close.png",
			dir_045 : "assets/tex__env__door_02__anim_close.png",
			dir_090 : "assets/tex__env__door_02__anim_close.png",
			dir_135 : "assets/tex__env__door_02__anim_close.png",
			dir_180 : "assets/tex__env__door_02__anim_close.png",
			dir_225 : "assets/tex__env__door_02__anim_close.png",
			dir_270 : "assets/tex__env__door_02__anim_close.png",
			dir_315 : "assets/tex__env__door_02__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 3,
		endBehaviour : {
			loop : false,
			swap : "env__door_02__anim_closed_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_wood_move')",
			2 : "playSoundEvent('snd__fol__door_wood_close')",
		},
	},
	env__door_02__anim_closed_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_02__anim_open.png",
			dir_045 : "assets/tex__env__door_02__anim_open.png",
			dir_090 : "assets/tex__env__door_02__anim_open.png",
			dir_135 : "assets/tex__env__door_02__anim_open.png",
			dir_180 : "assets/tex__env__door_02__anim_open.png",
			dir_225 : "assets/tex__env__door_02__anim_open.png",
			dir_270 : "assets/tex__env__door_02__anim_open.png",
			dir_315 : "assets/tex__env__door_02__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__door_03__anim_open : {
		textures: {
			dir_000 : "assets/tex__env__door_03__anim_open.png",
			dir_045 : "assets/tex__env__door_03__anim_open.png",
			dir_090 : "assets/tex__env__door_03__anim_open.png",
			dir_135 : "assets/tex__env__door_03__anim_open.png",
			dir_180 : "assets/tex__env__door_03__anim_open.png",
			dir_225 : "assets/tex__env__door_03__anim_open.png",
			dir_270 : "assets/tex__env__door_03__anim_open.png",
			dir_315 : "assets/tex__env__door_03__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 3,
		endBehaviour : {
			loop : false,
			swap : "env__door_03__anim_open_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_wood_open'); playSoundEvent('snd__fol__door_wood_move')",
			2 : "worldsData['worlds']['shopfloor']['playerStart'] = {x: 86, y: 373, dir: 'dir_225'}; worldsData['worlds']['shopfloor']['cameraStart'] = {x: 138, y: 294, zoom: 3.5};"
				+"worldsData['goalWorld'] = 'shopfloor'; setTimeout(() => {document.getElementById('door_02').dataset.sequence = 'env__door_02__anim_close'}, 150)",
		},
	},
	env__door_03__anim_open_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_03__anim_close.png",
			dir_045 : "assets/tex__env__door_03__anim_close.png",
			dir_090 : "assets/tex__env__door_03__anim_close.png",
			dir_135 : "assets/tex__env__door_03__anim_close.png",
			dir_180 : "assets/tex__env__door_03__anim_close.png",
			dir_225 : "assets/tex__env__door_03__anim_close.png",
			dir_270 : "assets/tex__env__door_03__anim_close.png",
			dir_315 : "assets/tex__env__door_03__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__door_03__anim_close : {
		textures: {
			dir_000 : "assets/tex__env__door_03__anim_close.png",
			dir_045 : "assets/tex__env__door_03__anim_close.png",
			dir_090 : "assets/tex__env__door_03__anim_close.png",
			dir_135 : "assets/tex__env__door_03__anim_close.png",
			dir_180 : "assets/tex__env__door_03__anim_close.png",
			dir_225 : "assets/tex__env__door_03__anim_close.png",
			dir_270 : "assets/tex__env__door_03__anim_close.png",
			dir_315 : "assets/tex__env__door_03__anim_close.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 3,
		endBehaviour : {
			loop : false,
			swap : "env__door_03__anim_closed_idle",
		},
		rootMotion : false,
		animEvents : {
			0 : "playSoundEvent('snd__fol__door_wood_move')",
			2 : "playSoundEvent('snd__fol__door_wood_close')",
		},
	},
	env__door_03__anim_closed_idle : {
		textures: {
			dir_000 : "assets/tex__env__door_03__anim_open.png",
			dir_045 : "assets/tex__env__door_03__anim_open.png",
			dir_090 : "assets/tex__env__door_03__anim_open.png",
			dir_135 : "assets/tex__env__door_03__anim_open.png",
			dir_180 : "assets/tex__env__door_03__anim_open.png",
			dir_225 : "assets/tex__env__door_03__anim_open.png",
			dir_270 : "assets/tex__env__door_03__anim_open.png",
			dir_315 : "assets/tex__env__door_03__anim_open.png",
		},
		framerate : 10,
		resolution : {
			x : 256,
			y : 256,
		},
		grid : {
			x : 2,
			y : 2,
		},
		length : 1,
		endBehaviour : {
			loop : false,
			swap : false,
		},
		rootMotion : false,
		animEvents : {},
	},
	env__orb_core__anim_idle : {
		textures: {
			dir_000 : "assets/tex__env__orb_core__anim_idle.png",
			dir_045 : "assets/tex__env__orb_core__anim_idle.png",
			dir_090 : "assets/tex__env__orb_core__anim_idle.png",
			dir_135 : "assets/tex__env__orb_core__anim_idle.png",
			dir_180 : "assets/tex__env__orb_core__anim_idle.png",
			dir_225 : "assets/tex__env__orb_core__anim_idle.png",
			dir_270 : "assets/tex__env__orb_core__anim_idle.png",
			dir_315 : "assets/tex__env__orb_core__anim_idle.png",
		},
		framerate : 20,
		resolution : {
			x : 512,
			y : 512,
		},
		grid : {
			x : 3,
			y : 2,
		},
		length : 6,
		endBehaviour : {
			loop : true,
			swap : false,
		},
		rootMotion : false,
		animEvents : {
			everyFrame : "gasstationRandomizeOrb()",
		},
	},
	env__orb_bloom__anim_idle : {
		textures: {
			dir_000 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_045 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_090 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_135 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_180 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_225 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_270 : "assets/tex__env__orb_bloom__anim_idle.png",
			dir_315 : "assets/tex__env__orb_bloom__anim_idle.png",
		},
		framerate : 20,
		resolution : {
			x : 512,
			y : 512,
		},
		grid : {
			x : 3,
			y : 2,
		},
		length : 6,
		endBehaviour : {
			loop : true,
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
			elem[i].style.backgroundImage = "url("+ animData[curSeq]["textures"][elem[i].dataset.sequence_direction] +")";
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
			if ("everyFrame" in animData[curSeq]["animEvents"]) {
				eval(animData[curSeq]["animEvents"]["everyFrame"]);
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