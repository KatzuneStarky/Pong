let bg;
let ball;
let players = [];
function setup(){
    bg = loadImage("/src/assets/sprites/board.png");
    ball = new Ball(BallFactory.coords((board.width - ballSpec.width) / 2, (board.height - ballSpec.height) / 2));
    players.push(
        new Paddle(
            PaddleFactory.coords(0, board.height/2 - paddle.height/2),
            PaddleFactory.controllSettings(87, 83), 
        ),
        new Paddle(
            PaddleFactory.coords(board.width - paddle.width, board.height/2 - paddle.height/2),
            PaddleFactory.controllSettings(38, 40),
            ),
    );
    ball.pPlayers = players;
    createCanvas(board.width, board.height);
}

function draw(){
    background(bg);
    ball.draw();
    players.forEach((e) => e.draw());
}