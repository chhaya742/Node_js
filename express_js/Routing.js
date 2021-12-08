
// const express = require('express');
// app=express();

// app.post("/",(req,res)=>{
//     res.send("get rout on thinks")
// });

// app.get("/",(req,res)=>{
//     res.send("get rout on thinks")
// });

// app.get("/about",(req,res)=>{
//     res.send("this is my about page")
// });

// app.get("/contact",(req,res)=>{
//     res.send("this is my contact page")
// });

// app.get("/temp",(req,res)=>{
//     res.send("this is my temp page\nahfksadhfaukfh")

// }).listen(5005,"localhost",()=>{
//     console.log("ok i listen");
// })

// // app.listen(5005,"localhost",()=>{
// //     console.log("ok i listen");
// // })


const express=require("express");
const app=express();
const router=express.Router();
const mid=require("./mid")
// express.use(checkulr)
app.use("/",router)
app.get("/",(req,res)=>{
  res.send("this is home page")
  
});
router.get("/login",mid,(req,res)=>{
  res.send("this is login page")
  
});
router.get("/about",mid,(req,res)=>{
  res.send("this is about page")
  
});

app.listen(3000,"localhost",()=>{
  console.log('ok');
});
