import React from "react";
import "./togglestyle.css";

class RadioButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <input type="radio" name={this.props.name} />
        <label>{children}</label>
        <br />
        <br />
      </>
    );
  }
}

class RadioGroup extends React.Component {
  render() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { name: this.props.name });
    });
  }
}

class EditChildren extends React.Component {
  render() {
    //Here we render three radio button
    return (
      <>
        <h1> Please select any language :</h1>
        <RadioGroup name="lang">
          <RadioButton>HTML</RadioButton>
          <RadioButton>CSS</RadioButton>
          <RadioButton>Bootstrap</RadioButton>
        </RadioGroup>
      </>
    );
  }
}

export default EditChildren;
