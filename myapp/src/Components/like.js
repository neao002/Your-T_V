import React, { Component } from "react";

export class like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    };
  }
  likeButtonHandler = () => {
    this.setState({
      like: this.state.like + 1,
    });
  };
  //! when return false from update ,there is no render
  shouldComponentUpdate() {
    if (this.state.like < 6) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.like !== this.state.like) {
      console.log("componentDidUpdate");
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={this.likeButtonHandler}
          className="btn-primary mt-5 px-4"
        >
          {this.state.like} liked!
        </button>
      </div>
    );
  }
}

export default like;
