let song;
let slider;
let sliderVolume;
let sliderRate;
let button;


function preload(){
    
    
}

function setup(){
    createCanvas(200, 200);
    song = loadSound("assets/songs/eua-miley-cyrus.mp3", loaded);
    slider = createSlider(0, 1, 0.5, 0.01); //values between 0 and 1
    sliderRate = createSlider(0, 5, 1, 0.01) //speed of the song

    button = createButton('Play');
    button.mousePressed(togglePlaying);
    
}

function loaded(){
    song.play()
}

function togglePlaying(){
    if (!song.isPlaying()){

        song.play();
        button.html('Stop');
    } else{
        song.stop();
        button.html('Play')
    }
}

function draw(){
    background(0);
    song.setVolume(slider.value());
    song.rate(sliderRate.value());
}

