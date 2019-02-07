import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }} >Remove</button>
  </div>
);

export default connect()(ExpenseListItem);


// Some Other versions
// const ExpenseListItem = (props) => (
//   <div>
//     <h3>{props.description}</h3>
//     <p>{props.amount} - {props.createdAt}</p>
//     <button onClick={() => {
//       props.dispatch(removeExpense({ id: props.id }))
//     }} >Remove</button>
//   </div>
// );

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   };
// };

// const ExpenseListItem = ({...props}) => (
//   <div>
//     <h3>{props.description}</h3>
//     <p>{props.amount} - {props.createdAt}</p>
//     <button onClick={() => {
//       props.dispatch(removeExpense({ id: props.id }))
//     }} >Remove</button>
//   </div>
// );
