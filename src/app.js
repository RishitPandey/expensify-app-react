import React from 'react';
import ReactDOM from 'react-dom';
//*For provider function.
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//* the directoy './store/---' contains two stores
//* that are configured here.
const store = configureStore();
//*The dispatch function dispatches an action.
//*This is the only way to trigger a state change.
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//*The subscribe() adds a change listener.
//*It will be called any time an action is dispatched,
//*and some part of the state tree may potentially have changed.

//*The getState() returns the current state tree of your application.
//*It is equal to the last value returned by the store's reducer.
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


//*The provider makes the store available to the entire file system.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('react-content'));
