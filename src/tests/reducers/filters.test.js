import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup sortBy amount filter values", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toEqual("amount");
});

test("should setup sortBy date filter values", () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date',
  }
  const action = "SORT_BY_DATE"
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should setup sortBy date filter values", () => {
  const text = 'test text filter'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should setup set startd date date filter values", () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should setup set end date filter values", () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
  // const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)});
  // expect(state.endDate).toEqual(moment(0));
});
