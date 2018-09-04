import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should test default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: ""
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "101",
      description: "Laptop",
      note: "",
      amount: 1001,
      createdAt: 20000
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit expense", () => {
  const amount = 1220;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(1220);
});

test("should not edit expense if id not found", () => {
  const amount = 1220;
  const action = {
    type: "EDIT_EXPENSE",
    id: '',
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
