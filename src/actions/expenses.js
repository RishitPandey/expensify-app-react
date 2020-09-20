import { v1 as uuid } from 'uuid';
//* there are 4 versions as of now for uuid
//* and they are v1, v2, v3 and v4.

// ADD_EXPENSE
export const addExpense = (
  //* passing the default object's value.
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    //* shorthand syntax for description: description
    //* if the variable name is same.
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
