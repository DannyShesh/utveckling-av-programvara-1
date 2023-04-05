const express = require("express")
const mysql = require("mysql2")
const server = express()
const path = require("path")


const db = mysql.createPool({
    
        host: "localhost",
        user: "root",
        database: "gamesdb",
        
})
console.log(db);
server.use(express.static(path.resolve("public")))

server.get("/api/games", (req, res)=>{
    db.query("SELECT * FROM games", (err, rows)=>{
        if(err)throw err.message;
        res.status(200).json(rows)
    })
})



server.listen(3000, () =>{
    console.log("web upp");
})