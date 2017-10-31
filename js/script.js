let myAudio1 = new Audio('sounds/clap.wav');
let myAudio2 = new Audio('sounds/boom.wav');
let myAudio3 = new Audio('sounds/hihat.wav');
let piosenka = new Audio('sounds/piosenka.mp3');

// 3 example channels
let channel1 = {2000:myAudio1, 3000:myAudio2, 4000:myAudio3}
let channel2 = {2500:myAudio1, 3500:myAudio2, 4500:myAudio3}
let channel3 = {2800:myAudio1, 3800:myAudio2, 4800:myAudio3}

//all channel list
let allChannels = [channel1, channel2, channel3]

let timeMs = 0
let intervalTimeMs = 100
let maxTrackTimeMs = 5000
let autoLoop = true
let songLoopInterval = setInterval(songLoop, intervalTimeMs)

function songLoop(){
    timeMs+=intervalTimeMs
    console.log(timeMs)

    playSound()

    //start time from 0 and reset timer
    if(timeMs>=maxTrackTimeMs)
    {
        if(autoLoop==false){
            window.clearInterval(songLoopInterval)
        }
        timeMs = 0;
    }
}

function playSound(){
    //check all channels in current time is there something to play
    for(channel of allChannels){
        if(timeMs in channel){
            console.log(timeMs + " Play sound: " + channel[timeMs].play())
            channel[timeMs].play()
        }
    }
}