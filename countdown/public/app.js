var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Hej på dig"
    document.body.style.backgroundColor = "red";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + "sekunder";
  }
  timeleft -= 1;
}, 1000);