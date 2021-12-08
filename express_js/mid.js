module.exports=checkulr=(req,res,next)=>{
    console.log("current url is ",req.originalUrl);
    next();
  
  }