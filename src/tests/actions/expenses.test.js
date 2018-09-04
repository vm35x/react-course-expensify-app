import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "abc123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should set up edit expense action object", () => {
  const action = editExpense("abc123", { note: "updated note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { note: "updated note" }
  });
});

test("should set up add expense action object", () => {
  const expenseData = {
    description: "new description",
    note: "new note",
    amount: 100,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("should set up add expense action object", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

