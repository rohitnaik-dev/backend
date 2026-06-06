const express = require("express");

const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "Rohit"}
];

app.post("/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User added",
        users
    });
});

app.listen(3000);