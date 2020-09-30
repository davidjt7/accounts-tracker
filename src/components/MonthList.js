import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionList } from './TransactionListStateless';
import { IncomeExpenses } from './IncomeExpensesStateless';
import { Balance } from './BalanceStateless';

export const MonthList = () => {
    const { months } = useContext(GlobalContext);

    return (
        <>
            <ul className="list">
                {months.map(month => (
                    <>
                        <h3>{month.id}</h3>
                        <IncomeExpenses history={month.history} />
                        <TransactionList history={month.history} />
                        <Balance history={month.history} id={month.id}/>
                    </>
                ))}
            </ul>
        </>
    )
}
