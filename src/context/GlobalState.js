import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import {db} from '../firebase';
import {getDate} from '../util';

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function loadTransactions() {
    db.collection("transactions")
    .doc(getDate())
    .get()
    .then((doc)=>{
      dispatch({
        type: 'LOAD_TRANSACTIONS',
        payload : doc.data().transactions
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
    deleteTransaction,
    addTransaction,
    loadTransactions
  }}>
    {children}
  </GlobalContext.Provider>);
}