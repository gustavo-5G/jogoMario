img = ""
noseX = 0
noseY = 0
marioX = 325
marioY = 325

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameOver = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png")
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas")
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("gameConsole")
	instializeInSetup(mario);
	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on("pose", gotPoses)
}

function modelLoaded() {
	console.log("Modelo Carregado")
}

function gotPoses(results) {
	if (results.lenght > 0) {
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}

function draw() {
	// background("#D3D3D3")
	// if (noseX < 300) {
	// 	marioX = marioX - 1
	// 	console.log("funciona")
	// }
	// if (noseX > 300) {
	// 	marioX = marioX + 1
	// }
	// if (noseY < 150) {
	// 	marioY = marioY - 1
	// }
	// image(img,marioX,marioY,40,70)
	game()
}