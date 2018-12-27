// root reducer
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // es6 shorthand property name
  courses
});

export default rootReducer;
