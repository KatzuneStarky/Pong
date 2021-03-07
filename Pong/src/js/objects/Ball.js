var rnd = Math.floor(Math.random() * 2) + 1;
class Ball{
    constructor(coords, sonido, players){
        this.pPlayers = [];
        this.x = coords.x;
        this.y = coords.y;
        this.width = 67;
        this.height = 67;
        this.sonido = sonido;
        this.players = players;
        this.img = loadImage ("/src/assets/sprites/ball.png");
        this.speedX = rnd == 1 ? 5 : -5;
        this.speedY = rnd == 1 ? 5 : -5;
        this.hb = new HitboxSquare(
            HitBoxFactory.coords(this.x+19, this.y+19),
            HitBoxFactory.SquareDims(30, 30));
    }
    move(){    
        if(
            this.x < 0 || 
            this.x >= board.width - this.width || 
            this.players.some(player => player.hb.wasHitSquare(this.hb))){
            this.speedX *= -1;
        }
        if(this.y < 0 || this.y >= board.height - this.height){
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.hb.x += this.speedX;
        this.y += this.speedY;
        this.hb.y += this.speedY;
    }

    choquePaddle(){
        this.pPlayers.forEach((e) => {
                this.sonido.play();
        });
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        this.choquePaddle();
        this.hb.draw();
    }
}

const BallFactory = {
    coords: (x, y) => {
        return {
            x: x,
            y: y,
        };
    },
};