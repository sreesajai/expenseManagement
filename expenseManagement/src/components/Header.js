import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expense Management</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active" >Add Expense</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink><br/>
    </header>
);

export default Header;
