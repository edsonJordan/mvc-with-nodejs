const mysql = require('mysql');
const config = require('./Config');
const DB = new config("localhost", "root", 'practica_nodejs', "");

const connection = mysql.createConnection(DB.getConfig());

connection.connect((err, conn)=>{
   if(!err){
    return console.log("conexion a bd");
   }
    return console.log("Error conexion a bd");
})
/* try {
    connection
} catch (err) {
    console.log("error al conectarse");
}
 */
module.exports = connection