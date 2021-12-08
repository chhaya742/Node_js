const knex=require("knex")({
    client:"mysql",
    connection:{
        user:'root',
        password:"Chhaya",
        database:"shop"
    }
});
knex.from("car").select('name','price').where('price','>','50000').then((rows)=>{
    for  (row of rows){
    console.log(`${row['name']} ${row['price']}`);}
}).catch((err)=>{
    console.log(err);throw err
});

