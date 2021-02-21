import React, { Component } from "react";

export class timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Interval Cleared");
  }

  render() {
    return (
      <div>
        <p className="warningText bg-primary p-4 font-weight-bolder">
          You are visiting our page for last {this.state.counter} seconds
        </p>
      </div>
    );
  }
}

export default timer;
