let x = 200;
let y = 200;

let xspeed = 3; //horizontal speed of the ball
let yspeed = 4; //vertical speed of the ball

function setup(){
    canvasWidth = 400;
    canvasHeigth = 400;
    createCanvas(canvasWidth, canvasHeigth);
}

function draw(){
    background(200);
    ellipse(x, y, 40);

    x += xspeed;
    y += yspeed;

    if( x >= canvasWidth || x < 0){
        xspeed *= -1;
    }

    if(y >= canvasHeigth || y < 0){
        yspeed *= - 1;
    }
}

