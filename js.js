
    
   document.getElementById("toPrint").innerHTML="toPrint";


if ('ondevicelight' in window) {
        
   document.getElementById("statuss").innerHTML="lightSensor OK";

  window.addEventListener('devicelight', function(event) {
    var body = document.querySelector('body');
    
    
    
    
    if (event.value < 50) {
          document.getElementById("valuee").innerHTML="lightSensor <50";

      body.classList.add('darklight');
      body.classList.remove('brightlight');
    } else {
                document.getElementById("valuee").innerHTML="lightSensor >50";
      body.classList.add('brightlight');
      body.classList.remove('darklight');
    }
  });
} else {
      document.getElementById("statuss").innerHTML="lightSensor KO";

  console.log('devicelight event not supported');
}
