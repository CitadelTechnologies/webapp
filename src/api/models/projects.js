const db = require('../repositories');
const budgetManager = require('../managers/budgets');

const resolveProject = project => Object.assign({}, project, {
    budget: () => budgetManager.getBudget(`budget-projet-${project.slug}`),
    responsible: () => db.users.findOne({ id: project.responsible_id }).then(([responsible]) => responsible)
});

const resolveProjects = projects => projects.map(resolveProject);

const findAll = ({ search }) => db.projects.findAll({ search }).then(resolveProjects);

const findByResponsible = ({ responsibleId }) => db.projects.findAll({ responsibleId }).then(resolveProjects);

const findOne = params => db.projects.findOne(params).then(resolveProjects).then(([project]) => project);

const createProject = ({ input }) => db.projects.create(input);

const updateProject = ( id, params ) => db.projects.update(id, params);

module.exports = {
  findAll,
  findByResponsible,
  findOne,
  createProject,
  updateProject
};
