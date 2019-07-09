import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Countdown extends Component {
  state = {
    deadline: "Dec, 22, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getCountDown() {
    const deadline = this.state.deadline;
    // get khoang thoi gian chenh lech hien tai
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time <= 0) {
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor(time / (1000 * 60) % 60);
      const hours = Math.floor(time / (1000 * 60 * 60) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
      })
    }
  }

  componentDidMount() {
    setInterval(() => this.getCountDown(), 1000);
  }

  render() {
    return (
      <Fade left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Countdown;
