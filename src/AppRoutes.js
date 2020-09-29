import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AppDrawer from './components/AppDrawer';
import { Home } from './screens/Home';
import { AccountsForTheMonth } from './screens/AccountsForTheMonth';
import { AccountsForTheYear } from './screens/AccountsForTheYear';
import { AccountsForTheFinancialYear } from './screens/AccountsForTheFinancialYear';

const AppRoutes = () => {
    return (
        <Router>
            <AppDrawer />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/accounts/month">
                    <AccountsForTheMonth />
                </Route>
                <Route path="/accounts/year">
                    <AccountsForTheYear />
                </Route>
                <Route path="/accounts/fy">
                    <AccountsForTheFinancialYear />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRoutes;
