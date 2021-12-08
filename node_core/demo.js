// var http = require("http");
// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

// const { prototype } = require("events")
// var http=require("http")
// http.createServer(function(req,res){
//    res.end("hello")})
// (5000,()=>{
//    console.log("listening response")
// })


// const sql=require("mysql")
// con=createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Chhaya',
// database:'chhaya'});

// con.connect(function(err){
//     if (err) throw err;
//     console.log('connected');
//     mysql=('create table name (name),(address)')
//     con.query(mysql,function(err,result){
//         if (err) throw  err;
//         console.log('table created');
//     });

// });

// const mysql=require("mysql")
// con=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Chhaya',
//     database:'nikhil'
// })
// con.connect((err)=>{
//     if (err) throw err;
//     console.log("connected:");
//     con.query("CREATE TABLE mydata (name VARCHAR(225),address VARCHAR(225))",function(err,result){
//         if (err) throw err;
//         console.log("created table");
//     })
    

// })

// const fs=require("fs")
// const http=require("http")
// const server=http.createServer();
// server.on("request")

// CEATE SERVER


// const  http=require("http");
// http.createServer(function(req,res){
//     console.log("HIT ON THE SERVER");
//     res.write("hello world my name is chhaya");
//     res.end();
// }).listen(3005,"localhost");


// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("hello from node server")
//     res.end();
//     console.log("yes");
// }).listen(3000,"localhost",()=>{
//     console.log("ok");
// });

const fs=require("fs")
// fs.writeFileSync("chaya.js","sdfgertertyrety")
// console.log("ok",__dirname);
