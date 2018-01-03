exports.seed = (knex, Promise) => knex('topic__thematics').del()
    .then(() => knex('topic__thematics').insert([
        {
          id: 1,
          name: 'Éducation',
          slug: 'education',
          short_description: '',
          full_description: '',
          topic_id: 5,
          picto: '',
          picture: '',
        },
        {
          id: 2,
          name: 'Emploi',
          slug: 'emploi',
          short_description: '',
          full_description: '',
          topic_id: 2,
          picto: '',
          picture: '',
        },
        {
          id: 3,
          name: 'Énergies renouvelables',
          slug: 'energies-renouvelables',
          short_description: '',
          full_description: '',
          topic_id: 3,
          picto: '',
          picture: '',
        },
      ])
    )
;
