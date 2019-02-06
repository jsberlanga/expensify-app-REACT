import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    {
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
// in the first arg we define the things we wanna get off from the store
// in the second arg we define the component we wanna create the connected version of
// the end result is a brand new component, which is our component ExpenseList from props from the store