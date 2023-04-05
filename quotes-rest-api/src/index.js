var express = require("express")
var app = express()
const quotes = require("./data/quotes.json")

app.use(express.static('public'));


app.get("/api/quotes", (req, res) => {
    const randomQuoute = quotes[Math.floor(Math.random()*quotes.length)];
    res.json(randomQuoute)
    })  


app.listen(3000, () => {
    console.log("app is listening on port 3000");
})
