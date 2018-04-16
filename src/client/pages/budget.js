import glamorous from 'glamorous';
import Layout from '../components/Layout';
import BudgetContainer from '../containers/BudgetContainer';
import apolloWrapper from '../lib/apolloWrapper';
import Head from 'next/head';
import ConnectedPage from '../components/ConnectedPage';

class Budget extends ConnectedPage {
    render () {
        if (this.state.ready === false) {
            return null;
        }
        return (
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
                <Layout user={this.state.user}>
                    <BudgetContainer slug={"budget-de-la-citadelle"} />
                </Layout>
            </div>
        );
    }
}

export default apolloWrapper(Budget);
