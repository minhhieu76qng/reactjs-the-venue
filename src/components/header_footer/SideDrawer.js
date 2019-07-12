import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

  const ScrollToElement = (element) => {
    scroller.scrollTo(element, {
      smooth : true,
      duration : 1000,
      delay : 150,
      offset : -100
    });

    props.onClose();
  }

  return (
    <Drawer
      anchor  = 'right'
      open    = {props.open}
      onClose = {props.onClose}
    >
      <List component="nav">
        <ListItem button onClick={() => ScrollToElement('Featured')}>
          <ListItemText>Event start in</ListItemText>
        </ListItem>
        <ListItem button onClick={() => ScrollToElement('VenueNFO')}>
          <ListItemText>Venue NFO</ListItemText>
        </ListItem>
        <ListItem button onClick={() => ScrollToElement('Highlights')}>
          <ListItemText>Highlights</ListItemText>
        </ListItem>
        <ListItem button onClick={() => ScrollToElement('Pricing')}>
          <ListItemText>Pricing</ListItemText>
        </ListItem>
        <ListItem button onClick={() => ScrollToElement('Location')}>
          <ListItemText>Location</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;