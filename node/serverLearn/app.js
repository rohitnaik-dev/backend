const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/users")  {
        const users = [
            {name: "rohit", age: 24},
            {name: "Ajay", age: 24},
        ];

        res.end(JSON.stringify(users));
        
    } else {
        res.end("Page not found");
    }
});

let port = 3000;
server.listen(3000, () => {
    console.log("Server running on port "  +  port+ ".");
    
})

