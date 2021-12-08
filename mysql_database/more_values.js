const { connect } = require("http2");
const sql=require("sql")
var con=sql({

    host:'localhost',
    user:'root',
    password:'Chhaya',
    database:'custmor'
});
con.connect((err)=>{
    if (err) throw err;
    console.log('connected')
    con.query('INSERT into chaya',(fun))
    

})