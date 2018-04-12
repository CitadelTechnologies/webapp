import React from 'react';
import Link from 'next/link';
import glamorous from 'glamorous';

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: 300,
  marginLeft: '40px',
};

const Budget = glamorous.a({

    margin: '10px 0px',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.6)',
    cursor: 'pointer',
    '& > header': {
        height: '50px',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    "& > section": {
        padding: '10px',
        "& > h5": {
            margin: 0,
        }
    }
});

const BudgetsList = ({ budgets }) => {
  return (
      <div style={listStyle}>
        <h3>Budgets</h3>
        {budgets.map(budget =>
            <Link key={budget.slug} href="/">
                <Budget>
                    <header>

                    </header>
                    <section>
                        <h5>{budget.name}</h5>
                    </section>
                </Budget>
            </Link>
        )}
      </div>
  )
};

export default BudgetsList;
