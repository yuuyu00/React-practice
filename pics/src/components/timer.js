import React from "react";

export default class Timer extends React.Component {
  state = { count: 0 };

  countup = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    this.countup();
  }

  render() {
    return <label className="ui label">{this.state.count}</label>;
  }
}
