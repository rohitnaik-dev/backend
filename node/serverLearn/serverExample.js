const http = require("http");

const users = [
    { name: "Uday", age: 61},
    { name: "shankar", age: 81},
];

const server = http.createServer((req, res) =>{
    if(req.url === "/" && req.method === "GET") {
        res.end("welcome Home");
    } else if (req.url === "/user" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(users));
    } else {
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
    
});