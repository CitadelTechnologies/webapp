import AdminLayout from '../../components/AdminLayout';
import BudgetContainer from '../../containers/BudgetContainer.js';
import Head from 'next/head';
import apolloWrapper from '../../lib/apolloWrapper';

class Budget extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Administration</title>
                </Head>
                <AdminLayout>
                    <BudgetContainer slug={this.props.url.query.slug} />
                </AdminLayout>
            </div>
        );
    };
}

export default apolloWrapper(Budget);
