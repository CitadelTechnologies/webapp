const { budget } = require('../src/api/managers');

exports.seed = (knex, Promise) => budget.deleteBudget("budget-de-la-citadelle")
    .then(response => budget.createBudget("Budget de la Citadelle", "Budget global du mouvement"))
    .then(response => Promise.all([
        budget.createSector("budget-de-la-citadelle", "Projets"),
        budget.createSector("budget-de-la-citadelle", "Infrastructure"),
    ]))
;
