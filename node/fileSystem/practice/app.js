const fs = require("fs");

fs.writeFileSync("rohit.txt", "[90, 94, 96, 93, 92]");

const data = fs.readFileSync("rohit.txt", "utf8");

console.log(data);

// fs.unlinkSync("rohit.txt");