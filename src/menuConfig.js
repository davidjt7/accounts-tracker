import React from 'react';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HomeIcon from '@material-ui/icons/Home';

export const topMenu = [
    { title: 'Home', icon: <HomeIcon />, link: '/' },
    { title: 'Annual Records', icon: <TimelineIcon />, link: '/accounts/year' },
    { title: 'Annual Records (FY)', icon: <AssessmentIcon />, link: '/accounts/fy' }
];

export const bottomMenu = [
    { title: 'Current Month', icon: <AccountBalanceIcon />, link: '/accounts/month' },
];