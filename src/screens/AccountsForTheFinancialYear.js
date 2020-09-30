import React from 'react';

import { MonthList } from '../components/MonthList';
import { LoadMonths } from '../components/LoadMonths';

export const AccountsForTheFinancialYear = () => {
    return (
        <div className="space-top">
            <LoadMonths />
            <div className="container">
                <MonthList />
            </div>
        </div>
    );
};