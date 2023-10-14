let e1, e2;

function setup() {
    let canvasWidth = 800;
    let canvasHeight = 400;

    createCanvas(canvasWidth, canvasHeight, WEBGL);
    e1 = new Sphere(0, 0, 200);
    e2 = new Sphere(100, 130, 150);
}

function draw() {
    background(25);
    e1.displaySphere();

    e2.displaySphere();
}

function Sphere(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.displaySphere = function() {
        push();
        const c = color(255, 204, 5);
        fill(c)
        noStroke();

        this.MoveSphere();
        this.RotateSphere();
        
        ellipse(this.x, this.y, this.radius, this.radius);

        pop();
    }

    this.RotateSphere = function() {
        rotateX(frameCount * 0.02);
        rotateY(frameCount * 0.02);
        rotateZ(frameCount * 0.02);
    }

    this.MoveSphere = function() {
        let xMove = sin(frameCount * 0.02) * 50;
        let yMove = cos(frameCount * 0.02) * 50;
        let zMove = sin(frameCount * 0.02) * 50;
        
        translate(xMove, yMove, zMove);
    }
}
