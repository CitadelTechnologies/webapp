exports.seed = (knex, Promise) => knex('topic__thematics')
  .del()
  .then(() => knex('topic__topics').del().then(() =>
  knex('topic__topics').insert([
    {
      id: 1,
      name: 'Politique',
      slug: 'politique',
      description: '',
      picto: '',
      picture: ''
    },
    {
      id: 2,
      name: 'Économie',
      slug: 'economie',
      description: '',
      picto: '',
      picture: ''
    },
    {
      id: 3,
      name: 'Environnement',
      slug: 'environnement',
      description: '',
      picto: '',
      picture: ''
    },
    {
      id: 4,
      name: 'Culture',
      slug: 'culture',
      description: '',
      picto: '',
      picture: ''
    },
    {
      id: 5,
      name: 'Société',
      slug: 'societe',
      description: '',
      picto: '',
      picture: ''
    },
  ])
));
