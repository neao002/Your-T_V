import React, { Component } from "react";

import Timer from "./timer";
export class announcement extends Component {
  //! Last warning before removing stuff
  componentWillUnmount() {
    alert("You accepted Terms & Conditions");
    // if (window.confirm("Are yu sure?")) {
    //   return true;
    // }
  }
  render() {
    return (
      <div className="container bg-dark text-left p-0 mt-4">
        <h1 className="aboutheader pt-3 ml-4">Welcome</h1>
        <p className="abouttext text-white mx-4">
          Lorem Ipsum Alper TV is simply dummy text of the printing and
          typesettin.Since the 1500s, when Alper TV unknown printer took
          remaining Alper TV unchanged.Alper TV in the 1960s with the release of
          versions of Nico's Tv.
        </p>
        <button
          className="btn-danger mb-3 ml-4 px-2 font-weight-bolder"
          onClick={this.props.clickHandler}
        >
          Got it!
        </button>
        <Timer></Timer>
      </div>
    );
  }
}

export default announcement;
