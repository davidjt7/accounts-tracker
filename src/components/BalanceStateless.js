import React from 'react';

export const Balance = (props) => {
    const amounts = props.history.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Savings in {props.id.slice(0, -5)}</h4>
            <h1>₹{total}</h1>
        </>
    )
}
