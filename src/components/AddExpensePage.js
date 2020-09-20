import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
    //* onSubmit is an argument passed to the ExpenseForm component.
      onSubmit={(expense) => {
        //*Since we provided store using the provider
        //*from redux we can access it here using props.
        props.dispatch(addExpense(expense));
        //*The history array is used to redirect to the element
        //*passed here.
        props.history.push('/');
      }}
    />
  </div>
);
//*The connect() connects the passed component to the store.
export default connect()(AddExpensePage);
