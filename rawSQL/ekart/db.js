const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    database: "ekart"
});

connection.connect((err) => {
    if(err) {
        console.log("Error in DB Connection");
        return
    }
    console.log("Connected to DB"); 
});

module.exports = connection;