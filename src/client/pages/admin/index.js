import AdminLayout from '../../components/AdminLayout';
import BudgetsListContainer from '../../containers/BudgetsListContainer.js';
import Head from 'next/head';
import apolloWrapper from '../../lib/apolloWrapper';
import ConnectedPage from '../../components/ConnectedPage';

class Index extends ConnectedPage {
    render() {
        if (this.state.ready === false) {
            return null;
        }
        return (
            <div>
                <Head>
                    <title>Administration</title>
                </Head>
                <AdminLayout user={this.state.user}>
                    <BudgetsListContainer />
                </AdminLayout>
            </div>
        );
    }
}

export default apolloWrapper(Index);
