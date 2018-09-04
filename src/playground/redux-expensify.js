import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};
// REMOVE_EXPENSE
const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};
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
  };
};

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
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

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
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

// Filters Reducer

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
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
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

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? 1 : -1;
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
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 200, createdAt: -1000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "Gas", amount: 400, createdAt: 700 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(
//   editExpense(expenseTwo.expense.id, { note: "Starbucks coffee", amount: 500 })
// );

//store.dispatch(setTextFilter("reNt"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "abcdef",
      description: "January rent",
      note: "lorem ipsum dolor sit amet",
      amount: 1200,
      createdAt: 0
    }
  ],
  filters: {
    text: "",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
