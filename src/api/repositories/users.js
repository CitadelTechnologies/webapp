const qb = require('./queryBuilder');

const findAll = ({ search } = {}) => {
  const query = qb.select().from('user__users');

  if (search)
    query.whereRaw('lower(username) LIKE lower(:username) OR lower(email) LIKE lower(:email)', {
      username: '%' + search + '%',
      email: '%' + search + '%'
    });

  return query.orderBy('username');
};

const findOne = ({ id }) => {
  return qb.select().from('user__users').where('id', id);
};

module.exports = {
  findAll,
  findOne
};
