const models = require('../models');
const manager = require('../managers');

module.exports = {
    budget: ({ slug }) => manager.budget.getBudget(slug),
    projects: ({ search }) => models.projects.findAll({ search }),
    project: ({ id }) => models.projects.findOne({ id }),
    users: ({ search }) => models.users.findAll({ search }),
    user: ({ id }) => models.users.findOne({ id }),
    me: ({ accessToken }) => manager.user.getUserByAccessToken({ accessToken }),
};
