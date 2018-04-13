const model = require('../model');

exports.findAll = ({ search }) => model.project.findAll({ search });

exports.findOne = ({ id }) => model.project.findOne({ id });
