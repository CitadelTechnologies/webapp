const manager = require('../manager');

module.exports = {
    budgets: () => manager.budget.getBudgets(),
    budget: ({ slug }) => manager.budget.getBudget(slug),
    projects: ({ search }) => manager.project.findAll({ search }),
    project: ({ id }) => manager.project.findOne({ id }),
    users: ({ search }) => manager.user.findAll({ search }),
    user: ({ id }) => manager.user.findOne({ id }),
    me: ({ accessToken }) => manager.user.getUserByAccessToken({ accessToken }),
    addTransaction: ({ input }) => manager.budget.addTransaction({ input }),
};
