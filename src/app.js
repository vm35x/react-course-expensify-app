import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import filters from "./actions/filters";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 222, createdAt: 1120 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 80, createdAt: 1022 }));
store.dispatch(addExpense({ description: "Cable Bill", amount: 120, createdAt: 933 }));
store.dispatch(addExpense({ description: "Rent", amount: 1120, createdAt: 833 }));
store.dispatch(addExpense({ description: "Coffee", amount: 20, createdAt: 144 }));
store.dispatch(addExpense({ description: "Oil Change", amount: 40, createdAt: 47 }));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//  console.log(visibleExpenses);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
