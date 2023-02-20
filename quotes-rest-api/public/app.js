

function displayData(item) {
    item.map(n => console.log(n))
    document.querySelector("#parent").innerHTML = `
    
        ${item.map (n => {
        const h1 = document.createElement("h1")
        h1.innerHTML += `
        <h1>"${n.quote}"</h1>
        <div id="center">
        <div><div id="lines"> </div></div> 
         <p> ${n.author}</p>
         <div><div id="lines"></div></div>
        </div>
       `
     var randomItem = item[Math.floor(Math.random()*item.length)];
        document.body.innerHTML = randomItem
        document.body.appendChild(h1)
        })}
        
    
    `
    }

fetcher()
function fetcher() {
    fetch('/api/quotes')
  .then((response) => response.json())
  .then((data) => displayData(data));
  
}
