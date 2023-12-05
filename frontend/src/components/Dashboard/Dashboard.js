import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../chart/Chart';
import { dollar } from '../../utils/icon';
import { useGlobalContext } from '../../context/globalContext';
import History from '../history/History';

function Dashboard() {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    getIncomes,
    getExpenses,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1> All transactions</h1>
        <div className='stats-con'>
          <div className='chart-con'>
            <Chart />
            <div className='amount-con'>
              <div className='income'>
                <h1>Total Income</h1>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className='expense'>
                <h1>Total Expense</h1>
                <p>
                  {dollar} {totalExpense()}
                </p>
              </div>
              <div className='balance'>
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className='history-con'>
            <History />
            <h2 className='salary-title'>
              Min <span>Salary</span>
              <span>Max</span>
            </h2>
            <div className='salary-item'>
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className='salary-title'>
              Min <span>Salary</span>
              <span>Max</span>
            </h2>
            <div className='salary-item'>
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        margin-top: 2rem;
        .income,
        .expense,
        .balance {
          background-color: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background-color: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Dashboard;
