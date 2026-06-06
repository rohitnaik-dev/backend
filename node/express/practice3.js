const express = require("express");

const app = express();

app.use(express.json());


const products = [
    {id: 1, name: "laptop"},
    {id: 2, name: "charger"},
];

app.post("/products", (req, res) => {
    const addProduct = req.body;

    products.push(addProduct);

    res.json({
        message: "New product has been added",
        products
    })
});

app.listen(3000, ()=>{
    console.log("Running on port:3000");
    
});