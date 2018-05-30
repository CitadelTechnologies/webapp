import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Budget from '../components/budget/Budget';

class BudgetContainer extends React.Component {
    render() {
        if (this.props.data.loading || this.props.data.error) {
            return (
                <p style={{ color: 'white', textAlign: 'center' }}> Loading budget... </p>
            );
        }
        return <Budget budget={this.props.data.budget} />
    }
};

const budgetQuery = gql`
  query GetBudget($slug: String) {
    budget(slug: $slug) {
      name
      slug
      sectors {
          name
          slug
          transactions {
              wording
              amount
              type
              processed_at
          }
      }
    }
  }
`;

export default graphql(budgetQuery)(BudgetContainer);
