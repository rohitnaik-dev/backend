const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Rohit" }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User added",
        users
    });
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User deleted",
        users
    });
});

app.listen(3000, () => {
    console.log("Running on port:3000");
});