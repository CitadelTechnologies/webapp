import React from 'react';
import Link from 'next/link';
import glamorous from 'glamorous';
import { client } from '../../lib/apolloWrapper';
import gql from 'graphql-tag';
import BudgetChart from './BudgetChart';
import SectorChart from './SectorChart';

const Header = glamorous.div({
    margin: '40px 100px'
});

const BudgetWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'space-around'
});

const TransactionsList = glamorous.div({
    "& > header > h3": {
        marginTop: '0px'
    },
    "& > section > .transaction": {
        padding: '10px',
        marginBottom: '5px',
        textAlign: 'right',
        border: '1px solid #D0D0D0',
        borderRadius: '5px',
        boxShadow: '0px 0px 3px rgba(0,0,0,0.2)',
        "& > header > h4": {
            margin: '0px'
        },
        "& > section > .amount": {
            padding: '10px 20px',
            fontSize: '1.2em',
            fontWeight: 'bold',
        },
        "& > footer": {
            display: 'flex',
            justifyContent: 'space-between',
            "& > em": {
                paddingLeft: '10px'
            }
        },
        "&.income > section > .amount": {
            "&:before": {
                content: ' + '
            },
            backgroundColor: 'rgba(200, 200, 255, 0.3)',
        },
        "&.expense > section > .amount": {
            "&:before": {
                content: ' - '
            },
            backgroundColor: 'rgba(255, 200, 200, 0.3)',
        }
    }
});

class Budget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budget: props.budget,
            transactions: {}
        };
        this.sortTransactions = this.sortTransactions.bind(this);
    }

    componentWillMount() {
        let i = 1;
        for (let sector of this.state.budget.sectors) {
            for (let transaction of sector.transactions) {
                let processedAt = new Date(transaction.processed_at);
                this.state.transactions[+ processedAt] = {
                    wording: transaction.wording,
                    type: transaction.type,
                    amount: transaction.amount,
                    sector_name: sector.name,
                    processed_at: processedAt
                };
                i++;
                if (i === 20) {
                    break;
                }
            }
        }
        this.sortTransactions();
    }

    sortTransactions() {
        const keys = Object.keys( this.state.transactions );
        keys.sort().reverse();
        this.state.transactions = keys.reduce(( target, key ) => {
            target[ key ] = this.state.transactions[ key ];
            return target;
        }, {});
    }

    render() {
        return (
            <div>
                <Header>
                    <h3>{ this.state.budget.name }</h3>
                </Header>
                <BudgetWrapper>
                    <div>
                        <BudgetChart budget={this.state.budget} />
                        <SectorChart budget={this.state.budget} />
                    </div>
                    <TransactionsList>
                        <header>
                            <h3>Dernières transactions</h3>
                        </header>
                        <section>
                            { Object.keys(this.state.transactions).map(transactionKey => {
                                const transaction = this.state.transactions[transactionKey];
                                return (
                                    <div className={`transaction ${transaction.type}`} key={transactionKey}>
                                        <header>
                                            <h4>{ transaction.wording }</h4>
                                        </header>
                                        <section>
                                            <p className="amount">{ transaction.amount }€</p>
                                        </section>
                                        <footer>
                                            <strong>{ transaction.sector_name }</strong>
                                            <em>{transaction.processed_at.toLocaleString()}</em>
                                        </footer>
                                    </div>
                                )
                            })}
                        </section>
                    </TransactionsList>
                </BudgetWrapper>
            </div>
        );
    }
};

export default Budget;
