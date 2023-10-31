let song;
let slider;
let sliderVolume;
let sliderRate;
let sliderRateLabel;
let button;


function preload(){
    
}

function setup() {
    song = loadSound("assets/songs/eua-miley-cyrus.mp3", loaded);

    if (song){
        console.log('music loaded!');
    }
}

function loaded() {
    song.play();
}

function mousePressed() {
    if (song.isPlaying()) {
      song.stop();
    } else {
      song.play();
    }
  }

  // function positionElements() {
//     // Adjust the positions based on canvas dimensions
//     slider.position(10, height - 140);
//     sliderRate.position(10, height - 110);
//     sliderRateLabel.position(10, height - 85);
//     button.position(10, height - 60);
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     positionElements();
// }

//     sliderVolume = createSlider(0, 1, 0.5, 0.01); //values between 0 and 1
//     //slider.position(10, 210); // Position slider inside the bottom div
//     sliderVolume.id('sound-slider');
//     sliderVolume.input(changeVolume);  // Attach input event to slider to adjust volume
    
//     sliderRate = createSlider(0, 5, 1, 0.01); //speed of the song
//     sliderRate.id('rate-slider');
//     sliderRate.input(changeRate);  // Attach input event to slider to adjust playback rate

//     // Create a paragraph element below the sliderRate to display its value
//     sliderRateLabel = createP("Speed: " + sliderRate.value());
//     sliderRateLabel.position(10, 265); 

//     button = createButton('Play');
//     button.id('playButton');
//     button.parent('play-bottom');
//     button.mousePressed(togglePlaying);

//     positionElements();
// }



// function togglePlaying() {
//     if (!song.isPlaying()) {
//         song.play();
//         button.html('Stop');
//     } else {
//         song.stop();
//         button.html('Play');
//     }
// }

// function changeVolume() {
//     song.setVolume(sliderVolume.value());
// }

// function changeRate() {
//     song.rate(sliderRate.value());
//     sliderRateLabel.html("Speed: " + sliderRate.value().toFixed(2))
// }
