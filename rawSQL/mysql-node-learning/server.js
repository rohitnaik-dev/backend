const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/users", (req, res) => {
    const query = "SELECT * FROM users";

    db.query(query, (err, result) => {
        if(err){
            res.status(500).send(err);
            return;
        }
        res.json(result);
    })
})

app.post("/users", (req, res) => {
    const {name, email, age} = req.body;
    const query = "INSERT INTO users (name, email, age) VALUES(?, ?, ?)";

    db.query(query, [name, email, age], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.json({
            message :"User created",
            
        });
    });
} );
app.listen(3000, ()=> {
    console.log("Server running on port:3000");
    
});