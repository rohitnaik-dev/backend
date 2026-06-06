const http = require("http");

const user = [
    {name:"ROhit"},
    {name:"Aman"},
]
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("WELCOME");
    } else if (req.url === "/user" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(user));
    }  else {
        res.end("page not found");
    }
});

server.listen(3000, () => {
    console.log("Server on port 3000");
    
})