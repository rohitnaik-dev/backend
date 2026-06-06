const http = require("http");

const about = [{about: "Yes"}];
const contact = 9945566683;

const server = http.createServer((req, res) => {
    if ( req.url === "/" && req.method === "GET") {
        res.end("Hello, Welcome");
    } else if (req.url === "/about" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(about));
    } else if (req.url === "/contact" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(contact))
    } else {
        res.end("path Not found");
    }
});

server.listen(3000, () => {
    console.log("The server is running on port 3000");
    
});