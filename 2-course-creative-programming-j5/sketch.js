function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
};

// function draw(){
//     background(100);
//     sphere(100);
// };

//3D box
// function draw(){
//     background(255);
//     orbitControl(100, 100);
//     box(100, 200, 50); //width, height, depth 
// }


//3D box - same shape
// function draw(){
//     background(255);
//     orbitControl(100, 100);
//     box(100); //width, height, depth 
// }

// 3D Sphere
// function draw(){
//     background(255);
//     orbitControl(100, 100);
//     sphere(100, 24, 24) //radius, detailX, detailY)
//     //max is 24
// }

// 3D cone
// function draw(){
//     background(100);
//     orbitControl(100, 100);
//     cone(100, 300, 20, 15, true) //radius, height, detailX, detailY, cap
// }

// 3D cilinder
// function draw(){
//     background(150);
//     orbitControl(100, 100);
//     cylinder(100, 300, 24, 1, false, true) //radius, height, detailX, detailY, topCap, bottonCap
// }

// 3D Torus
// function draw(){
//     background(150);
//     orbitControl(100, 100);
//     torus(150, 50, 24, 16); //radius, tuberadius, detailX, detailY
// }

// 3D Ellipsoid
// function draw(){
//     background(200);
//     orbitControl(100, 100);
//     ellipsoid(50, 100, 50, 24, 16); //radiuX, radiusY, radiusZ, detailX, detailY
// }

// 3D plane
function draw(){
    background(200);
    orbitControl(100, 100);
    normalMaterial();
    plane(200, 250);
}