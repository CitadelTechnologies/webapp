exports.up = (knex, Promise) => knex.schema.createTableIfNotExists('topic__topics', table => {
    table.increments();
    table.string('name');
    table.string('slug');
    table.text('description');
    table.string('picto');
    table.string('picture');
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('topic__topics');
