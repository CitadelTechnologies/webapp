exports.up = (knex, Promise) => knex.schema.table('user__users', table => {
    table.dropColumn('password');
    table.dropColumn('salt');
    table.dropColumn('created_at');
    table.dropColumn('updated_at');

    table.boolean('is_admin');

    table.index(['username']);
});

exports.down = (knex, Promise) => knex.schema.table('user__users', table => {
    table.dropColumn('is_admin');

    table.string('password');
    table.string('salt');
    table.dateTime('created_at');
    table.dateTime('updated_at');

    table.dropIndex(['username']);
});
