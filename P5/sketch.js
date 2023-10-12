function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL)
};

function draw(){
    background(200);
    orbitControl(100, 100);
    cone(100, 300, 20, 15, true)
};