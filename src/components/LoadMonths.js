import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const LoadMonths = () => {
    const { loadMonths } = useContext(GlobalContext);
    useEffect(loadMonths, []);

    return (
        <>
        </>
    )
};

