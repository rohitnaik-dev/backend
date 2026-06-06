const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end(req.url);
    } else if (req.url === "/home" && req.method === "GET") {
        res.end(req.url)
    } else {
        res.end("path not found");
    }
});

server.listen(3000, () => {
    console.log("You are on port 3000");
    
})