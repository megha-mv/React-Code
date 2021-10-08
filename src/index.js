import ReactDOM from "react-dom";
import React, { StrictMode } from "react";

// import Emp from "./Practice/empinfoContext";

// import Emp from "./Redux/empInfoRedux2";
import Emp from "./Redux/empInfoRedux";
// import Emp from "./Redux/empInfoComplete";
import { Provider } from "react-redux";
import { store } from "./Redux/StoreCreation";

const el = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <Emp />
    </StrictMode>
  </Provider>,
  el
);
