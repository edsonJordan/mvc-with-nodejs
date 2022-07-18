//conection mysq
const connection = require('../database/Connection');

//conection mongodb
const User = require('../models/User');

module.exports = class UserModel{
    constructor(){
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getAge(){
        return this.name;
    }
    setAge(age){
        this.age=age;
    }
    setAttributes(name, age){
        this.name=name;
        this.age=age;
    }
    getAttributes(){
        const name = this.name;
        const age = this.age;
        return {name, age};
    }
    updateUser=()=>{
        // conection mysql
        /* const sql = `update persons set name='${this.name}', age='${this.age}' where id='${this.id}'`
        connection.query(sql, (err)=>{
            if(err){
                return true
            }
                return false       
        }) */
        // conection mongodb

        User.findByIdAndUpdate({_id:this.id}, {name:this.name, age:this.age}, (err)=>{
            if(err){
                return true
            }
                return false       
        })
    }
    destroy=()=>{
        //conection mysql
        /* const sql = `delete from persons where id=${this.id}`;
        connection.query(sql, (err)=>{
            if(err){
                return console.log("Ocurrio un error");
            }
                return console.log("datos eliminados correctamente");       
        }) */
        // conection mongodb
        User.deleteOne({_id: this.id}, (err)=>{
            if(err){
                return console.log("Ocurrio un error");
            }
                return console.log("datos eliminados correctamente");       
        })
    }
    save(){            
        /* const sql = `INSERT INTO persons (name, age) VALUES ('${this.name}', '${this.age}')`;
        connection.query(sql, (err)=>{
            if(err){
                return true
            }
                return false
                        
        }) */

        //mongodb database
        const user = new User({
            name: this.name,
            age :  this.age
        })
        user.save((err, result)=>{
            if(err){
                console.log("error " + err.stack);
            }else{
                console.log("datos guardadas");
            }
            
        }) 
    }
    showUsers = (callback) =>{
        //conection mysql
        /* const sql = "select * from persons";     
        connection.query(sql, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        }) */
        //conection mongodb
        User.find({}, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        })
    }
    searchUser= (callback)=>{
        // conection mysql
        /* const sql = "select * from persons where id=?";
        const idPerson = this.getId();
        connection.query(sql, idPerson, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        }) */
        // conection mongodb        
        User.find({_id: this.id}, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        }) 
    }    
    createUser = (data)=>{
        //mysql data base
        /* const sql = `INSERT INTO persons (name, age) VALUES ('${data[0]}', '${data[1]}')`;
        connection.query(sql, (err)=>{
            if(err){
                console.log("error " + err.stack);
            }else{
                console.log("datos guardadas");
            }
            
        })   */
        //mongodb database
        const user = new User({
            name: data[0],
            age :  data[1]
        })
        user.save((err, result)=>{
            if(err){
                console.log("error " + err.stack);
            }else{
                console.log("datos guardadas");
            }
            
        }) 
    }


}