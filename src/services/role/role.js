const Role = require('../../models/role');

exports.create = (payload) => Role.create(payload);
exports.findAll = (query) => Role.find(query);
exports.findOne = (query) => Role.findOne(query);
