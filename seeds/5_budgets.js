const { budget } = require('../src/api/manager');
const { budgetPrefix } = require('../src/api/model/project');

exports.seed = (knex, Promise) => Promise.all([
    budget.deleteBudget("budget-de-la-citadelle")
        .then(response => budget.createBudget("Budget de la Citadelle", "Budget global du mouvement"))
        .then(response => Promise.all([
            budget.createSector("budget-de-la-citadelle", "Projets"),
            budget.createSector("budget-de-la-citadelle", "Infrastructure"),
        ])),
    budget.deleteBudget(`${budgetPrefix}-craftcamp`)
        .then(response => budget.createBudget("Budget Projet craftcamp", "Budget du projet CraftCamp"))
        .then(response => Promise.all([
            budget.createSector(`${budgetPrefix}-craftcamp`, "Infrastructure"),
        ])),
    budget.deleteBudget(`${budgetPrefix}-medievistes`)
        .then(response => budget.createBudget("Budget Projet medievistes", "Budget du projet Medievistes"))
        .then(response => Promise.all([
            budget.createSector(`${budgetPrefix}-medievistes`, "Infrastructure"),
        ])),
]);
