const express=require("express");
const app=express();
const router=express.Router();
const mid=require("./mid")
// express.use(checkulr)
app.use("/",router)
app.get("/",(req,res)=>{
//res.send("this is home page")
    res.sendFile(__dirname+"/home.html")
  
});
router.get("/login",mid,(req,res)=>{
// res.send("this is login page")
    res.sendFile(__dirname+"/login.html")

});
router.get("/about",mid,(req,res)=>{
//   res.send("this is about page")
    res.sendFile(__dirname+"/about.html")
  
});

app.listen(3000,"localhost",()=>{
  console.log('ok');
})