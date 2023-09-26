import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  /* The purpose of Provider is to make all children container components of App the recipient of store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
