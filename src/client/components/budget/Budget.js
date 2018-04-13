import React from 'react';
import Link from 'next/link';
import glamorous from 'glamorous';
import { client } from '../../lib/apolloWrapper';
import gql from 'graphql-tag';

const BudgetWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
});

const BudgetData = glamorous.div({
    display: 'flex',
    "& > div": {
        width: '300px',
        padding: '10px',
        "& > section": {
            "& > div": {
                padding: '10px',
                "&.revenue": {
                    backgroundColor: 'rgba(200, 200, 255, 0.3)'
                },
                "&.expense": {
                    backgroundColor: 'rgba(255, 200, 200, 0.3)'
                }
            }
        }
    }
});

const Form = glamorous.div({
    width: '300px',
    margin: '20px 40px',
    padding: '10px',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.6)',
    "& > h3": {
        margin: '0px',
    },
    "& > form": {
        display: 'flex',
        flexDirection: 'column',
        "& > div": {
            margin: 'auto'
        },
        "& > input": {
            height: '35px',
            border: 'none',
            borderBottom: '1px solid #AAA',
        }
    }
});

class Budget extends React.Component {
    constructor(props) {
        super(props);

        this.state = { budget: props.budget };
        this.createSector = this.createSector.bind(this);
        this.createTransaction = this.createTransaction.bind(this);
    }

    createSector(e) {
        e.preventDefault();

        let data = new FormData(e.currentTarget);
        client.mutate({
            mutation: gql`
                mutation AddSector($input: SectorInput) {
                    addSector(input: $input) {
                        name
                        slug
                    }
                }
            `,
            variables: {input: {
                name: data.get('name'),
                budget: this.state.budget.slug,
            }}
        }).then(response => {
            this.setState(state => ({
                ...state,
                budget: {
                    ...state.budget,
                    sectors: this.state.budget.sectors.concat(response.data.addSector),
                },
            }));
        });
    }

    createTransaction(e) {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        var sectorSlug = data.get('sector');
        client.mutate({
          mutation: gql`
            mutation AddTransaction($input: TransactionInput) {
              addTransaction(input: $input) {
                id
                wording
                description
                type
                amount
              }
            }
          `,
          variables: {input: {
              wording: data.get('wording'),
              description: data.get('description'),
              type: data.get('type'),
              amount: data.get('amount'),
              sector: sectorSlug,
              budget: this.state.budget.slug,
          }}
      }).then(response => {
          this.setState(state => ({
              ...state,
              budget: {
                  ...state.budget,
                  sectors: this.state.budget.sectors.map(sector => {
                      if (sector.slug === sectorSlug) {
                          sector = {
                              ...sector,
                              transactions: sector.transactions.concat(response.data.addTransaction)
                          };
                      }
                      return sector;
                  })
              },
          }));
      });
    }

    render() {
        return (
            <div>
                <h3 style={{marginLeft: '40px'}}>{ this.state.budget.name }</h3>
                <BudgetWrapper>
                    <div>
                        <Form>
                            <h3>Créer un secteur</h3>
                            <form onSubmit={this.createSector}>
                                <input type="text" name="name" placeholder="nom" />
                                <button type="submit">Enregistrer</button>
                            </form>
                        </Form>
                        <Form>
                            <h3>Enregistrer une transaction</h3>
                            <form onSubmit={this.createTransaction}>
                                <input type="text" name="wording" placeholder="libellé" />
                                <input type="text" name="amount" placeholder="montant" />
                                <div>
                                    <input id="type-revenue" type="radio" name="type" value="true" defaultChecked />
                                    <label htmlFor="type-revenue">Revenu</label>
                                </div>
                                <div>
                                    <input id="type-expense" type="radio" name="type" value="false" />
                                    <label htmlFor="type-expense">Dépense</label>
                                </div>
                                <select name="sector">{ this.state.budget.sectors.map(sector =>
                                    <option key={sector.slug} value={sector.slug}>
                                    {sector.name}
                                    </option>
                                )}</select>
                                <textarea name="description" placeholder="description"></textarea>
                                <button type="submit">Enregistrer</button>
                            </form>
                        </Form>
                    </div>
                    <BudgetData>
                        { this.state.budget.sectors.map(sector =>
                            <div key={sector.slug}>
                                <header>
                                    <h4>{ sector.name }</h4>
                                </header>
                                <section>
                                    { sector.transactions.map(transaction =>
                                        <div key={transaction.id} className={transaction.type === true ? 'revenue': 'expense'}>
                                            { transaction.wording } - { transaction.amount }€
                                        </div>
                                    )}
                                </section>
                            </div>
                        )}
                    </BudgetData>
                </BudgetWrapper>
            </div>
        );
    }
};

export default Budget;
