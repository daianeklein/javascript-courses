function setup(){
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES);
}

function draw(){
    background(30);

    noFill();
    stroke(255);

    //move the sphere around
    let x = sin(frameCount * 2) * 50;
    let y = cos(frameCount) * 50;
    let z = sin(frameCount * 2) * 50
    translate(x, y, z)

    //rotate the sphere
    rotateX(frameCount) 
    rotateY(frameCount) 
    rotateZ(frameCount) 
    
    //adding more elipses
    for (let i = 0; i < 360; i++){

        //colors
        let color1 = map(sin(i + frameCount), -1, 1, 200, 50);
        let color2 = map(sin(i + frameCount), -1, 1, 200, 200);
        let color3 = map(sin(i + frameCount), -1, 1, 200, 200);

        stroke(color1, color2, color3);

        push();
        rotateY(i/2) //retate by 180 degrees
        ellipse(0, 0, 200)
        
        pop();

    }


}