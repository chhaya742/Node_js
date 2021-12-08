
// var express = require('express')
// var app= express();

// const middleware=(req,res,next)=>{
//   console.log("hello my middleware");
// next();
// }
// app.use(middleware)
// app.get("/",(req,res)=>{
//   res.send("helo this is my server")
// })

// app.get("/about",middleware,(req,res)=>{
//   res.send("helo this is my server")
// })

// app.listen(3000,"localhost",()=>{
  // console.log("ok");
// })

// const express=require("express");
// const app=express();
// const checkulr=(req,res,next)=>{
//   console.log("current url is ",req.originalUrl);
//   next();

// }
// app.use(checkulr)
// app.get("/",(req,res)=>{
//   res.send("this is home page")
  
// });
// app.get("/login",(req,res)=>{
//   res.send("this is login page")
  
// });
// app.get("/about",(req,res)=>{
//   res.send("this is about page")
  
// });
// app.listen(3000,"localhost",()=>{
//   console.log('ok');
// })