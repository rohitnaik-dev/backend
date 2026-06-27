import { Request, Response } from "express";
import * as authService from '../services/auth.service';

export const signup = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Email, Password is required"});
        }

        const result = await authService.registerUser(email, password);

        return res.status(201).json(result);
    } catch( error: any) {
        if (error.message === 'User already exists') {
            return res.status(409).json({error: error.messgae});
        }

        console.error('SignUp error: ', error);
        return res.status(500).json({error: 'Internal server error'});
        
    }
};

export const login = async (req: Request, res: Response) => {
    try{
        const{ email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: 'Email and password are required'});

        }

        const result = await authService.loginUser(email, password);
        return res.status(200).json(result);

    } catch (error) {
        if (error.message === 'Invalid credentials') {
            return res.status(401).json({error: error.message});
        }

        console.error('Login error: ', error);
        return res.status(500).json({ error: 'Internal server error '});
    }
};