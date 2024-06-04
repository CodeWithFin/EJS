import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
});

var d = new Date();
var day = getDay();
console.log(day);









app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});