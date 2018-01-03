exports.seed = (knex, Promise) => knex('project__projects').del()
    .then(() => knex('project__projects').insert([
        {
          id: 1,
          name: 'Medievistes',
          description:
            `<p>Médiévistes est une plateforme communautaire dédiée à l\'univers de la reconstitution médiévale.
            Elle vise à mettre en relation les troupes de reconstituion, les artisans et commerçants,
            ainsi que les collectivités souhaitant organiser des fêtes médiévales et autres rassemblements culturels.</p>
            <p>Une agora sera également disponible et donnera la possibilité à chaque artisan et commerçant d'ouvrir gratuitement sa boutique en ligne.
            Les paiements et livraisons seraient assurées depuis le site, contre une commission sur chaque transaction.</p>
            <p>De la même manière, les collectivités et autres organisateurs d'événements pourront utiliser la plateforme,
            dans le but de trouver des prestataires, recevoir des devis, traiter les factures et les payer en ligne, là encore contre une simple commission.
            Cela donnera également de la visibilité aux événements programmés, en assurant une promotion auprès du public.</p>
            <p>Le projet consiste également, à terme, à organiser des événements dans des lieux historiques,
            afin de financer en partie leur rénovation par les gains obtenus. Ces opérations de restauration du patrimoine
            viseraient à donner un attrait nouveau pour la culture et l'Histoire qui émanent de ces lieux.</p>
          `,
          url: 'https://release.medievistes.fr',
          picture: '/static/images/medievistes_logo.png',
          cover_picture: '/static/images/medievistes_cover.jpg',
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
          cover_picture: '/static/images/developtech_cover.jpeg',
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
          cover_picture: '/static/images/pilule_rouge_cover.jpeg',
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
          cover_picture: '/static/images/savage_heaven_cover.jpeg',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
      ])
    )
;
