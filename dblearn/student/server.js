const express = require("express");
require('dotenv').config();

const app = express();

const { PrismaClient } = require('@prisma/client')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const dbUrl = new URL(process.env.DATABASE_URL);
const adapter = new PrismaMariaDb({
    host: dbUrl.hostname,
    port: Number(dbUrl.port) || 3306,
    user: dbUrl.username,
    password: decodeURIComponent(dbUrl.password || ''),
    database: dbUrl.pathname.slice(1),
});

const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.get('/students', async(req, res) => {
    try {
        const students = await prisma.student.findMany();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

app.get('/student/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: {
                id,
            },
        });
        res.json(student);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

app.post('/student', async(req, res) => {
    try {
        const { name, city, age } = req.body;
        const student = await prisma.student.create({
            data: {
                name,
                city,
                age
            }
        });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

app.put('/students/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, city, age } = req.body;
        const student = await prisma.student.update({
            where: {
                id,
            },
            data: {
                name,
                city,
                age,
            },
        });
        res.json(student);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }   
});

app.delete('/students/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const deleteStudent = await prisma.student.delete({
            where: {
                id,
            },
        });
        res.json(deleteStudent);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
});

app.listen(3000, ()=>{
    console.log("Server running on port:3000");
    
})