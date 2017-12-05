import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const note = 'A new note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { note }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('A new note');
});

test('should not edit an expense if not found', () => {
  const note = 'A new note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { note }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
