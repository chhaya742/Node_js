const knex=require("knex")({
    client:'mysql',
    connection:{
    host:'localhost',
    user:'root',
    password:'Chhaya',
    database:'shop'}
    });
car=[{ name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 }
]

knex('car').insert(car).then(()=>{
    console.log("inserted data");

}).catch((err)=>{
    console.log("erroe");throw err;
}).finally(()=>{
    knex.destroy()
});

