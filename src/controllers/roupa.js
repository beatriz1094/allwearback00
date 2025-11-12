const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const roupa = await prisma.roupa.create({
            data: req.body
        });
        return res.status(201).json(roupa);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const roupa = await prisma.roupa.findMany();
    return res.json(roupa);
}

const readOne = async (req, res) => {
    try {
        const roupa = await prisma.roupa.findUnique({
            select: {
                id: true,
                tipo: true,
                descricao: true,
                usuario: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(roupa);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const roupa = await prisma.roupa.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(roupa);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.roupa.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };