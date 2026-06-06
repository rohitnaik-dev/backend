const prisma = require ("../prisma/client");
const { hashPassword, comparePassword } = require("../utils/hash");
const generatetoken = require("../utils/generateToken");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: {email},
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
           data: {
            name,
            email,
            password: hashedPassword,
           },
        });

        const token = generateToken(user.id);

        res.status(201).json({
            success: true,
            messgae: "User created successfully",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try{
         const {email, password} = req.body;

         const user = await prisma.user.findUnique({
            where: { email },
         });

         if(!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
         }

         const isMatch = await comparePassword(password, user.password);

         if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
         }   
    }
}

