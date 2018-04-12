const db = require('../repository');

const resolveUser = user => Object.assign({}, user, {
  projects: () => db.project.findByResponsible({ responsibleId: user.id }).then(([user]) => user)
});

const resolveUsers = users => users.map(resolveUser);

const findAll = ({ search }) => db.user.findAll({ search }).then(resolveUsers);

const findOne = params => db.user.findOne(params).then(resolveUsers).then(([user]) => user);

const findOneByUsername = username => db.user.findOneByUsername(username).then(resolveUsers).then(([user]) => user);

const create = user => db.user.create(user);

module.exports = {
  findAll,
  findOne,
  findOneByUsername,
  create,
};
