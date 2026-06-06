const express = require("express");

const app = express();

app.use(express.json());
const products = [];
app.post("/products", (req,res) => {

    const { id, name} = req.body;

    if (!id || !name) {
        return res.status(400).json({
            message: "Enter proper id and name"
        });
    }

    const newProduct = {id, name};
    products.push(newProduct);
    
    res.status(201).json({
        message:"Product added",
        products: newProduct
    });
});

app.listen(3000, ()=> {
    console.log("Server running on port:3000");
    
})