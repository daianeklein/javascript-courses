function topRightSketch(p) {
  p.setup = function() {
    let canvas = p.createCanvas(200, 200); 
    canvas.parent('topRight');
  }

  p.draw = function() {
    p.background(220);
    p.fill(255, 0, 0);
    p.ellipse(p.width / 2, p.height / 2, 50, 50); 
  }
}

function topLeftSketch(p) {
  let button;
  let song;

  p.preload = function() {
    song = p.loadSound("assets/songs/eua-miley-cyrus.mp3", loaded);
  }

  p.setup = function() {
    button = p.createButton('Play');
    button.mousePressed(playSong);
    button.parent('topLeft');
  }

  function playSong() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

  function loaded() {
    if (song) {
      console.log('music loaded!');
    }
  }
}

function bottomRightSketch(p) {
  let amp;
  let ampHistory = [];

  p.setup = function() {
    let canvasContainer = p.select('#bottomRight');
    let canvas = p.createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    canvas.parent('bottomRight');
    amp = new p5.Amplitude();
  }

  p.draw = function() {
    p.background(220);
    let vol = amp.getLevel();
    ampHistory.push(vol);
    p.stroke(255);
    p.noFill();
    p.beginShape();
    for (let i = 0; i < ampHistory.length; i++) {
      let y = p.map(ampHistory[i], 0, 1, p.height, 0);
      p.vertex(i, y);
    }
    p.endShape();

    if (ampHistory.length > p.width) {
      ampHistory.splice(0, 1);
    }
  }
}

let topRight = new p5(topRightSketch);
let topLeft = new p5(topLeftSketch);
let bottomRight = new p5(bottomRightSketch);
