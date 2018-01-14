import glamorous from 'glamorous';
import Head from 'next/head';
import Layout from '../components/Layout';
import ScrollButton from '../components/ScrollButton';

const CatchPhrase = glamorous.div({
  position: 'absolute',
  width: '100%',
  top: '160px',
  color: '#EFEFEF',
  '& h2': {
    textAlign: 'center'
  }
});

const HomepagePicture = glamorous.div({
  marginTop: '-140px',
  overflow: 'hidden',
  height: '100% !important',
  "& img": {
    width: '100%'
  }
});

const Description = glamorous.div({
  position: 'absolute',
  top: '110%',
});

const Section = glamorous.div({
  width: '100%',
  height: '400px',
  "& .content": {
    width: '50%',
    marginLeft: '50%',
    "& h3": {
      margin: '0px',
      paddingTop: '40px',
      paddingLeft: '40px'
    },
    "& p": {
      width: '80%',
      textAlign: 'justify',
      paddingLeft: '40px',
      paddingRight: '40px',
    }
  },
  "&.right .content": {
    marginLeft: '0px'
  }
}, ({picture}) => ({
  background: `url('/static/images/${picture}') no-repeat`,
  backgroundSize: '50%',
  "&.right": {
    backgroundPosition: '100%',
  }
}));

const Index = () => (
    <div>
      <Head>
        <title>La Citadelle</title>
        <link rel="icon" href="/static/images/armoiries.png" />
        <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Layout>
        <HomepagePicture>
          <img src="/static/images/homepage.jpg" />
        </HomepagePicture>
        <CatchPhrase>
          <h2>Soyez l'artisan d'une société nouvelle</h2>
        </CatchPhrase>
        <ScrollButton>
          <img src="/static/images/icons/arrow-down.png" />
        </ScrollButton>
        <Description>
          <Section picture="community.jpg">
            <div className="content">
              <h3>Qui sommes-nous ?</h3>
              <p>
                La Citadelle est un mouvement citoyen dont l'objectif est de proposer des alternatives.
                C'est par le biais de nombreux projets que ces alternatives voient le jour.
                Le groupe est ouvert à toute personne désireuse de contribuer à ces projets,
                ainsi qu'aux curieux qui souhaitent se renseigner quant aux idées et propositions échangées.
              </p>
              <p>
                La communauté a également pour but d'inciter à l'épanouissement personnel,
                l'individu constituant pour nous le point de départ essentiel pour l'évolution d'un groupe.
                Au travers d'articles, de réflexions, et des échanges ayant lieu entre personnes,
                chacun est invité à engager une prise de conscience sur lui-même et à se développer.
              </p>
              <p>
                Des explications plus complètes sur ces différents points sont accessibles sur ce site, dans les rubriques associées.
              </p>
            </div>
          </Section>
          <Section className="right" picture="craft.jpg">
            <div className="content">
              <h3>Quels sont les projets entrepris ?</h3>
              <p>
                Ces différents projets prennent la forme d'entreprises ou bien d'associations.
                Profondément liées aux valeurs du mouvement, elles permettent de mettre en place et d'expérimenter
                de nouvelles façons de travailler, de générer de la valeur et d'intéragir socialement.
              </p>
              <p>
                Nous désirons également participer à des projets associatifs existant, et les soutenir, avec à la fois des moyens humains et financiers.
                Selon les ressources que nous avons à disposition, nous aimerions
              </p>
              <p>
                Enfin, nous participons également à des projets open-source, certains initiés par le mouvement.
                Le but étant de mettre à disposition des technologies permettant d'améliorer certains aspects du quotidien,
                et également de soutenir l'évolution d'outils existants. Ces différents projets peuvent être consultés dans la rubrique "Technologies".
              </p>
            </div>
          </Section>
          <Section picture="join.jpg">
            <div className="content">
              <h3>Puis-je participer ?</h3>
              <p>
                Chacun est bienvenu au sein de ce groupe, qui s'enrichira avec chaque nouvelle personne !
                Ce sont les idées et les convictions des membres qui feront de ce mouvement une initiative réussie pour améliorer la société dans laquelle nous vivons !
              </p>
              <p>
                Vous pouvez également choisir de contribuer à ceux de nos projets qui vous intéresseront, quel que soit votre domaine de prédilection.
                Il n'y a pas d'exigences quant à votre niveau d'implication dans le groupe, votre engagement ne dépend que de vous !
              </p>
              <p>
                Pour nous rejoindre, vous pouvez vous inscrire sur ce site ou vous connecter sur un de nos outils de communication !
              </p>
            </div>
          </Section>
        </Description>
      </Layout>
    </div>
);

export default Index;
