class Paddle{
    constructor(coords, controllSettings, playerId){
        this.x = coords.x;
        this.y = coords.y;
        this.width = paddle.width; 
        this.height = paddle.height;
        this.img = loadImage("/src/assets/sprites/paddle.png");
        this.speed = 5;
        this.controllSettings = controllSettings;

        this.hb = new HitboxSquare(
            HitBoxFactory.coords(this.x+8, this.y+8),
            HitBoxFactory.SquareDims(19, 110.5)
        );

        this.playerId = playerId; 
        let pointHbCoords;
        if(playerId === playersId.player1){
            pointHbCoords = HitBoxFactory.coords(board.width + 10, 0);
        }else{
            pointHbCoords = HitBoxFactory.coords(-20, 0);
        }
        this.pointHb = new HitboxSquare(
            pointHbCoords,
            HitBoxFactory.SquareDims(10, board.height)
        );
    }
    moveUp(){
        if(this.hb.y >= 0){
            this.y -= this.speed; 
            this.hb.y -= this.speed; 
        }
    }
    moveDown(){
        if(this.hb.y <= board.height - this.hb.height){
            this.y += this.speed;
            this.hb.y += this.speed; 
        }
    }
    move(){
        this.controllSettings.forEach((controll) => {
            if(keyIsDown(controll.key)){
                this[controll.name](); 
            }
        });
    }
    draw(){
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
        //this.hb.draw();
    }
}

const PaddleFactory = {
    coords: (x, y) => {
        return {
            x: x,
            y: y,
        };
    },
    controllSettings: (moveUpKey, moveDownKey) => {
        return[
            {
                name: "moveUp",
                key: moveUpKey
            },
            {
                name: "moveDown",
                key: moveDownKey
            }
        ];
    },
};