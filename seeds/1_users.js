exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user__users').del()
    .then(function () {
      // Inserts seed entries
      return knex('user__users').insert([
        {
          id: 1,
          username: 'Kern',
          email: 'kern046@gmail.com',
          is_active: true,
          created_at: '2017-08-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        }
      ]);
    });
};
