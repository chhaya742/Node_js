
// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     user : 'root',
//     password : 'Chhaya',
//     database : 'custmor'
//   }
// });
// knex.schema.createTable('car',(table)=>{
// table.increments('id')
// table.string('name')
// table.integer('price')
// }).then(() => console.log("table created"))
// .catch((err) => { console.log(err); throw err })
// .finally(() => {
//   knex.destroy();
// });




const options = {
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Chhaya',
      database: 'shop'
  }
}

const knex = require('knex')(options);

knex.schema.createTable('car ', (table) => {
  table.increments('id')
  table.string('name')
  table.integer('price')
}).then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });






