const models = require('../models');

module.exports = {
  projects: ({ search }) => models.projects.findAll({ search }),
  project: ({ id }) => models.projects.findOne({ id }),
  users: ({ search }) => models.users.findAll({ search }),
  user: ({ id }) => models.users.findOne({ id }),
};
