import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id, note }) => (
  <div>
  <Link to={`/edit/${id}`}><h3>Description: {description}</h3></Link>
  <p> Amount: {numeral(amount / 100).format('$0,0.00')} - Created At: {moment(createdAt).format('Do MMMM, YYYY')} </p>
  <p> Notes: {note}</p>
  </div>
);

export default ExpenseListItem;
