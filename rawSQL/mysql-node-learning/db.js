const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend_learning",
});

connection.connect((err) => {
    if(err) {
        console.log("Database connection failed");
        return;
    }
    console.log("connected to MYSQL");
    
});

module.exports = connection;