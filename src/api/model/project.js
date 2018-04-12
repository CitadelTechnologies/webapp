const db = require('../repository');
const budgetManager = require('../manager/budget');

const resolveProject = project => Object.assign({}, project, {
    budget: () => budgetManager.getBudget(`budget-projet-${project.slug}`),
    responsible: () => db.user.findOne({ id: project.responsible_id }).then(([responsible]) => responsible)
});

const resolveProjects = projects => projects.map(resolveProject);

const findAll = ({ search }) => db.project.findAll({ search }).then(resolveProjects);

const findByResponsible = ({ responsibleId }) => db.project.findAll({ responsibleId }).then(resolveProjects);

const findOne = params => db.project.findOne(params).then(resolveProjects).then(([project]) => project);

const createProject = ({ input }) => db.project.create(input);

const updateProject = ( id, params ) => db.project.update(id, params);

module.exports = {
  findAll,
  findByResponsible,
  findOne,
  createProject,
  updateProject
};
