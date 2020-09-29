import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { db } from '../firebase';
import { getDate } from '../util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SaveTransactions = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <>
            <div className="download">
                <button className="btn" onClick={saveCollection(transactions)}>
                    Save
                </button>
                <ToastContainer />
            </div>
        </>
    )
};

const saveCollection = (transactions) => () => {
    db.collection("transactions")
        .doc(getDate())
        .set({ transactions })
        .then(notify("Transactions saved successfully!"))
        .catch((e) => failNotify("Failed to save transactions: ", e.message));
};

const notify = (msg) => toast(msg, { autoClose: 2000 });
const failNotify = (msg) => toast.error(msg, { autoClose: 2000 });