const express = require("express")

const db = require("./db")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Working");
});

//GET user by ID
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const query = "SELECT * FROM users WHERE id = "+id+"";

    db.query(query, [id],(err, result) =>{
        if(err) {
            res.status(500).json(err)
        }

        res.json({
            message: "Found User",
            result
        });
    });
});

//GET user age > 20
app.get("/users/age/:age", (req, res) =>{
    const age = Number(req.params.age);
    const query = "SELECT * FROM users WHERE age > "+age+"";

    db.query(query, age, (err, result) => {
        if(err){
            res.status(500).json(err)
            return
        }

        res.json({
            message: "The user with more tha age "+age+" are:",
            result
            
        });
    });
});


//GET users by city
app.get("/users/city/:city", (req, res) => {
    const city = req.params.city;

    const query = "SELECT * FROM users WHERE city = ?";

    db.query(query, [city], (err, result) => {
        if(err){
            res.status(500).json(err);
            return
        }

        res.json({
            message:"users from " + city + " are :",
            result
        });
    });
});
app.listen(3000, ()=>{
    console.log("Server running on port:3000");
});