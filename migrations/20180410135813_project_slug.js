const slug = require('slug');
const model = require('../src/api/model');

exports.up = (knex, Promise) => knex.schema.hasColumn('project__projects', 'slug').then(hasColumn => {
    if (hasColumn === true) {
        return;
    }
    return knex.schema.table('project__projects', table => {
        console.log('ok');
        table.string('slug');
        console.log('ouiii');
    });
}).then(() => model.project.findAll({}))
  .then(projects => projects.map(project => {
    project.slug = slug(project.name, { lower: true });
    return model.project.updateProject(project.id, project);
}));

exports.down = (knex, Promise) => knex.schema.table('project__projects', table => {
    table.dropColumn('slug');
});
