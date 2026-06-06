const express = require("express");

const app = express();

app.use(express.json());

const user = 
    {email: "test@gmail.com"}
;

app.get("/contact", (req, res) => {
    res.send(user);
});

app.listen(3000, ()=>{
    console.log("Running on port:3000");

});