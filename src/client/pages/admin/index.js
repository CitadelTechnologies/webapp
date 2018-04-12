import AdminLayout from '../../components/AdminLayout';
import BudgetsListContainer from '../../containers/BudgetsListContainer.js';
import Head from 'next/head';
import apolloWrapper from '../../lib/apolloWrapper';

const Index = () => (
    <div>
        <Head>
            <title>Administration</title>
        </Head>
        <AdminLayout>
            <BudgetsListContainer />
        </AdminLayout>
    </div>
);

export default apolloWrapper(Index);
