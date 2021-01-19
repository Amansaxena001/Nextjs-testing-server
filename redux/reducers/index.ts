import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { newsReducer } from "./newsReducer";

export default combineReducers({
  news: newsReducer,
  error: errorReducer,
});
