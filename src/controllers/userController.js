const User = require('../models/user');

const findAll = async (req, res) => {
    try {
        const users = await User.find({
            is_deleted: false,
        }).populate('role').sort({ 'updatedAt': -1 }).exec();

        return res.send({ data: users });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            _id: id,
            is_deleted: false,
        }).populate('role').exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }
        return res.send({ data: user });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body
        let user = await User.findOne({
            _id: id,
            is_deleted: false,
        }).populate('role').exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }
        user = await User.findByIdAndUpdate(id, {
            name,
        }, { new: true });
        return res.send({ data: user });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await User.findOne({
            _id: id,
            is_deleted: false,
        }).populate('role').exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }
        user = await User.findByIdAndUpdate(id, {
            is_deleted: true
        }, { new: true });
        return res.send({ data: user });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

module.exports = {
    findAll,
    findById,
    updateById,
    deleteById,
};
