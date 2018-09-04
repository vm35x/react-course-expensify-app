// SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

// SORT_BY_DATE
export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
    //sortBy: 'date'
  };
};

// SORT_BY_AMOUNT
export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
    //sortBy: 'amount'
  };
};

// SET_START_DATE
export const setStartDate = (startDate = undefined) => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

// SET_END_DATE
export const setEndDate = (endDate = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};