var rnd = Math.floor(Math.random() * 2) + 1;
class Ball{
    constructor(coords, sonido, players = [], points){
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
            HitBoxFactory.SquareDims(29, 29));
        this.points = points;   
    }
    move(){ 
        this.players.forEach((p) => {
            if (p.pointHb.wasHitSquare(this.hb)) {
              this.points.playrPointPlusPlus(p.playerId);
              this.reDo();
            }
          });

        if(this.players.some(player => player.hb.wasHitSquare(this.hb))){
            this.sonido.play();
            this.sonido.setVolume(0.50);
            this.speedX *=-1;
        }
        if(this.y < 0 || this.y >= board.height - this.height){
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.hb.x += this.speedX;
        this.y += this.speedY;
        this.hb.y += this.speedY;
    }
    
    reDo(){
        this.x = board.width/2 - ballSpec.width/2;
        this.y = board.height/2 - ballSpec.width/2;

        this.hb.x = this.x + ballSpec.hb;
        this.hb.y = this.y + ballSpec.hb;

        this.speedY = this.speedY > 0 ? 5 : -5;
        this.speedX = this.speedX > 0 ? 5 : -5;
        

        this.players.forEach((p) => {
            p.y = board.height/2 - paddle.height/2;
            p.hb.y = board.height/2 - paddle.height/2;
        });
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        this.hb.draw();
    }
}

const BallFactory = {
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
};