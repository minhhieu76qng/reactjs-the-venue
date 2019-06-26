import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor  = 'right'
      open    = {props.open}
      onClose = {props.onClose}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Event start in")}>
          <ListItemText>Event start in</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log("Venue NFO")}>
          <ListItemText>Venue NFO</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          <ListItemText>Highlights</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing")}>
          <ListItemText>Pricing</ListItemText>
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          <ListItemText>Location</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;