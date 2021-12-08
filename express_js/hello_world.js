var express= require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! this is my home page");
});
app.get("/about",(req,res)=>{
    res.send("this is my about page")


});
app.listen(3002,"localhost",()=>{
    console.log("ok its done");
});
