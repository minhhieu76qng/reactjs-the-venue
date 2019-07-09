import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resources/styles.css'
import Featured from './components/featured';
import VenueNFO from './components/venueNFO/venueNFO';
import Highlights from './components/Highlight/Highlight';
import Pricing from './components/pricing/Pricing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Featured></Featured>
        <VenueNFO/>
        <Highlights/>
        <Pricing/>
      </div>
    );
  }
}

export default App;