import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const { addIncome, incomes, getIncomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='incomes'>
            {incomes?.map((income, index) => (
              <IncomeItem
                {...income}
                key={index}
                indicatorColor={'var(--color-green)'}
              />
            ))}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Income;