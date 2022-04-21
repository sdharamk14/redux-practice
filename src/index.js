import "./styles.css";
import App from "./app";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({ type: "ADD_CAKE" });
// store.dispatch({ type: "ADD_CAKE" });
// store.dispatch({ type: "ADD_ICECREAM" });
// store.dispatch(getUsers());
// setTimeout(() => {
//   console.log("called");
//   store.dispatch(addCakeAsync());
// }, 1000);
// // unsubscribe();

// const
