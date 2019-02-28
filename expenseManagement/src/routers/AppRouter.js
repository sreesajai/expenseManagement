import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensepage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} ></Route>
                <Route path="/create" component={AddExpensePage} ></Route>
                <Route path="/edit/:id" component={EditExpensepage} ></Route>
                <Route path="/help" component={HelpPage} ></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;