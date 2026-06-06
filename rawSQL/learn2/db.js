const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend_learning"
});

connection.connect((err) => {
    if(err){
        console.log("Not connected to database");
        return
    }
    console.log("connected to DB");
    
});

module.exports = connection;