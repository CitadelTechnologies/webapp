const model = require('../model');

exports.findAll = ({ search }) => model.project.search({ search });

exports.findOne = ({ id }) => model.project.findOne({ id });
