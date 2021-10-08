import React from "react";
import { createStore } from "redux";
// import empReducer from './StoreCreation'

// const reducers = combineReducers({
//   counter : ReducerCounter,
//   empnames : empReducer
// })

const store = createStore(ReducerCounter);

// function App() {
//   return <h1> Lets Learn Redux</h1>;
// }

function ReducerCounter(currentstate = 0, action) {
  switch (action.type) {
    case "INC":
      return currentstate + 1;
    case "DEC":
      return currentstate - 1;
    case "RESET":
      return 0;
    default:
      return currentstate;
  }
}

console.log(store.getState());

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
console.log(store.getState());
// store.dispatch({ type: "RESET" });

// console.log(store.getState());

export default ReducerCounter;
