const gateway = require('../gateways').budget;

exports.createBudget = (name, description) => gateway.createBudget(name, description);

exports.deleteBudget = slug => gateway.deleteBudget(slug);

exports.createSector = (budgetSlug, name) => gateway.createSector(budgetSlug, name);
