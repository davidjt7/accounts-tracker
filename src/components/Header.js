import React from 'react'
import {getDate} from '../util';

export const Header = () => {
  return (
    <div>
      <h2>
        Accounts
    </h2>
      <h3>
        {getDate()}
      </h3>
    </div>
  )
};
