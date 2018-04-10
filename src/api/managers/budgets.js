const gateway = require('../gateways').budget;

exports.getBudget = slug => gateway.getBudget(slug);

exports.createBudget = (name, description) => gateway.createBudget(name, description);

exports.deleteBudget = slug => gateway.deleteBudget(slug);

exports.createSector = (budgetSlug, name) => gateway.createSector(budgetSlug, name);
