import "babel-polyfill"; // there is a set of features in ES6 that cannot transpile, so need to use polufill
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import "./styles/styles.css"; // webpack can import CSS files
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  // wrap with provider component to access our redux store
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
