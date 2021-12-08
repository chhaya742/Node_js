var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chhaya",
  database: "mydatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO  employ (name, address ,qualification,designation,persent) VALUES ?";
  values=[['priyank', 'Highway 37','graduate','student','67%'],
  ['chhaya', 'siraliya','graduate','student','78%'],
  ['karuna', 'nanasa','graduate','student','89%'],
  ['mona', 'kannod','graduate','student','45%'],
  ['saloni', 'pune','graduate','student','99%'],
  ['jyoti', 'khategaon','graduate','student','45%'],
  ['roshni', 'banglore','graduate','student',"67%"],
  ['pooja', 'abcd','graduate','student','85'],
  ['sapna', 'uk','graduate','student','93%'],
  ['neha', 'delhi','graduate','student','34%'],
  ['yogita', 'kannod','graduate','student','74%']]
  con.query(sql,[values],function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});