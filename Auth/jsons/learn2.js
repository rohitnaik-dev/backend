const jwt = require("jsonwebtoken");

const payload = {
    id: 101,
    email: "user@example.com",
    role: "admin"
};

const SECRET_KEY = "mysecretkey";

const token = jwt.sign()
