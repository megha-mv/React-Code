import React from "react";

class Newchild extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name}</h1>
        <h1> {this.props.children}</h1>
      </div>
    );
  }
}

// class ParentFunc extends React.Component {
//   render() {
//     return (
// let App = (
//   <NewChild name="Bruse">
//     <p> Welcome to props.children </p>
//   </NewChild>
// );
// }
// }

export default Newchild;
