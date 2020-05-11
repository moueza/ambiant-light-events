
var  mySound2;
document.getElementById("toPrint").innerHTML = "toPrint";

document.getElementById("versionn").innerHTML = "version=14";

console.log('lbl12 AV');
if ('ondevicelight' in window) {

    document.getElementById("statuss"
			   ).innerHTML = "lightSensor OK";
    var vall = DeviceLightEvent.valueOf();

    window.addEventListener('devicelight', function (event) {
        var body = document.querySelector('body');
        document.getElementById("beforeLevel").innerHTML = "lightSensor before level";
        document.getElementById("valuee").innerHTML = val;
        
        
        
        
        if (event.value < 50) {
            document.getElementById("valuee").innerHTML = "lightSensor level min50";

            body.classList.add('darklight');
            body.classList.remove('brightlight');
        } else {
            document.getElementById("valuee").innerHTML = "lightSensor level up50";
            body.classList.add('brightlight');
            body.classList.remove('darklight');
        }
    });
} else {
    //TODO JQuery
    document.getElementById("statuss").innerHTML = "lightSensor KO";

    console.log('devicelight event not supported');
}



console.log('lbl18 milieu');


function playSound() {
    console.log('lbl120 in playSound()');  console.log('lbl124 play1');


    var sound = document.getElementById("audio");
    sound.play();
    
    
    //https://www.w3schools.com/js/js_timing.asp
    setTimeout(function(){
	console.log('timeout');
    }, 1000);

    
    sound.play(); console.log('lbl128 play2');
}
console.log('lbl24 fin');


//https://www.w3schools.com/graphics/game_sound.asp
function playSound2() {
     mySound2 = new sound("http://www.soundjay.com/button/beep-07.wav");
    console.log('lbl5120 in playSound()');  console.log('lbl124 play1');

   mySound2.play();
    
    
    //https://www.w3schools.com/js/js_timing.asp
    setTimeout(function(){
	console.log('timeout');
    }, 1000);

    mySound2.play();  console.log('lbl5128 play2');
}
