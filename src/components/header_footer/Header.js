import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this.setState({ headerShow: true })
      } else {
        this.setState({ headerShow: false })
      }
    })
  }

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f': 'transparent',
          padding        : '10px 0px',
          boxShadow      : 'none',
          transition     : 'background-color .4s ease'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="header_logo_venue font_righteous">The Venue</div>
            <div className='header_logo_title'>Musical Events</div>
          </div>
          <IconButton
            aria-label = "Menu"
            color      = "inherit"
            onClick    = {state => this.setState({ drawerOpen: !state.drawerOpen })}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open    = {this.state.drawerOpen}
            onClose = {() => this.setState({ drawerOpen: false })}
          >

          </SideDrawer>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;