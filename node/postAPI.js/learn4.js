const express = require("express");

const app = express();

app.use(express.json());

app.post("/search", (req,res) => {
    console.log(req.body.name);

    res.send("Data Received");
    
});

app.listen(3000, () => {
    console.log("Running on port: 3000");
    
});