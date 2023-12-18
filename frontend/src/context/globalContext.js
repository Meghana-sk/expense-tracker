import React, { useContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  /** INCOMES */
  const addIncome = async (income) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}add-income`, income);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getIncomes = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}get-incomes`
    );
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}delete-income/${id}`
    );
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  /** EXPENSES */
  const addExpense = async (income) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}add-expense`, income);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getExpenses = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}get-expenses`
    );
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}delete-expense/${id}`
    );
    getExpenses();
  };

  const totalExpense = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        incomes,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        expenses,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
