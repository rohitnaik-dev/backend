const express = require("express");

const app = express();


const users = [
    {name: "Raj", age: 24},
    {name: "Rohit", age: 26},
];

app.get("/users", (req, res) => {
    res.json(users)
});

app.listen(3000, ()=> {
    console.log("Running on port:3000");
    
});