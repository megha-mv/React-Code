import React from "react";
import "./styles.css";

class Greet extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor"
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscibing"
    });
  }

  render() {
    return (
      <div className="App">
        <h1> {this.state.message} !</h1>
        <button onClick={() => this.changeMessage()}>Subscribe </button>
      </div>
    );
  }
}

export default Greet;
