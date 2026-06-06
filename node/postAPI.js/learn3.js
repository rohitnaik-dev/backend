const express = require("express");

const app = express();

app.use(express.json());

const users = [];
app.get("/users/:id", (req, res) => {
    res.json(users);
});

app.post("/user/:id", (req, res) => {

    const id = parseInt(req.params.id);

    if( !id) {
        res.status(401).json({
            message: "Enter a proper ID"
        });
    }

    const 
})