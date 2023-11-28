import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';

function Income() {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='incomes'></div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;

export default Income;
