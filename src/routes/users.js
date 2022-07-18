const User = require("../controllers/UserController.js");
const Loggin = require("../midlewares/Loggin.js")
const express = require('express');

/* 
const conn = require('./database/Connection')

console.log(conn); */



const router = express.Router();
const UserController = new User();
const MiddlewareLoggin = new Loggin(true);

router.get('/',  [MiddlewareLoggin.IsLoggin], UserController.index);

router.get('/create', MiddlewareLoggin.IsLoggin, UserController.create);
router.post('/store', UserController.store);
router.get('/edit/:id',  UserController.edit);
router.post('/update/:id', UserController.update);
router.get('/delete/:id', UserController.delete);



module.exports=router;