
fetcher()
async function fetcher() {
    const res = await fetch('/api/quotes')
    const data = await res.json()
    console.log(data);
  
  document.getElementById("parent").innerHTML = `
  <div> <h1> ${data.quote} </h1> 
        <p> ${data.author} </p>
  </div>
  
  `
}


