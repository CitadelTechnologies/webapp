exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user__users', table => {
    table.increments();
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('salt');
    table.boolean('is_active');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user__users');
};
