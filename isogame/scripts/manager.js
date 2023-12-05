//john mcraven
//handles calling the rest of the functions on the page, should be included last
var gameRunning = false;
function StartGame() {
	if (gameRunning) {return;}
	gameRunning = true;
	document.getElementById("splashscreen").style.display = "none";

	Init();
	PerFrameThink();
}

//init functions
function Precache() {
	animPrecache();
	carwreckPrecache()
}

function Init() {
	globalInit();
	soundInit();
	sortInit();
	animInit();
	playerInit();
	camInit();
	carwreckInit();
	gasstationInit();
}

//think functions
var managerTimeLast = 0;
function PerFrameThink(time) {
	var deltaTime = ((time - managerTimeLast) / 1000) || 0;
	managerTimeLast = time;
	requestAnimationFrame(PerFrameThink);
	
	animUpdate();
	soundUpdate(deltaTime);
	sortUpdate();
	worldsUpdate(deltaTime);
	playerUpdate(deltaTime);
	camUpdate();
	carwreckUpdate(deltaTime);
	gasstationUpdate(deltaTime);
}

function testSkip() {
	setWorld("overworld");
	playerData["hasCrowbar"] = true;
	gasstationData["doorLocked"] = false;
}

//dont let the user break the carefully crafted listening experience with the media keys
navigator.mediaSession.setActionHandler('play', function() {});
navigator.mediaSession.setActionHandler('pause', function() {});
navigator.mediaSession.setActionHandler('seekbackward', function() {});
navigator.mediaSession.setActionHandler('seekforward', function() {});
navigator.mediaSession.setActionHandler('previoustrack', function() {});
navigator.mediaSession.setActionHandler('nexttrack', function() {});