module.exports = class Config{
    constructor(host, userDb, database, password, port = null) {
        this.host= host;
        this.userDb=userDb;
        this.database=database;
        this.password=password;
        this.port=port;
    }
    setConfig(host, userDb, nameDb, password, port){
        this.host= host;
        this.userDb=userDb;
        this.database=nameDb;
        this.password=password;
        this.port=port;
    }
    mySql(){
        return {host:this.host, user:this.userDb, password:this.password, database:this.database};
    }
    mongDb(){
        return `mongodb://${this.host}:${this.port}/${this.database}`;
    }
}
