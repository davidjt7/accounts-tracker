import React, { useState, useContext } from 'react'
import Switch from "react-switch";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState(false);

  const toggleType = () => {
    setType(!type);
  }
  const clearFields = () => {
    setAmount('');
    setText('');
  };

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (amount === 0 || amount === '0' || amount === '-0' || amount === '') {
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type ? +amount : -amount
    }

    addTransaction(newTransaction);
    clearFields();
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <Switch onChange={toggleType} checked={type} className="type-switch" onColor="#0f0" offColor="#f00"></Switch></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

