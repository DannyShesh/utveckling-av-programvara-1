function ageCalculator(){
    let num = document.getElementById("calc").value;
    let output = document.getElementById("output");
    
    if (num < 10) {
      output.innerHTML = "Du är ett barn.";
    } else if (num < 20) {
      output.innerHTML = "Du är en tonåring.";
    } else if (num < 64) {
      output.innerHTML = "Du är en vuxen.";
    } else{
        output.innerHTML = "Du är en senior"
    }
}