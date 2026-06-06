const express = require("express");

const app = express();

app.use(express.json());

let books = [];

app.get("/books", (req,res) => {
    res.json(books);
});

app.get("/books/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id)
    

    res.json({
        message:"The book is: ",
        book
    });
});

app.post("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, author} = req.body;

    const book = { id, title, author};

    books.push(book);
    res.status(200).json({
        message: "book added",
        book
    });
});

app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, author} = req.body;

    const book = books.find(book => book.id === id);

    book.title = title;
    book.author = author;

    res.json({
        message: "book updated",
        book
    });
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, author} = req.body;

    const book = books.find(book => book.id === id);

    if(!book){
        return res.json({
            message: "Book not found",
        });
    }

     books = books.filter(book => book.id !== id);
     res.json({
        message: "book deleted",
        books
     });

});

app.listen(3000, ()=>{
    console.log("Running on port:3000");
});