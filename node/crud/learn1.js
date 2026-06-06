const express = require("express");

const app = express();

app.use(express.json());

const users = [];

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json(user);

});

app.post("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const {name} = req.body;

    if(isNaN(id) || !name) {
        return res.status(400).json({
            message: "Enter id and name"
        });
    }
    const newUser = {id, name};

    users.push(newUser)
    res.json({
        message: "New User added",
        users
    });
});

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const {name} = req.body;

    const user = users.find(user => user.id === id);
    
    if (!user) {
        return res.status(404).json({
            message:"User not found"
        });
    }

    if(!name) {
        return res.status(400).json({
            message: "name is required"
        });
    }

    user.name = name;
    res.json({
        message: "User updated",
        user
    });
});

app.delete("/users/:id", (req,res) => {
    const id = parseInt(req.params.id);

    const {name} = req.body;

    const userIndex = users.find(user => user.id === id);

    if(userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users = users.filter(user => user.id !== id);
    res.json({
        message: "User deleted",
        users
    });
});

app.listen(3000, ()=>{
    console.log("Running on port:3000");
});