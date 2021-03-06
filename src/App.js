import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO/venueNFO";
import Highlights from "./components/Highlight/Highlight";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="Featured">
          <Featured />
        </Element>

        <Element name="VenueNFO">
          <VenueNFO />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
