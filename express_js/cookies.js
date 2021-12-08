const express=require("express");
const app =express();
// const bodyparser=require("body-parser");
const cookieparser=require("cookie-parser")

// body parser
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));

// cookie parser
app.use(cookieparser());

// routing


// //  without module

app.get("/",(req,res)=>{
    res.send("hello ")
});

app.get("/set-cookie",(req,res)=>{
    // res.setHeader("set-cookie","name=chhaya")
    res.cookie("name","chhaya")
    res.send("set cookie")

});
app.get("/get-cookie",(req,res)=>{
    // res.cookie("name","chhaya bagwan")
    res.send("get_cookie")
 });
app.get("/del-cookie",(req,res)=>{
    res.send("del-cookie")
});
app.listen(4000,"localhost",()=>{
    console.log("ok");
});
