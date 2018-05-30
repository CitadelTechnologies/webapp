import React from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [],
    backgroundColor: [],
    label: 'Secteurs'
  }],
  labels: []
};

class SectorChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            budget: this.props.budget,
            sectors: {}
        };
    }

    componentWillMount() {
        for (let sector of this.state.budget.sectors) {
            this.state.sectors[sector.name] = 0;
            for (let transaction of sector.transactions) {
                this.state.sectors[sector.name] +=
                    (transaction.type === 'income')
                    ? transaction.amount
                    : -transaction.amount
                ;
            }
        }
        for (let sectorName in this.state.sectors) {
            let amount = this.state.sectors[sectorName];
            data.labels.push(sectorName);
            data.datasets[0].data.push(Math.abs(amount));
            data.datasets[0].backgroundColor.push((amount >= 0) ? 'rgba(150,150,255,0.5)': 'rgba(255,150,150,0.5)');
        }
    }

    render() {
        return (
            <div>
                <h2>Par secteur</h2>
                <Polar data={data} />
            </div>
        );
    }
}

export default SectorChart;
