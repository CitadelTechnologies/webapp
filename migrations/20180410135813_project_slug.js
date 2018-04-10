const slug = require('slug');
const model = require('../src/api/models');

exports.up = (knex, Promise) => knex.schema.table('project__projects', table => {
    table.string('slug');
}).then(() => model.projects.findAll({}).then(projects => projects.map(project => {
    project.slug = slug(project.name, { lower: true });
    return model.projects.updateProject(project.id, project).then(result => {
        console.log(result);
        return result;
    });
})));

exports.down = (knex, Promise) => knex.schema.table('project__projects', table => {
    table.dropColumn('slug');
});
