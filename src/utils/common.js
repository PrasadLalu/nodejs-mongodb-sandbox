const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { default: status } = require('http-status');

const comparePassword = async (userPassword, dbPassword) => {
    return bcrypt.compare(dbPassword, userPassword);
}

const generateToken = async (payload) => {
    return jwt.sign(payload, 'secret', { expiresIn: '1h' });
}

const successResponse = (data) => {
    return {
        code: status.OK,
        status: 'Success',
        data,
    }
}

const createdResponse = (data, message) => {
    return {
        code: status.CREATED,
        status: status[status.CREATED],
        data,
        message,
    }
}

const conflictResponse = (message) => {
    return {
        code: status.CONFLICT,
        status: status[status.CONFLICT],
        message,
    }
}

module.exports = {
    comparePassword,
    generateToken,
    successResponse,
    createdResponse,
    conflictResponse,
}
