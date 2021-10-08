import React, { Component } from "react";
import "./styles.css";

class Hellochange extends Component {
  constructor() {
    super();
    this.state = {
      message: "Visitor",
      total: "0"
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscibing",
      total: "1"
    });
  }

  render() {
    const { total } = this.state.total;
    return (
      <div className="App">
        <h1>Welcome {this.state.message} </h1>
        <h1> You are number {this.state.total} </h1>
        <button onClick={() => this.changeMessage()}> Subscribe</button>
      </div>
    );
  }
}

export default Hellochange;
