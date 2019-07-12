import React, { Component } from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    list: [
      {
        id: 1,
        price: 100,
        position: "Balcony",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam excepturi, laborum atque",
        link: "https://sale.com/b"
      },
      {
        id: 2,
        price: 150,
        position: "Medium",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam excepturi, laborum atque",
        link: "https://sale.com/m"
      },
      {
        id: 3,
        price: 250,
        position: "Star",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsam excepturi, laborum atque",
        link: "https://sale.com/s"
      }
    ]
  };

  componentWillMount() {
    const listSize = this.state.list.length;

    let list = this.state.list;

    let index = -1;
    const step = 300;
    let nextStep = 0;

    if (listSize % 2 === 0) {
      index = listSize / 2 - 1;
    } else {
      index = Math.floor(listSize / 2) - 1;

      list[Math.floor(listSize / 2)].delay = 0;

      nextStep = step;
    }

    for (let i = index; i >= 0; --i) {
      list[i].delay = nextStep;
      list[listSize - i - 1].delay = nextStep;

      nextStep += step;
    }

    this.setState({
      list: list
    });
  }

  showBoxes = () =>
    this.state.list.map((box, id) => (
      <Zoom key={id} bottom delay={box.delay}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{box.price}</span>
              <span>{box.position}</span>
            </div>
            <div className="pricing_description">{box.description}</div>
            <div className="pricing_buttons">
              <MyButton
                label="Purchase"
                color="#fff"
                bck_button="#ffa800"
                link={box.link}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
