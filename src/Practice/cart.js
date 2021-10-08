import React, { Component } from "react";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      items: 0,
      total: 0
    };
  }

  changeItem() {
    this.setState({
      total: 5 * this.state.items
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1> Number of items in cart :{items}</h1>
        <button onClick={() => this.setState({ items: items + 1 })}>
          {" "}
          Add Items{" "}
        </button>
        <h1> Total Price :{this.state.total} </h1>
        <button onClick={() => this.changeItem()}> CheckOut </button>
      </div>
    );
  }
}
