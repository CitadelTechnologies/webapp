const db = require('../repository');
const budgetManager = require('../manager/budget');
const budgetPrefix = 'budget-projet';

const resolveProject = project => Object.assign({}, project, {
    budget: () => budgetManager.getBudget(`${budgetPrefix}-${project.slug}`),
    responsible: () => db.user.findOne({ id: project.responsible_id }).then(([responsible]) => responsible)
});

const resolveProjects = projects => projects.map(resolveProject);

const findAll = ({ search }) => db.project.findAll({ search }).then(resolveProjects);

const findByResponsible = ({ responsibleId }) => db.project.findAll({ responsibleId }).then(resolveProjects);

const findOne = params => db.project.findOne(params).then(resolveProjects).then(([project]) => project);

const createProject = ({ input }) => db.project.create(input);

const updateProject = ( id, params ) => db.project.update(id, params);

module.exports = {
    budgetPrefix,
    findAll,
    findByResponsible,
    findOne,
    createProject,
    updateProject
};
