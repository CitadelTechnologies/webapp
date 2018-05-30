import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Trésorerie',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

class BudgetChart extends React.Component
{
    constructor(props) {
        super(props)

        this.state = { budget: props.budget };
    }

    componentWillMount() {
        data.labels = [];
        data.datasets[0].data = [];
        let dates = this.storeTransactionsData();
        let lastMonth = this.sortTransactionsData(dates);
        this.updateChartData(dates, lastMonth);
    }

    storeTransactionsData() {
        let dates = {};
        for (let sector of this.state.budget.sectors) {
            for (let transaction of sector.transactions) {
                const date = new Date(transaction.processed_at);
                const year = `y${date.getFullYear()}`;
                const month = date.getMonth();
                if (typeof dates[year] === 'undefined') {
                    dates[year] = {};
                }
                if (typeof dates[year][month] === 'undefined') {
                    dates[year][month] = {
                        label: `${date.toLocaleString("fr-FR", { month:"long" })} ${date.getFullYear()}`,
                        sum: 0,
                    };
                }
                dates[year][month].sum +=
                    (transaction.type === 'income')
                    ? transaction.amount
                    : -transaction.amount
                ;
            }
        }
        return dates;
    }

    sortTransactionsData(dates) {
        let previousSum = 0;
        let lastMonth = 0;
        for (let yearKey in dates) {
            for (let monthKey of (new Array(12)).keys()) {
                let month = dates[yearKey][monthKey];
                if (typeof month === 'undefined') {
                    let date = new Date(`${yearKey.substr(1,4).padStart(4, "0")}-${(monthKey + 1).toString().padStart(2, "0")}-01`);
                    dates[yearKey][monthKey] = {
                        label: `${date.toLocaleString("fr-FR", { month:"long" })} ${date.getFullYear()}`,
                        sum: previousSum,
                    };
                    continue;
                }
                month.sum += previousSum;
                previousSum = month.sum;
                lastMonth = monthKey;
            }
        }
        return lastMonth;
    }

    updateChartData(dates, lastMonth) {
        let displayedYear = Object.keys(dates).pop();
        for (let monthKey in dates[displayedYear]) {
            let month = dates[displayedYear][monthKey];
            data.labels.push(month.label);
            if (parseInt(monthKey) <= lastMonth) {
                data.datasets[0].data.push(month.sum);
            }
        }
    }

    render() {
        return(
            <Line data={data} width={800} height={400}/>
        );
    }
}

export default BudgetChart;
