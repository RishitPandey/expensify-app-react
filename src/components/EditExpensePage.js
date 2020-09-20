import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import expenses from '../selectors/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          //* since store is available through the provider
          //* props.dispatch() is valid.
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          console.log('updated', expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/')
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage);

//* the return value of mapStateToProps will be an object derived from state (as it lives in the store),
//* whose keys will be passed to your target component (the component connect is applied to) as props.
//* This means that the state as consumed by your target component can have a wildly different structure from the state as it is stored on your store.