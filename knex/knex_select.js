// const { default: knex } = require("knex");

const knex=require('knex')({
    client:"mysql",
    connection:{
        host:'localhost',
        user:"root",
        password:"Chhaya",
        database:"shop"
    }
});
knex.from('car').select('*').then((rows)=>{
    for (row of rows){
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }

}).catch((err)=>{
    console.log('err');throw err;
})