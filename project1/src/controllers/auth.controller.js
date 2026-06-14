import prisma from "../prisma/client.js";
import {hashPassword} from "../utils/hash.js";
import { comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existing = await prisma.user.findUnique({ where: {email}});
        if (existing) {
            return res.status(400).json({message: "User already exists"});
        }
    

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            name,email,password:hashedPassword,
        },
    });

    res.status(201).json({
        id: user.id,
        email: user.email,
    });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({ where: {email}});

        if (!user){
            return res.status(401).json({ message: "Invalid credentials"})
        }

        const isMatch = await comparePassword( password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials"});
        }

        const token = generateToken(user.id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 7 *24 * 60 * 60* 1000,
        });

        res.json({
            message: "Logged in",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");

    res.json ({
        message : "Logged Out",
    });
};