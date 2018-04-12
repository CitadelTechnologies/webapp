const manager = require('../manager/budget');

exports.createSector = (req, res) => manager.createSector(
    req.body.budget,
    req.body.name
);

exports.createTransaction = (req, res) => manager.createTransaction(
    req.body.budget,
    req.body.sector,
    req.body.wording,
    req.body.description,
    req.body.type,
    req.body.amount
).then();
