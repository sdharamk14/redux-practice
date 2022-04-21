import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cakeReducer from "./reducers/CakeReducer";
import icecreamReducer from "./reducers/IcecreamReducer";
import todoReducer from "./reducers/TodoReducer";
import userReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
  todo: todoReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
