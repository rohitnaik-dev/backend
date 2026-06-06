const express = require("express");

const app = express();

app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
    const {id, name} = req.body;

    if (!id || !name) {
        return res.status(400).json({
            message: "id and name required"
        });
    }

    const newUser = {id, name};
    users.push(newUser);

    res.status(201).json({
        message: "User added",
        user: newUser
    });
});

app.listen(3000, ()=> {
    console.log("Server running on port:3000");
    
})