import React from 'react';

import { Header } from '../components/SelectableHeader';
import { Balance } from '../components/BalanceStateless';
import { IncomeExpenses } from '../components/IncomeExpensesStateless';
import { TransactionList } from '../components/TransactionListStateless';
import { AddTransaction } from '../components/AddTransaction';
import { SaveTransactions } from '../components/SaveTransactions';
import { LoadTransactions } from '../components/LoadTransactions';

export const AccountsForOlderMonth = () => {
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