import glamorous from 'glamorous';
import Head from 'next/head';
import Layout from '../components/Layout';

const CatchPhrase = glamorous.div({
  position: 'absolute',
  width: '100%',
  bottom: '50px',
  '& h2': {
    textAlign: 'center'
  }
});

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
        <CatchPhrase>
          <h2>Soyez l'artisan d'une société nouvelle</h2>
        </CatchPhrase>
      </Layout>
    </div>
);

export default Index;
