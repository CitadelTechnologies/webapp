import React from 'react';
import Link from 'next/link';
import glamorous from 'glamorous';
import { client } from '../../lib/apolloWrapper';
import gql from 'graphql-tag';

class Budget extends React.Component {
    constructor(props) {
        super(props);

        this.state = { budget: props.budget };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        let data = new FormData(e.currentTarget);
        client.mutate({
          mutation: gql`
            mutation AddTransaction($input: TransactionInput) {
              addTransaction(input: $input) {
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
              sector: data.get('sector'),
              budget: this.state.budget.slug,
          }}
      }).then(response => {
          if (response.data.me === null) {
              localStorage.removeItem('user.access_token');
              Router.push('/login');
              return;
          }
          this.setState({ user: response.data.me })
      });
    }

    render() {
        return (
            <div>
                <h3>{ this.state.budget.name }</h3>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="wording" placeholder="libellé" />
                        <input type="text" name="amount" placeholder="montant" />
                        <input type="radio" name="type" value="true" />
                        <input type="radio" name="type" value="false" />
                        <select name="sector">{ this.state.budget.sectors.map(sector =>
                            <option key={sector.slug} value={sector.slug}>
                            {sector.name}
                            </option>
                        )}</select>
                        <textarea name="description" placeholder="description"></textarea>
                        <button type="submit">Enregistrer</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Budget;
