var rnd = Math.floor(Math.random() * 2) + 1;
class Ball{
    constructor(coords, sonido){
        this.pPlayers = [];
        this.x = coords.x;
        this.y = coords.y;
        this.width = 67;
        this.height = 67;
        this.sonido = sonido;
        this.img = loadImage ("/src/assets/sprites/ball.png");
        this.speedX = rnd == 1 ? 5 : -5;
        this.speedY = rnd == 1 ? 5 : -5;
        
    }
    move(){    
        if(this.x < 0 || this.x >= board.width - this.width){
            this.speedX *= -1;
        }
        if(this.y < 0 || this.y >= board.height - this.height){
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    choquePaddle(){
        this.pPlayers.forEach((e) => {
            if(this.x < e.x + e.width && this.x + this.width > e.x && this.y < e.y + e.height && this.height + this.y > e.y){
                this.speedX *= -1;
                this.sonido.play();
            }
        });
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        this.choquePaddle();
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