import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
//import getVisibleExpenses from "./selectors/expenses";
// import {
//   setTextFilter,
//   sortByDate,
//   sortByAmount,
//   setStartDate,
//   setEndDate
// } from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
//import promises from './playground/promises';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    store.dispatch(logout());
    history.push("/");
  }
});
