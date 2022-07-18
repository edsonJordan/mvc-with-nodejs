module.exports= class Config{
    constructor(host, userDb, database, password) {
        this.host= host;
        this.userDb=userDb;
        this.database=database;
        this.password=password;
    }
    setConfig(host, userDb, nameDb, password){
        this.host= host;
        this.userDb=userDb;
        this.database=nameDb;
        this.password=password;
    }
    getConfig(){
        return {host:this.host, user:this.userDb, password:this.password, database:this.database};
    }
}