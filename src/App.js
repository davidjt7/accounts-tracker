import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { AccountsForTheMonth } from './screens/AccountsForTheMonth';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <AccountsForTheMonth />
    </GlobalProvider>
  );
}

export default App;
