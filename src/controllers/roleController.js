const Role = require('../models/role');
const roleService = require('../services/role/role-service');

const create = async (req, res) => {
    try {
        const result = await roleService.create(req.body);
        return res.status(result.code).send(result);
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const findAll = async (req, res) => {
    try {
        const result = await roleService.findAll();
        return res.status(result.code).send(result);
    } catch (error) {
        return res.send(500).send({ error });
    }
}

module.exports = {
    create,
    findAll,
}