import AdminLayout from '../../components/AdminLayout';
import BudgetContainer from '../../containers/BudgetContainer.js';
import Head from 'next/head';
import apolloWrapper from '../../lib/apolloWrapper';
import ConnectedPage from '../../components/ConnectedPage';

class Budget extends ConnectedPage {
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
                    <BudgetContainer slug={this.props.url.query.slug} />
                </AdminLayout>
            </div>
        );
    };
}

export default apolloWrapper(Budget);
