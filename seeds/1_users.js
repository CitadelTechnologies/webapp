exports.seed = (knex, Promise) => knex('project__projects').del().then(() => knex('user__users')
  .del()
  .then(() => knex('user__users').insert([
      {
        id: 1,
        username: 'Kern',
        email: 'kern046@gmail.com',
        is_active: true,
        created_at: '2017-08-01 15:00:00',
        updated_at: '2017-08-02 02:34:00',
      }
    ])
  )
);
