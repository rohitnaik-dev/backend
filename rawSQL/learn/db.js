const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"backend_learning"
});

connection.connect((err) => {
    if (err) {
        console.log("Not connected to DB");
        return;
    }
    console.log("Connected to DB");

});

module.exports = connection;