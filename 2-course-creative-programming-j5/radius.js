function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(220);
    push();
        spare();
    pop();
    
    push();
        pie(0, -300, TWO_PI); // Corrected to TWO_PI
    pop();
    
    push();
        pie(0, -100, PI);
    pop(); // Added pop() to match the push() above
}

function pie(x, y, angle) {
    push();
        translate(x, y);
        torus(50, 10, 24, 16);
    pop();
    
    push();
        rotateZ(angle);
        cylinder(10, 150, 24, 1, true, true);
        box(40);
    pop();
}
