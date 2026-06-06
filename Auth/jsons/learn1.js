const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        uderId: 1,
        email: "rohit@gmail.com"
    },
    "secretkey",
    {
        expiresIn: "1d"
    }
);

console.log(token);
