import React from "react";

function H1(props) {
  return <h1> {props.children}</h1>;
  //{props.childern is expression container}
}

function H1child() {
  return <H1>Hello To New World !!</H1>;
}

export default H1child;
