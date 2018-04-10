const qb = require('./queryBuilder');

const findAll = ({ search } = {}) => {
  const query = qb.select().from('project__projects');

  if (search)
    query.whereRaw('lower(name) LIKE lower(:name)', {
      name: '%' + search + '%',
    });

  return query.orderBy('name');
};

const findOne = ({ id }) => qb.select().from('project__projects').where('id', id);

const findByResponsible = ({ responsibleId }) => qb.select().from('project__projects').where('responsible_id', responsibleId);

const create = project => qb.insert(project).into('project__projects').returning('id').then(
  result => Object.assign({}, project, { id: result[0] })
);

const update = (id, project) => qb.update((({
    name,
    description,
    url,
    picture,
    cover_picture,
    updated_at,
    responsible_id,
    slug,
}) => ({
    name,
    description,
    url,
    picture,
    cover_picture,
    updated_at,
    responsible_id,
    slug,
}))(project)).into('project__projects').where('id', id);

module.exports = {
  findAll,
  findOne,
  findByResponsible,
  create,
  update
};
