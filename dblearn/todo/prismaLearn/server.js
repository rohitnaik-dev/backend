const express = require("express");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const app = express();

app.use(express.json());

/*
    Create MariaDB adapter
*/
const dbUrl = new URL(process.env.DATABASE_URL);

const adapter = new PrismaMariaDb({
    host: dbUrl.hostname,
    port: Number(dbUrl.port) || 3306,
    user: dbUrl.username,
    password: decodeURIComponent(dbUrl.password),
    database: dbUrl.pathname.substring(1),
});

/*
    Prisma Client
*/
const prisma = new PrismaClient({
    adapter,
});

/*
    Routes
*/

app.get("/", (req, res) => {
    res.send("API working");
});

/*
    Get all users
*/
app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        res.json(users);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

/*
    Get single user
*/
app.get("/users/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.user.findUnique({
            where: { id },
        });

        res.json(user);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

/*
    Create user
*/
app.post("/users", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const user = await prisma.user.create({
            data: {
                name,
                email,
                age,
            },
        });

        res.json(user);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

/*
    Update user
*/
app.put("/users/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const updatedUser = await prisma.user.update({
            where: { id },
            data: req.body,
        });

        res.json(updatedUser);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

/*
    Delete user
*/
app.delete("/users/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        await prisma.user.delete({
            where: { id },
        });

        res.json({
            message: "User deleted",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: error.message,
        });
    }
});

/*
    Start Server
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});