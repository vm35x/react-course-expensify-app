import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';

test("should return 0 if no expenses", () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0)
});

test("should correctly add up  single expenses", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(1195)
});

test("should correctly add up multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(3461)
});
