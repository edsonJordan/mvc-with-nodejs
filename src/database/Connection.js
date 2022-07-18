const mysql = require('mysql');
const mongoose = require('mongoose')
const config = require('./Config');
const DB = new config("localhost", "root", 'practica_nodejs', "", 27017);

//conecction databse mysql

/* const connection = mysql.createConnection(DB.mySql());
 connection.connect((err, conn)=>{
   if(!err){
    return console.log("conexion a bd exitosa");
   }
    return console.log("Error conexion a bd"+ err);
}) */

//conection database mongoDb

const connection = mongoose.connect(DB.mongDb())
.then((db)=>{
    console.log("conexion a bd exitosa");
}).catch((err)=>{
    console.log('ha ocurrido un error');
});



module.exports = connection