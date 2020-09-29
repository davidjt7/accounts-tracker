import React from 'react';

import { GlobalProvider } from './context/GlobalState';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  );
}

export default App;
