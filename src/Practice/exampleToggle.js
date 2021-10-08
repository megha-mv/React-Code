import React from "react";

import "./togglestyle.css";

export default class ExampleToggle extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1> *Lets start with toggle button*</h1>
        <h2> Compound Component Example</h2>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
