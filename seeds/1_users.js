const manager = require('../src/api/manager/user');

exports.seed = (knex, Promise) => knex('project__projects').del().then(() => knex('user__users')
    .del()
    .then(() => Promise.all([
        manager.createUser({
            id: 1,
            username: 'Kern',
            email: 'kern046@gmail.com',
            password: 'test',
            is_active: true,
            is_admin: true,
        })
    ]))
);
