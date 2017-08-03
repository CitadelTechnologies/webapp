const db = require('../repositories')

const resolveUser = user => Object.assign({}, user, {
  projects: () => db.projects.findByResponsible({ responsibleId: user.id }).then(([user]) => user)
});

const resolveUsers = users => users.map(resolveUser);

const findAll = ({ search }) => db.users.findAll({ search }).then(resolveUsers);

const findOne = params => db.users.findOne(params).then(resolveUsers).then(([user]) => user);

module.exports = {
  findAll,
  findOne
};
