import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null
    };
  }

  updateTime = () => {
    this.setState({ time: new Date().toLocaleTimeString("fa-IR") });
  };

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  render() {
    return <h2>{this.state.time}</h2>;
  }
}

export default Time;
