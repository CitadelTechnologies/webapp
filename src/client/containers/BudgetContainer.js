import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Budget from '../components/budget/Budget';

const BudgetContainer = ({ data }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading budget... </p>
    )

  return <Budget budget={data.budget} />
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
          }
      }
    }
  }
`;

export default graphql(budgetQuery)(BudgetContainer);
