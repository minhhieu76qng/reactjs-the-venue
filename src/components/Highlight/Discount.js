import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import MyButton from "../UI/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 35
  };

  increasePercent() {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => this.increasePercent(), 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.increasePercent()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th June</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                ipsam excepturi, laborum atque in amet mollitia aliquam
                accusantium, culpa, sit quo minus totam ipsum libero porro
                quidem eius maxime quisquam!
              </p>
              <MyButton
                label="Purchase tickets"
                bck_button="#ffa800"
                color="#ffffff"
                link="https://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
