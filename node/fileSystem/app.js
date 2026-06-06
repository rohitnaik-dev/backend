const fs = require("fs");

fs.writeFileSync("test.txt", "Hey Rohit");
fs.appendFileSync("test.txt", "\nI Like Bangdo");
const data = fs.readFileSync("test.txt", "utf8");

console.log(data);

// fs.unlinkSync("test.txt");   //this will delete the file created