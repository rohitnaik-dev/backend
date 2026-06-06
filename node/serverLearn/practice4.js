const http = require("http");

const products = [
    { id: 1, name: "Laptop"},
    { id: 2, name: "Mouse"},
]
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Hello");
    } else if(req.url === "/products" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
});

server.listen(3000, () => {
    console.log("The server is running on port 3000");
    
});