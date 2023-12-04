import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dollar } from '../../utils/icon';

function History() {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.map(({ _id, title, amount, type }, index) => {
        return (
          <div className='history-item' key={index}>
            <p
              style={{
                color: type === 'income' ? 'var(--color-green)' : 'red',
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: type === 'income' ? 'var(--color-green)' : 'red',
              }}
            >
              {type === 'expense' ? '-' : '+'}
              {dollar}
              {amount}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background-color: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
