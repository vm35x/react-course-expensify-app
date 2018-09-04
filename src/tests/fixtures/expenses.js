import moment from 'moment';

export default [
  {
    id: "1",
    description: "Rent",
    note: "",
    amount: 1195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Gas",
    note: "",
    amount: 2222,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: "3",
    description: "Food",
    note: "",
    amount: 44,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];