import { createStore } from "redux";

// const add = ({a, b}, c) => {
//   return a + b + c
// }

// console.log(add({a: 1, b: 3}, 100))

// const incrementCount = (payload={}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({count} = {}) => ({
  type: 'SET',
  count
})

const countReducer = ((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "SET":
      return { count: action.count };
    case "RESET":
      return { count: (state.count = 0) };
    default:
      return state;
  }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: "3"
// });

// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "SET",
//   count: 101
// });

//unsubscribe()

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 6 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({count: 101}));
