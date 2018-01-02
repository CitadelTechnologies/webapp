exports.up = (knex, Promise) => knex.schema.createTableIfNotExists('topic__thematics', table => {
    table.increments();
    table.string('name');
    table.string('slug');
    table.string('short_description');
    table.text('full_description');
    table.string('picto');
    table.string('picture');

    table.integer('topic_id').unsigned().references('id').inTable('topic__topics');

    table.index(['topic_id']);
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('topic__thematics');
