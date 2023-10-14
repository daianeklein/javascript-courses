let ball, newBall, thirdBall;


function setup(){
    let canvasWidth = 450;
    let canvasHeigth = 300;

    createCanvas(canvasWidth, canvasHeigth)

    ball = new Ball(200, 200, 3, 4, 20, 150);
    newBall = new Ball(100, 100, 2, 1.5, 30, 10);
    thirdBall = new Ball(150, 130, 7, 8, 5, 200);

}

function draw(){
    background(50);
    ball.displayBall();
    ball.moveBall();
    ball.bounceBall();

    newBall.displayBall();
    newBall.moveBall();
    newBall.bounceBall();

    thirdBall.displayBall();
    thirdBall.moveBall();
    thirdBall.bounceBall();

}

function Ball(x, y, xspeed, yspeed, radius, color){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.radius = radius;
    this.color = color;


    //public method to display the ball
    this.displayBall = function(){
        fill(this.color);
        ellipse(this.x, this.y, this.radius * 2);

    }

    this.moveBall = function(){

        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.bounceBall = function(){
        if(this.x >= width - this.radius|| this.x < this.radius){
            this.xspeed *= -1;
        } else if (this.y >= height - this.radius || this.y < this.radius){
            this.yspeed *= -1;
        }
    }

}

