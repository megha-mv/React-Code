import { combineReducers, createStore } from "redux";
import empReducer from "./StoreCreation";
import ReducerCounter from "./simpleRedux";

const reducers = combineReducers({
  emp: empReducer,
  counter: ReducerCounter
});

const store = createStore(reducers);

store.dispatch({ type: "ADD_INFO", empName: "Hello" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
console.log(store.getState());

function App() {
  return null;
}

export default App;
