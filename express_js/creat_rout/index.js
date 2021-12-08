const app=require("app");
const app= app();

const courses= require("./course")
app.use("/course",courses)

app.get("/",(req,res)=>{
    res.send("welcom to tech tutorial")

});
app.listen(8000,"localhost",()=>{
    console.log("done");
});

