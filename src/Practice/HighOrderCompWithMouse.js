import React from "react";
import "./togglestyle.css";

// function Mousemovement(event) {
//   const { x,y } = () => {
//     window.addEventListener("mousemove", Mousemovement);
//   };
//   return [x, y];
// }

function MouseOnMove() {
  // const [x, y] = Mousemovement();
  // return (
  //   <>
  //     <h1> Lets see how mouse moves </h1>
  //     <h1> X{x} ,Y{y}</h1>
  //   </>
  // );
  function handleClick(e) {
    // e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

export default MouseOnMove;
