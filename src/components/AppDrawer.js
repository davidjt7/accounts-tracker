import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

import { topMenu, bottomMenu } from '../menuConfig';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AppDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {topMenu.map((menuItem) => (
          <ListItem button key={menuItem.title}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <Link to={menuItem.link}><ListItemText primary={menuItem.title} /></Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomMenu.map((menuItem) => (
          <ListItem button key={menuItem.title}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <Link to={menuItem.link}><ListItemText primary={menuItem.title} /></Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="menu">
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}><Icon><MenuIcon /></Icon></Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
