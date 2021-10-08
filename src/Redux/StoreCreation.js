import { createStore } from "redux";

const initialState = [];

function empReducer(currentState = initialState, action) {
  switch (action.type) {
    case "ADD_INFO": {
      return [...currentState, { empname: action.empname, getSalary: false }];
    }
    case "GOT_IT": {
      return currentState.map((el) => {
        if (el.empname === action.empname) {
          return { ...el, getSalary: !el.getSalary };
        }
        return el;
      });
    }
    case "MARK_ALL": {
      return currentState.map((el) => {
        return { ...el, getSalary: true };
      });
    }
    default:
      return currentState;
  }
}
const store = createStore(empReducer);

export { store };
