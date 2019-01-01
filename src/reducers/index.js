import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  // es6 shorthand property name
  courses,
  authors
});

export default rootReducer;
