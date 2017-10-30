let myAudio1 = new Audio('sounds/clap.wav');
let myAudio2 = new Audio('sounds/boom.wav');
let myAudio3 = new Audio('sounds/hihat.wav');

//myAudio.play()

let listToPlay = {2000:myAudio1, 5600:myAudio2, 7800:myAudio3}

let timeMs=0.0
let playSoundInterval = setInterval(playSound, 100)

function playSound(){
    timeMs+=100

    console.log(timeMs)
    
    if(timeMs in listToPlay){
        console.log(timeMs + " Play sound: " + listToPlay[timeMs].play())
        listToPlay[timeMs].play()
    }

    if(timeMs>10000)
        window.clearInterval(playSoundInterval)

}

