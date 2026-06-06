const express = require("express");

const app = express();

app.use(express.json());


const students = [
    { id:1, name: "Rahul", course: "JS"},
    { id:2, name: "Rajesh", course: "TS"},
];

