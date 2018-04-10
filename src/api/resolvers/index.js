const models = require('../models');
const budgetManager = require('../managers/budgets');

module.exports = {
    budget: ({ slug }) => budgetManager.getBudget(slug),
    projects: ({ search }) => models.projects.findAll({ search }),
    project: ({ id }) => models.projects.findOne({ id }),
    users: ({ search }) => models.users.findAll({ search }),
    user: ({ id }) => models.users.findOne({ id }),
};
