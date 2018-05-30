import DashboardLayout from '../../components/DashboardLayout';
import Head from 'next/head';
import ConnectedPage from '../../components/ConnectedPage';

class Index extends ConnectedPage {
    render() {
        if (this.state.ready === false) {
            return null;
        }
        return (
            <div>
                <Head>
                    <title>Tableau de bord</title>
                </Head>
                <DashboardLayout user={this.state.user}/>
            </div>
        );
    }
}

export default Index;
