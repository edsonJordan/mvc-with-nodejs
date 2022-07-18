const connection = require('../database/Connection')
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
        const sql = `update persons set name='${this.name}', age='${this.age}' where id='${this.id}'`
        connection.query(sql, (err)=>{
            if(err){
                return true
            }
                return false       
        })
    }
    destroy=()=>{
        const sql = `delete from persons where id=${this.id}`;
        connection.query(sql, (err)=>{
            if(err){
                return console.log("Ocurrio un error");
            }
                return console.log("datos eliminados correctamente");       
        })
    }
    save(){            
        const sql = `INSERT INTO persons (name, age) VALUES ('${this.name}', '${this.age}')`;
        connection.query(sql, (err)=>{
            if(err){
                return true
            }
                return false
                        
        })
    }

    showUsers = (callback) =>{
        const sql = "select * from persons";
        //console.log(connection);        
        connection.query(sql, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        })
    }
    searchUser= (callback)=>{
        const sql = "select * from persons where id=?";
        const idPerson = this.getId();
        connection.query(sql, idPerson, (err, result) =>{
            if(err){
                  console.log("ocurrio un error" + err);
            }               
             callback(result)
        })
    }
    
    createUser = (data)=>{
        const values = ["edson", 25]
        const sql = `INSERT INTO persons (name, age) VALUES ('${data[0]}', '${data[1]}')`;
        connection.query(sql, (err)=>{
            if(err){
                console.log("error " + err.stack);
            }else{
                console.log("datos guardadas");
            }
            
        })  
    }


}