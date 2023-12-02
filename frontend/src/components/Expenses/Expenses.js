import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-income'>
          Total income: <span>₹{totalExpense()}</span>{' '}
        </h2>
        <div className='income-content'>
          <div className='form-container'>
            <ExpenseForm />
          </div>
          <div className='incomes'>
            {expenses?.map((income, index) => (
              <IncomeItem
                {...income}
                key={index}
                indicatorColor={'var(--color-green)'}
                deleteIncome={deleteExpense}
                type='expense'
              />
            ))}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
`;

export default Expenses;
