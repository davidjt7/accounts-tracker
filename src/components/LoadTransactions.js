import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const LoadTransactions = () => {
    const { loadTransactions } = useContext(GlobalContext);
    useEffect(loadTransactions, []);

    return (
        <>
        </>
    )
};

