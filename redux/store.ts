import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// let currentState = store.getState();
// store.subscribe(() => {
//   let prevState = currentState;
//   currentState = store.getState();
// });

export default store;
