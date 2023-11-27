import React, { useContext, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'hhtp://localhost:5000/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <GlobalContext.Provider value={{ addIncome }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
