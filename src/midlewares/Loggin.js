

module.exports= class Loggin{
    constructor(loggin){
        this.isLogin = loggin;
    }
    IsLoggin =  (req, res, next) => {
        if(!this.isLogin){  
           return res.send('No puede acceder, debe logearse');    
        }       
        next();
    }
}