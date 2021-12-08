const express=require("express");
var app=express();

app.use(app.static(__dirname+"/public"));
app.use(app.static(__dirname+"/image"));
app.get("/getmethod",(req,res)=>{
    res.send('get is called');
})
app.listen(3000,"localhost",()=>{
    console.log("ok");
})