window.onload = function() {
    let randomNumber = Math.floor(Math.random() * 35);
    document.getElementById("numb").innerHTML = randomNumber;
  }
  
  function guessNumber() {
    let num = parseInt(document.getElementById("calc").value);
    let output = document.getElementById("output");
    let randomNumber = parseInt(document.getElementById("numb").innerHTML);
  
    if (num === randomNumber) {
      output.innerHTML = "Du hade rätt";
    } else {
      output.innerHTML = "Du gissade fel";
    }
  }
