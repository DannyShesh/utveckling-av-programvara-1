const express = require("express")
const path = require("path")
const server = express()
server.use(express.static(path.resolve("public")))
server.use(express.urlencoded)


server.use("/", (req, res, next)=> {
   if(req.headers.cookie == "auth=true"){
    next()
   }else{
    res.redirect("back")
   }
   
})

server.get("/find", (req, res)=>{
 res.status(200).json(req.query)
    
})

server.listen(3000, ()=> {
    console.log("web up");
})