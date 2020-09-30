import React from 'react';

import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';
import { SaveTransactions } from '../components/SaveTransactions';
import { LoadTransactions } from '../components/LoadTransactions';

export const AccountsForTheMonth = () => {
    return (
        <div className="space-top">
            <LoadTransactions />
            <Header />
            <SaveTransactions />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    );
};