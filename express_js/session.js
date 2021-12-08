const express=require("express")
const app=express();
const bodyparser=require("body-parser");
const cookie=require("cookie-parser");
const session=require("express-session");
const ejs=require("ejs");
const bodyParser = require("body-parser");
const { json, urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");

// set ajs
app.set("view engine",'ejs');
app.set("view","./profile");

// set body_paarser

app.use("bodyParser",json());
app.use("bodyParser",urlencoded({extended:true}))

// cookie parser setup
app.use(cookieParser());
app.use(session({secret:"{~yK>%4rDh?]bHA7"}));

// routing

app.get("/",(req,res)=>{
    res.send("welcome y my home page")
});
app.get("/session_test",(req,res)=>{
    if(req.session.count){
        req.session.count++;
        res.send("count:",+req.session.count);}
        else{
            req.session.count=1;
            res.send("welcon first time.count:"+req.session.count)
    
        }
});
app.listen(3000,()=>{
    console.log("done");
    
})