import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import BudgetsList from '../components/budget/BudgetsList';

const BudgetsListContainer = ({ data }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading budgets... </p>
    )

  return <BudgetsList budgets={data.budgets} />
};

const budgetsQuery = gql`
  query GetBudgets {
    budgets {
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

export default graphql(budgetsQuery, {
  options: ({ slug }) => ({ slug }),
})(BudgetsListContainer);
