import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { db } from '../firebase';
import { getDate } from '../util';

const initialState = {
  transactions: [],
  months: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function loadTransactions() {
    db.collection("transactions")
      .doc(getDate())
      .get()
      .then((doc) => {
        dispatch({
          type: 'LOAD_TRANSACTIONS',
          payload: doc.data().transactions
        });
      })
  }

  function loadMonths() {
    const months = [];
    db.collection("transactions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          months.push({
            id: doc.id,
            history: doc.data().transactions
          });
        });
        dispatch({
          type: 'LOAD_MONTHS',
          payload: months
        });
      })
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    months: state.months,
    deleteTransaction,
    addTransaction,
    loadTransactions,
    loadMonths
  }}>
    {children}
  </GlobalContext.Provider>);
}