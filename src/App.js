import React from 'react';

import { GlobalProvider } from './context/GlobalState';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <AppRoutes />
      </MuiPickersUtilsProvider>
    </GlobalProvider>
  );
}

export default App;
