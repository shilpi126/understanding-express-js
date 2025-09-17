
//creating server with express.
const express = require("express");

const app = express();

//middleware 1
app.use((req,res,next)=>{
    console.log("middleware 1");
    next();
})

//middleware 2
app.use((req,res,next)=>{
    console.log("middleware 2");
    res.send("<h1>Hello Express js</h1>")
})


app.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
    
});







// creating server with http.
//const http = require("http")
// const server = http.createServer(app);
// server.listen(3000)



