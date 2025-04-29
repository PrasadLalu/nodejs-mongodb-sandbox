const User = require('../models/user');
const common = require('../utils/common');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });
        return res.send({ data: user });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).send({ message: 'Unauthorized user.' });
        }

        // match password
        const isMatched = await common.comparePassword(user.password, password);
        if (!isMatched) {
            return res.status(401).send({ message: 'Unauthorized user.' });
        }
        const token = await common.generateToken({
            _id: user._id,
            email: user.email,
        });
        user['password'] = undefined;
        
        return res.send({ data: user, token });
    } catch (error) {
        return res.send(500).send({ error });
    }
}

module.exports = {
    login,
    register,
};
