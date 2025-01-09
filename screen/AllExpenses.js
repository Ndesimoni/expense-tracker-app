import React, { useContext } from "react";

import { View, Text } from "react-native";
import ExpensesOutPut from "../components/Expenses/ExpensesOutPut";
import { ExpensesContext } from "../store/useContext";

const AllExpenses = () => {
  const expensesCtr = useContext(ExpensesContext);
  return (
    <>
      <ExpensesOutPut
        expenses={expensesCtr.expenses}
        expensesPeriodName="total"
        fallBackText="no registered expense found"
      />
    </>
  );
};

export default AllExpenses;
