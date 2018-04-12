const qb = require('./queryBuilder');

exports.findAll = ({ search } = {}) => {
  const query = qb.select().from('user__users');

  if (search)
    query.whereRaw('lower(username) LIKE lower(:username) OR lower(email) LIKE lower(:email)', {
      username: '%' + search + '%',
      email: '%' + search + '%'
    });

  return query.orderBy('username');
};

exports.findOne = ({ id }) => qb.select().from('user__users').where('id', id);

exports.findOneByUsername = ({ username }) => qb.select().from('user__users').where('username', username);

exports.create = user => qb.insert((({
    id, username, email, is_admin, is_active
}) => ({
    id, username, email, is_admin, is_active
}))(user)).into('user__users').returning('id').then(result => Object.assign({}, user, { id: result[0] }));
