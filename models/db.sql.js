const mysql = require('mysql');
const dbConfig = require("../config/db.config")


// create a connection to the database sever
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
});

///open mysql connection
connection.connect((err)=>{
    if(err != null){
        console.log("err");
        return
    }
    console.log("Successfully connected to the database...");
})

module.exports = connection;