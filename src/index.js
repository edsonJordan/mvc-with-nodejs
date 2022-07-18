const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');
const path = require('path');

app.set('views', path.join(__dirname, 'views/user/'))
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send('Bienvenido');
})
app.use('/users',users)


app.listen(port, (req, res)=>{
        //console.log("Comenzamos un proyecto en Express");
})