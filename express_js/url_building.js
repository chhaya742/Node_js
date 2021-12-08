// const app=require("app")
// const app=app();

// app.get("/",(req,res)=>{
//     res.send("welcom to my page")
// });

// app.get("/:id",(req,res)=>{
//     res.send("the id you specified is :-"+req.params.id)
// });
// app.get("/:course_name/course/:id",(req,res)=>{
//     res.send("course name:" +req.params.course_name+",id:"+req.params.id)
// });

// app.get("/massage/:phone_number([0-9]{10})",(req,res)=>{
//     res.send("massage to :"+req.params.phone_number)
// });


// app.get("/train/:fron-/:to",(req,res)=>{
//     res.send("massage to :"+req.params.phone_number)
// });

// app.get("*",(req,res)=>{
//     res.send("page not found")
// });

// app.listen(3000,"localhost",()=>{
    // console.log("ok");
// });



var express = require('express');
var port = 3000;
var app = express();

app.get('/name/:user_name', function(req,res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  res.end('<html><body>' +
    '<h1>Hello ' + req.params.user_name + '</h1>' +
    '</body></html>'
  );
});

app.get('*', function(req, res){
  res.end('Hello World');
});

app.listen(port, function(){
  console.log('The server is running, ' +
    ' please open your browser at http://localhost:%s',
     port);
});