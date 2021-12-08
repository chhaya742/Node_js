const app=require("app");
const router=app.Router();

router.get("/",(req,res)=>{
    var out=`<h2>welcom to course section</h2>`;
    out+=`<a href="/course"> </a> course index page<br>`
    out+=`<a href="/course/android_tutorial">Android Tutorial</a><br>`
    out+=`<a href="/course/appjs_tutorial">appJs Tutorial</a><br>`
    out+=`<a href="/course/mongodb_tutorial"> Mongodb Tutorial</a><br>`
   res.send(out);
});

router.get("/course",(req,res)=>{
    var out=`<h2>welcom to course section</h2>`;
    out+=`<a href="/course"> </a> course index page<br>`
    out+=`<a href="/course/android_tutorial">Android Tutorial</a><br>`
    out+=`<a href="/course/appjs_tutorial">appJs Tutorial</a><br>`
    out+=`<a href="/course/mongodb_tutorial"> Mongodb Tutorial</a><br>`
   res.send(out);
});


router.get("/android_tutorial",(req,res)=>{
    var out=`<h2>welcom to android tutorial</h2>`;
    out+=`<a href="/course"> </a> course index page<br>`
    out+=`<a href="/course/android_tutorial">Android Tutorial</a><br>`
    out+=`<a href="/course/appjs_tutorial">appJs Tutorial</a><br>`
    out+=`<a href="/course/mongodb_tutorial"> Mongodb Tutorial</a><br>`
   res.send(out);
});
router.get("/appjs_tutorial",(req,res)=>{
    var out=`<h2>welcom to appJs Tutorial</h2>`;
    out+=`<a href="/course"> </a> course index page<br>`
    out+=`<a href="/course/android_tutorial">Android Tutorial</a><br>`
    out+=`<a href="/course/appjs_tutorial">appJs Tutorial</a><br>`
    out+=`<a href="/course/mongodb_tutorial"> Mongodb Tutorial</a><br>`
   res.send(out);
});

router.get("/Mongodb_tutorial",(req,res)=>{
    var out=`<h2>welcom to Mongodb tutorial</h2>`;
    out+=`<a href="/course"> </a> course index page<br>`
    out+=`<a href="/course/android_tutorial">Android Tutorial</a><br>`
    out+=`<a href="/course/appjs_tutorial">appJs Tutorial</a><br>`
    out+=`<a href="/course/mongodb_tutorial"> Mongodb Tutorial</a><br>`
   res.send(out);
});
module.exports=router;
