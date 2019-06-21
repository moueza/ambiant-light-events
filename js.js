if ('ondevicelight' in window) {
  window.addEventListener('devicelight', function(event) {
    var body = document.querySelector('body');
    
    
    
   document.getElementById("toPrint").innerHTML="toPrint";
    
    
    if (event.value < 50) {
      body.classList.add('darklight');
      body.classList.remove('brightlight');
    } else {
      body.classList.add('brightlight');
      body.classList.remove('darklight');
    }
  });
} else {
  console.log('devicelight event not supported');
}
