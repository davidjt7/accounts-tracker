import React from 'react';
import { Transaction } from './Transaction';

export const TransactionList = (props) => {
  return (
    <>
      <ul className="list">
        {props.history.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
