import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
//const removeExpense = (id) => ({
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id: id
});

// EDIT_EXPENSE
//const editExpense = (id, updates) => ({
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};
// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
    //sortBy: 'date'
  };
};
// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
    //sortBy: 'amount'
  };
};
// SET_START_DATE
const setStartDate = (startDate = undefined) => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};
// SET_END_DATE
const setEndDate = (endDate = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  //debugger;
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    //return state.concat(action.expense)
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Filters Reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
        //sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
        //sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//Timestamps (milliseconds)
//January 1st 1970 (unix epoch)

//Get Visible Expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      //debugger;
      // console.log(sortBy);
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
      return 0;
    });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300, createdAt: -1000 })
);

//store.dispatch(removeExpense(expenseOne.expense.id));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("coffee"));
// store.dispatch(setTextFilter());

//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

//console.log(expenseOne);

const demoState = {
  expenses: [
    {
      id: "111",
      description: "lorem ipsum dolor",
      note: "abcdefg",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: "Jane",
//   age: 33,
//   location: "Tampa"
// };

// const updates = { age: 47, location: "" };

// const userTwo = {
//   ...user,
//   ...updates
// };

// console.log({
//   user
// });

// console.log({
//   userTwo
// });
