function ageCalculator(){
    var userinput = document.getElementById("calc").value;
    var calc = new Date(userinput);
    if(userinput ==null || userinput==""){
        document.getElementById("message").innerHTML = "ange en data";
        return false;
    }else {
        var month = Date.now() - calc.getTime()

        var agee = new Date(month)

        var year = agee.getUTCFullYear()

        var age = Math.abs(year - 1970)

       
        return document.getElementById("result").innerHTML =
        "Din Ålder: " + age + " År. "  
       
    }
 
  
}