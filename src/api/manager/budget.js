const gateway = require('../gateway/budget');
const model = require('../model');

exports.getBudgets = () => model.project.findAll({}).then(projects => {
    let promises = new Array(gateway.getBudget('budget-de-la-citadelle'));
    for (project of projects) {
        promises.push(gateway.getBudget(`${model.project.budgetPrefix}-${project.slug}`));
    }
    return Promise.all(promises);
}).then(budgets => budgets.filter(budget => (budget !== null)))
.catch(e => console.log(e));

exports.getBudget = slug => gateway.getBudget(slug);

exports.createBudget = (name, description) => gateway.createBudget(name, description);

exports.deleteBudget = slug => gateway.deleteBudget(slug);

exports.createSector = (budgetSlug, name) => gateway.createSector(budgetSlug, name);

exports.addTransaction = ({ input }) => gateway.addTransaction(input);
