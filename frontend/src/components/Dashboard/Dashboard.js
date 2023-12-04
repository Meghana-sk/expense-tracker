import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../chart/Chart';
import { dollar } from '../../utils/icon';
import { useGlobalContext } from '../../context/globalContext';
import History from '../history/History';

function Dashboard() {
  const { totalIncome, totalExpense, totalBalance, getIncomes, getExpenses } =
    useGlobalContext();

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
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div``;

export default Dashboard;
