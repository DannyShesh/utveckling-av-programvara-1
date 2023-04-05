function ageCalculator(){
    let num = document.getElementById("calc").value;
    let output = document.getElementById("output");
    
    if (num < 10) {
      output.innerHTML = "<span class='color-red'>**Talet är negativt.</span>";
    } else if (num > 10) {
      output.innerHTML = "<span class='color-green'>**Talet är Positivt</span>";
    } else if (num < num) {
      output.innerHTML =  "<span class='color-blue'>**Talet är Nol</span>";
    } else{
        output.innerHTML = "Du är en senior"
    }
}