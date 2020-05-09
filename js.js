

document.getElementById("toPrint").innerHTML = "toPrint";

document.getElementById("versionn").innerHTML = "version=14";


if ('ondevicelight' in window) {

    document.getElementById("statuss").innerHTML = "lightSensor OK";
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
    document.getElementById("statuss").innerHTML = "lightSensor KO";

    console.log('devicelight event not supported');
}





function playSound() {
          var sound = document.getElementById("audio");
          sound.play();
      }
