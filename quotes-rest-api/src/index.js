var express = require("express")
var app = express()
const path = require('path');
const quotes = require("./data/quotes.json")

app.use(express.static(path.join('public')));


app.get("/api/quotes", (req, res) => {
    res.status(200).json(quotes.map(quotee =>({
        quote: quotee.quote,
        author: quotee.author,
        
    })))   
})

app.listen(3000, () => {
    console.log("app is listening on port 3000");
})
