exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project__projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('project__projects').insert([
        {
          id: 1,
          name: 'Medievistes',
          description: 'Plateforme communautaire dédiée à l\'univers de la reconstitution médiévale.',
          url: 'http://release.medievistes.fr',
          picture: '/static/images/medievistes_logo.png',
          cover_picture: '/static/images/medievistes_cover.png',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
        {
          id: 2,
          name: 'DevelopTech',
          description: '',
          url: '',
          picture: '/static/images/developtech_logo.png',
          cover_picture: '/static/images/developtech_cover.png',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
        {
          id: 3,
          name: 'Pilule Rouge',
          description: '',
          url: '',
          picture: '/static/images/pilule_rouge_logo.png',
          cover_picture: '/static/images/pilule_rouge_cover.png',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
        {
          id: 4,
          name: 'Paradis Sauvage',
          description: '',
          url: '',
          picture: '/static/images/paradis_sauvage_logo.png',
          cover_picture: '/static/images/paradis_sauvage_cover.png',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
      ]);
    });
};
