const model = require('../models/UserModel');
const connection = require('../database/Connection');
const UserModel = new model();
const users = [
    {id:1,  nombre: "edson", edad: 27},
    {id:2,  nombre: "juanito", edad: 17},
    {id:3,  nombre: "rubi", edad: 40}
];

module.exports = class UserController {
    constructor(){
    }
    index = (req, res)=>{
        UserModel.showUsers((result)=>{
            res.render('index', {persons: result});            
        });
    }
    create = (req, res)=>{        
        res.render('create');
    }
    store = (req, res)=>{
        UserModel.setName(req.body.name);
        UserModel.setAge(req.body.age);        
        UserModel.save();
        res.redirect('/users/');
    }
    edit = (req, res) =>{
        const idPerson = req.params.id;
        UserModel.setId(idPerson);
        UserModel.searchUser((result)=> {
            res.render('edit', {person: result});
        });
        //res.render('edit');
    }
    update = (req, res) =>{
        const idPerson = req.params.id;
        UserModel.setId(idPerson);
        UserModel.setName(req.body.name);
        UserModel.setAge(req.body.age);
        UserModel.updateUser();
        res.redirect('/users/');
        //res.render('index', {users: users})
    }
    delete = (req, res)=>{
        const userId = req.params.id;
        UserModel.setId(userId);
        UserModel.destroy();
        res.redirect('/users/');
    }
};