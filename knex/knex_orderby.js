const knex=require("knex")({
    client:"mysql",
    connection:{
        user:"root",
        password:'Chhaya',
        database:"shop"
    }
});
knex.from("car").select("name","price").orderBy("price",'desc').then((rows)=>{
    for (row of rows){
        console.log(`${row['name']} ${row["price"]}`);
    }
}).catch((err)=>{
    console.log(err); throw err
})