let e1, e2;

function setup() {
    let canvasWidth = 800;
    let canvasHeight = 400;

    createCanvas(canvasWidth, canvasHeight, WEBGL);
    e1 = new Sphere(0, 0, 200);
    e2 = new Sphere(100, 100, 50);
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
        this.MoveSphere();
        this.RotateSphere();

        for (let i = 0; i < 360; i++) {
            // colors
            let color1 = map(sin(i + frameCount), -1, 1, 200, 50);
            let color2 = map(sin(i + frameCount), -1, 1, 200, 200);
            let color3 = map(sin(i + frameCount), -1, 1, 200, 200);

            stroke(color1, color2, color3);

            push();
            rotateY(i * 0.5); // rotate by 180 degrees over 360 iterations
            ellipse(this.x, this.y, this.radius, this.radius);
            pop();
        }

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
