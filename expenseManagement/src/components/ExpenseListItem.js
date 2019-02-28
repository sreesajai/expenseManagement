import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        
        <h3>Expense List Item</h3>
        <Link to = {`/edit/${id}`}>
        <p>{description}</p>
        </Link>
        <p>{amount}-{createdAt}</p> 
    </div>
);

export default ExpenseListItem;


// import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

// const ExpenseListItem = (props) => (
//     <div>
//         <h3>Expense List Item</h3>
//         <p>{props.description}</p>
//         <p>{props.amount}-{props.createdAt}</p>
//         <button onClick={()=>{
//         }}>Edit</button>
//     <button onClick={() => {
//         props.dispatch(removeExpense(props.id));
//     }}>Remove</button>
//     </div >
// );



// export default connect()(ExpenseListItem);