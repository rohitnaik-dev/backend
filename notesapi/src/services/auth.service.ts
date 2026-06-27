import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

export const registerUser = async (email: string, password: string) => {
    const existingUser = await prisma.user.findUnique(
       {where: {email},}
    );
    if (existingUser) {
        throw new Error(`User already exists`)
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data:{
            email,
            password: hashedPassword, 
        },
    });

    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET as string,
        { expiresIn: '7d'},
    );

    return {
        user: {id: user.id, email: user.email},
        token,
    }
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique(
        {where: {email}},
    );
    if (!user) {
        throw new Error('Invalid Credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET as string,
        { expiresIn: '7d'}
    );

    return{
        user: { id: user.id, email: user.email},
        token,

    };
};