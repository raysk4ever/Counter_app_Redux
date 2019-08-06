import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducres/rootReducre";
import App from "./components/app";

const store = createStore(rootReducer);
console.log(store.getState());

console.log(
  store.subscribe(() => {
    console.log("Subscribe", store.getState());
  })
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
