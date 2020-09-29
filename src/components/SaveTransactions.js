import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { db } from '../firebase';
import { getDate } from '../util';

export const SaveTransactions = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <>
            <div className="download">
                <button className="btn" onClick={saveCollection(transactions)}>
                    Save
                </button>
            </div>
        </>
    )
};

const saveCollection = (transactions) => () => {
    db.collection("transactions")
        .doc(getDate())
        .set({transactions});
};