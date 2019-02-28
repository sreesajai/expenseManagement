import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './routers/AppRouter';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Internet bill', createdAt : 1000}));
store.dispatch(addExpense({ description:'Food', amount:109500}));

// store.dispatch(setTextFilter('Gas'));
// setTimeout(() => {
//     store.dispatch(setTextFilter('bil'));
// },3000)


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

