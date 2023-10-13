let ball;

function setup(){
    let canvasWidth = 450;
    let canvasHeigth = 300;

    createCanvas(canvasWidth, canvasHeigth)


    ball = new Ball(200, 200, 3, 4, 20);
    newBall = new Ball(100, 100, 2, 1.5, 30);


}

function draw(){
    background(50);
    ball.displayBall();
    ball.moveBall();
    ball.bounceBall();

    newBall.displayBall();
    newBall.moveBall();
    newBall.bounceBall();

}

function Ball(x, y, xspeed, yspeed, radius){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.radius = radius;

    //public method to display the ball
    this.displayBall = function(){
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

