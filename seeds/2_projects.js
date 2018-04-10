exports.seed = (knex, Promise) => knex('project__projects').del()
    .then(() => knex('project__projects').insert([
        {
          id: 1,
          name: 'Medievistes',
          slug: 'medievistes',
          description:
            `<p>Médiévistes est une plateforme communautaire dédiée à l\'univers de la reconstitution médiévale.
            Elle vise à mettre en relation les troupes de reconstitution, les artisans et commerçants,
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
          slug: 'developtech',
          description:
            `<p>DevelopTech est un projet d'association pour développeurs juniors.
            Elle vise les étudiants et autres amateurs qui souhaitant consolider leur expérience technique par le biais de projets sérieux.
            En effet, dans certains parcours autodidactes, il devient difficile de s'améliorer sur des projets personnels en apprenant soi-même,
            et l'on ne dispose pas d'un niveau assez élevé pour gagner la confiance nécessaire à l'attribution de projets plus conséquents.</p>
            <p>Le concept de DevelopTech est simple: rassembler ces différents profils, autour de meetups, de tutoriels et de partages,
            et les inviter à réaliser bénévolement et en équipe des projets pour des associations ou TPE n'ayant pas les moyens de s'offrir un outillage numérique
            suffisant pour améliorer les conditions de leur activité.</p>
            <p>L'objectif est double:<ul>
            <li>D'une part, cela formera les développeurs et renforcera à la fois leurs connaissances et leur expérience, ce qui peut se révéler un riche atout lors de futurs entretiens.
            DevelopTech veut rendre plus accessibles les professions liées à l'informatique, y compris pour des profils non-diplômés.</li>
            <li>Par ailleurs, cela peut dynamiquer le paysage numérique dans le milieu associatif, et donner à ce milieu ainsi qu'à quelques commerçants un regain d'activité.
            Aucune contrepartie n'est exigée par DevelopTech, la possibilité de faire un don existe pour les bénéficiaires des différents projets.</li>
            </ul>
            <p>Les dons perçus par l'association permettront de financer la participation des adhérents à des meetups,
            des conférences, ainsi qu'à l'organisation de Hackaton ou de simples rencontres dédiées à l'échange.</p>
          `,
          url: '#',
          picture: '/static/images/developtech_logo.png',
          cover_picture: '/static/images/developtech_cover.jpeg',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
        {
          id: 3,
          name: 'Pilule Rouge',
          slug: 'pilule-rouge',
          description:
            `<p>Pilule Rouge est un blog de réflexion quant à de nombreux sujets,
            qu'ils concernent la société ou traitent de philosophie</p>
            <p>Espace d'expression pour les auteurs qui souhaitent aborder des thèmes leur tenant à coeur,
            c'est aussi un lieu virtuel dédié à l'échange et au débat.</p>
            <p>Les articles qui y sont rédigés reflètent les convictions et les idées de leurs auteurs,
            qui peuvent tout à fait librement diverger de la vision globale de la Citadelle.</p>
          `,
          url: 'https://pilule-rouge.blogspot.fr/',
          picture: '/static/images/pilule_rouge_logo.png',
          cover_picture: '/static/images/pilule_rouge_cover.jpeg',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
        {
          id: 4,
          name: 'Paradis Sauvage',
          slug: 'paradis-sauvage',
          description:
            `<p>Paradis Sauvage est un projet de jeu vidéo centré autour de l'éveil vis-à-vis de la Nature.</p>
            <p>Ludique, ce jeu propose de gérer une réserve naturelle, et d'y découvrir la faune et la flore.
            Avec l'aide de petits personnages pour conseiller le joueur, différentes espèces animales et végétales seront introduites,
            chacune accompagnée d'un ensemble d'informations pour mieux se faire connaître.</p>
            <p>C'est une façon de découvrir la Nature et ses nombreuses merveilles,
            mais aussi d'être sensibilisé sur l'impact des différentes actions sur son environnement.
            En effet, certaines actions du joueur ou événements extérieurs auront un impact positif ou négatif sur l'environnement,
            ce afin de sensibiliser à la fragilité de l'éco-système.</p>
            <p>Mais avant tout, Paradis Sauvage reste un jeu, pour les petits et les grands, et on pourra s'y amuser à regarder les abeilles butiner
            ou bien à cultiver un maximum d'espèces florales différentes. Chacun pourra y bâtir la réserve naturelle de ses rêves !</p>
          `,
          url: '#',
          picture: '/static/images/paradis_sauvage_logo.png',
          cover_picture: '/static/images/paradis_sauvage_cover.jpeg',
          responsible_id: 1,
          created_at: '2015-01-01 15:00:00',
          updated_at: '2017-08-02 02:34:00',
        },
      ])
    )
;
