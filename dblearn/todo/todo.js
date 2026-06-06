const express = require("express");
require('dotenv').config();

const app = express();
const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

// Parse database URL for the driver adapter
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

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    res.json(users)
});

app.get('/users/:id', async (req, res) => {
    const id = Number(req.params.id);

    const user = await prisma.user.findUnique({
        where: { id }
    })
    res.json(user)
});

app.post('/users', async (req, res) => {
    const { name, email, age } = req.body

    const user = await prisma.user.create({
        data: {
            name, email, age
        }
    })

    res.json(user)

})

app.put('/users/:id', async (req, res) => {
    const id = Number(req.params.id);

    const updateUser = await prisma.user.update({
        where: { id },
        data: req.body
    });

    res.json(updateUser)
})

app.delete('/users/:id', async (req, res) => {
    const id = Number(req.params.id);

    await prisma.user.delete({
        where: { id }
    })

    res.json({ message: "user deleted" })
});

app.listen(3000, () => {
    console.log("Runnng on port:3000");
});