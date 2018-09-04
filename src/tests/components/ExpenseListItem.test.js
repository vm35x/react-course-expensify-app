import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render expense list item on render", () => {
  // const { description, amount, createdAt, id } = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

