// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Chhaya"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE database custmor", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chhaya",
  database: "mysqlcruddb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE employees (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255),qualification VARCHAR(255),designation VARCHAR(255),persent VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

