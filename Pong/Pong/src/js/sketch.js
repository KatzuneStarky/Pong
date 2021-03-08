let bg;
let ball;
let players = [];
let backgroundSound;
let hitSound;
let pointSound;
let pts;
let gameFont;

function preload(){
    soundFormats('wav');
    backgroundSound = loadSound("src/assets/sfx/musicloop.wav");
    hitSound = loadSound("src/assets/sfx/kick.wav");
    pointSound = loadSound("src/assets/sfx/point.wav");
    gameFont = loadFont("src/assets/Font/kenvector_future_thin.ttf");
}

function setup(){
    bg = loadImage("/src/assets/sprites/board.png");
    
    players.push(
        new Paddle(
            PaddleFactory.coords(0, board.height/2 - paddle.height/2),
            PaddleFactory.controllSettings(87, 83),
            playersId.player1 
        ),
        new Paddle(
            PaddleFactory.coords(board.width - paddle.width, board.height/2 - paddle.height/2),
            PaddleFactory.controllSettings(38, 40),
            playersId.player2    
        ),
    );
    pts = new Points(PointsFactory.coords(board.width/ 2, 50), gameFont, pointSound);
    ball = new Ball(BallFactory.coords((board.width - ballSpec.width) / 2, (board.height - ballSpec.height) / 2), hitSound, players, pts);
    backgroundSound.loop();
    createCanvas(board.width, board.height);
}

function draw(){
    background(bg);
    ball.draw();
    pts.draw();
    players.forEach((e) => e.draw());
    
}