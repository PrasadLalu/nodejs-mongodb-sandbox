const actions = require('./role');
const { createdResponse, conflictResponse, successResponse } = require('../../utils/common');

const create = async (payload) => {
    const { name } = payload;

    const existingRole = await actions.findOne({ name });
    if (existingRole) {
        return conflictResponse('Role Already Created.');
    }

    const role = await actions.create(payload);
    return createdResponse(role);
}

const findAll = async() => {
    const query = { is_deleted: false };
    const roles = await actions.findAll(query);
    return successResponse(roles);
}

module.exports = {
    create,
    findAll,
};
