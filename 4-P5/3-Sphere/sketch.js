let earthTexture;

let shouldRotate = true;
//let angleX = 0;
let angleY = 0;  // Only Y rotation is needed for horizontal rotation.


function preload() {
  // Load the equirectangular image of Earth
  earthTexture = loadImage('f.png');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  
  // Create a button menu for interaction
  createButton('1').mousePressed(changeHighlight);
  createButton('2').mousePressed(changeHighlight);
  createButton('3').mousePressed(changeHighlight);
}

function draw() {
    background(220);

    if (shouldRotate) {
        rotateY(angleY);
        angleY += 0.01;
    } else {
        rotateY(angleY);
    }

    // Set the texture and draw the Earth
    texture(earthTexture);
    noStroke();
    sphere(200);


  // Highlight a point if required (similar to the previous implementation)
  // ... your code for highlight here ...
}

// Function to change the highlight point when a menu option is selected
function changeHighlight() {
  let r = 50;
  let theta = random(TWO_PI);  // Random angle in the XY plane
  let phi = acos(random(-1, 1));  // Random angle in the Z direction
  
  // Convert spherical coordinates to Cartesian coordinates
  highlight.x = r * sin(phi) * cos(theta);
  highlight.y = r * sin(phi) * sin(theta);
  highlight.z = r * cos(phi);

  shouldRotate = false;  // Stop the rotation when an option is selected
}
