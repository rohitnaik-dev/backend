import prisma from "../prisma/client.js";

export const getProfile = async (req, res) => {
    const user = await prisma.user.findUnique({ where: {id: req.user.userId}, select: {id: true, name:true, email:true}});
    res.json(user);
};

export const updateProfile = async (req, res) => {
    const {name} = req.body;

    const user = await prisma.user.update({where: {id: req.user.userId}, data: {name}});
    res.json(user);
}