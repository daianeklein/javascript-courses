function setup(){
    createCanvas(500, 500, WEBGL)
    background(200);
    createButton("Click me")
    createDiv("<p>Hello, i'm a paragraph inside a Div</p>")
};

function draw(){

    orbitControl(100, 100);
    cone(100, 300, 20, 15, true)
};