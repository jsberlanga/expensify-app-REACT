import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;


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
