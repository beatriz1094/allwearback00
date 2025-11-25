const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const escolhido = await prisma.escolhido.create({
            data: req.body
        });
        return res.status(201).json(escolhido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const createMany = async (req, res) => {
    try {
        const escolhido = await prisma.escolhido.createMany({
            data: req.body
        });
        return res.status(201).json(escolhido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const escolhidos = await prisma.escolhido.findMany({
        include: {
            escolha: true,
            roupa: true
        }
    });
    return res.json(escolhidos);
}

const readOne = async (req, res) => {
    try {
        const escolhido = await prisma.escolhido.findUnique({
            where: {
                id: Number(req.params.id)
            }, include: {
                escolha: true,
                roupa: true
            }
        });
        return res.json(escolhido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const escolhido = await prisma.escolhido.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(escolhido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.escolhido.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, createMany, read, readOne, update, remove };