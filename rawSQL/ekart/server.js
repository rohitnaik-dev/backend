const express = require("express");

const db = require("./db");
const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
    const query = "SELECT * FROM products";
    db.query(query, (err, result) => {
        if(err) {
            res.status(500).json(err);
            return
        }
        res.json({
            message: "Theseare the products: ",
            result
        });
    });
});

app.post("/products", (req, res) => {
    const {title, price, stock} = req.body;
    const query = "INSERT INTO products (title, price, stock) VALUES (?,?,?)";
    db.query(query,[title, price, stock],(err, result) => {
        if(err) {
            res.status(500).json(err)
            return
        }
        res.json({
            message: "Product added",
            result
        });
    });
});

app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const query = "DELETE FROM products Where id = " + id+"";

    db.query(query, [id], (err,result) => {
        if(err) {
            res.status(500).json(err)
            return
        }
        res.json({
            message:"Product deleted"
        });
    });
});

app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const {title, price, stock} = req.body;
        const query = `
        UPDATE products
        SET title = ?, price = ?, stock = ?
        WHERE id = ?
    `;
    
    db.query(query, [title, price, stock, id], (err, result) => {
        if(err) {
            res.status(500).json(err)
            return;
        }

        res.json({
            message: "Product updated"
        });
    });
});

app.listen(3000, ()=> {
    console.log("Server running on port:3000");
    
})