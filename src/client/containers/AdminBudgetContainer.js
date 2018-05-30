import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AdminBudget from '../components/budget/AdminBudget';

class AdminBudgetContainer extends React.Component {
    render() {
        if (this.props.data.loading || this.props.data.error) {
            return (
                <p style={{ color: 'white', textAlign: 'center' }}> Loading budget... </p>
            );
        }
        return <AdminBudget budget={this.props.data.budget} />
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

export default graphql(budgetQuery)(AdminBudgetContainer);
