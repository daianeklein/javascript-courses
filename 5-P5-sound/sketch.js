let song;
let slider;
let sliderVolume;
let sliderRate;
let sliderRateLabel;
let button;

//ampliture (volume)
let amp;
let ampHistory = []


function preload(){
    
}

function playSong(){
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }

}

function setup() {
  canvasContainerTopRight = select('#topRight');
  let topRightCanvas = createCanvas(canvasContainerTopRight.size().width, canvasContainerTopRight.size().height);
  topRightCanvas.parent('topRight');

    song = loadSound("assets/songs/eua-miley-cyrus.mp3", loaded);

    button = createButton('Play');
    button.mousePressed(playSong);

    amp = new p5.Amplitude();
}

function draw() {
  background(220); // Clear background

  var vol = amp.getLevel();
  ellipse(width/2, height/2, 100, vol * 1000)
}

function loaded() {
  if (song){
    console.log('music loaded!');
}

}