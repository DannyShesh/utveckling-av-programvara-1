const express = require("express")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const path = require("path")
const db = require("./db")
const MySQLStore = require("express-mysql-session")(session)
const server = express()
server.use(session({
    secret: "dddwadsdo2qkof,2oas",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: true, httpOnly: true, sameSite: true, maxAge: 1000 * 60 * 60},
    store: new MySQLStore({
        host: "localhost",
        user: "root",
        database: "sys"
    })
}))

console.log(db);
server.use(cookieParser)
server.use(express.urlencoded)
server.use(express.json)


server.get("/login", (req, res)=>{
    res.sendFile(path.resolve("frontend/login.html"))
})
server.get("/dashboard", (req, res)=>{
    res.sendFile(path.resolve("frontend/dashboard.html"))
})
server.get("/", (req, res)=>{
    console.log("hej");
    res.sendFile(path.resolve("frontend/index.html"))
})

const user = {
    email: "chris",
    password: "123"
}

server.post("/api/login", (req,res)=>{ 
    if (user.email == req.body.email){
        req.session.user = {user: user, loggedIn: true}
        res.cookie("session_id" ,req.sessionID)
    }
    res.redirect("/dashboard")
})




server.listen(3000, ()=>{
    console.log("web up");
})