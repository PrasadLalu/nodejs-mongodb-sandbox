const Role = require('../models/role');

const create = async (req, res) => {
    try {
        const { name, description } = req.body;

        const role = await Role.create({
            name,
            description,
        });
        return res.send({ data: role });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const findAll = async (req, res) => {
    try {
        const roles = await Role.find({
            is_deleted: false,
        });
        return res.send({ data: roles });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

module.exports = {
    create,
    findAll,
}