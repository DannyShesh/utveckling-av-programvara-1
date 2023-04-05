function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    let num = document.getElementById("calc").value;
    let output = document.getElementById("output");

    if(num == randomNumber){
        output.innerHTML = "Du gissa rätt"
    }
}

