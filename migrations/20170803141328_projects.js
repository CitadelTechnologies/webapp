exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('project__projects', table => {
    table.increments();
    table.string('name');
    table.string('picture');
    table.dateTime('created_at');
    table.dateTime('updated_at');
    table.integer('responsible_id').unsigned().references('id').inTable('user__users');
    
    table.index(['responsible_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project__projects');
};
