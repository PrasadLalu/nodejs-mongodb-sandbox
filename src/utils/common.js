const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const comparePassword = async (userPassword, dbPassword) => {
    return bcrypt.compare(dbPassword, userPassword);
}

const generateToken = async(payload) => {
    return jwt.sign(payload, 'secret', { expiresIn: '1h'});
}

module.exports = {
    comparePassword,
    generateToken,
}
