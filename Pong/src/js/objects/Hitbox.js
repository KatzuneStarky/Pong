class HitboxSquare{
    constructor(coords, dims){
        this.x = coords.x;
        this.y = coords.y;
        this.width = dims.width;
        this.height = dims.height;
    }
    wasHitSquare(hbs){
    return(hbs.x < this.x + this.width && hbs.x + hbs.width > this.x 
            && hbs.y < this.y + this.height && hbs.y + hbs.height > this .y);
    }

    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
}

const HitBoxFactory = {
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
    SquareDims: (width, height) => {
        return {
            width,
            height,
        };
    }, 
};