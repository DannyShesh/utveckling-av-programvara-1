var express = require("express")
var app = express()
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});


app.listen(3000, () => {
    console.log("app is listening on port 3000");
})
