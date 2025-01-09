import React, { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date("2023-01-18"),
  },
  {
    id: "e2",
    description: "Paper",
    amount: 9.12,
    date: new Date("2023-01-12"),
  },

  {
    id: "e3",
    description: "rice",
    amount: 89.19,
    date: new Date("2023-01-03"),
  },

  {
    id: "e4",
    description: "books",
    amount: 120.19,
    date: new Date("2023-01-27"),
  },

  {
    id: "e5",
    description: "courses",
    amount: 320.19,
    date: new Date("2023-01-30"),
  },

  {
    id: "e6",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date("2023-01-18"),
  },
  {
    id: "e7",
    description: "Paper",
    amount: 9.12,
    date: new Date("2023-01-12"),
  },

  {
    id: "e8",
    description: "rice",
    amount: 89.19,
    date: new Date("2023-01-03"),
  },

  {
    id: "e9",
    description: "books",
    amount: 120.19,
    date: new Date("2023-01-27"),
  },

  {
    id: "e10",
    description: "courses",
    amount: 320.19,
    date: new Date("2023-01-30"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updateExpenseIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updatableExpense = state[updateExpenseIndex];
      const updateItem = { updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateExpenseIndex] = updateItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpenses(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expenses,
    addExpense: addExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
