import "./styles.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";
import cakeReducer from "./redux/CakeReducer";
import icecreamReducer from "./redux/IcecreamReducer";
import userReducer, {
  REQUEST_USER,
  REQUEST_USER_FAILED,
  REQUEST_USER_SUCCESS
} from "./redux/UserReducer";
import { composeWithDevTools } from "redux-devtools-extension";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer
});

const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_USER });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: REQUEST_USER_SUCCESS,
          payload: {
            users: data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: REQUEST_USER_FAILED,
          payload: {
            message: err.message
          }
        });
      });
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "ADD_CAKE" });
store.dispatch({ type: "ADD_CAKE" });
store.dispatch({ type: "ADD_ICECREAM" });
store.dispatch(getUsers());
// setTimeout(() => {
//   console.log("called");
//   store.dispatch(addCakeAsync());
// }, 1000);
// // unsubscribe();

// const
