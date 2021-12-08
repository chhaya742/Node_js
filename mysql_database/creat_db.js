const sql=require("mysql")
con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'Chhaya'

})
con.connect(function(err){
    if (err) throw err;
        console.log("concted");
        con.query("create database shop",function(err,result){
            if (err) throw err;
            console.log('create database');
        })
})