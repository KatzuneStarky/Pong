class Paddle{
    constructor(coords, controllSettings){
        this.x = coords.x;
        this.y = coords.y;
        this.width = paddle.width;
        this.height = paddle.height;
        this.img = loadImage("/src/assets/sprites/paddle.png");
        this.speed = 5;
        this.controllSettings = controllSettings;
    }
    moveUp(){
        if(this.y >= 0){
            this.y -= this.speed; 
        }
    }
    moveDown(){
        if(this.y <= board.height - paddle.height){
            this.y += this.speed;
        }
    }
    move(){
        this.controllSettings.forEach(controll => {
            if(keyIsDown(controll.key)){
                this[controll.name]() 
            }
        });
    }
    draw(){
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
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