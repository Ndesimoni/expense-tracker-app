import React, { useContext } from "react";

import ExpensesOutPut from "../components/Expenses/ExpensesOutPut";
import { ExpensesContext } from "../store/useContext";
import { getDateMinusDays } from "../utils/date";

const RecentExpense = () => {
  const expenseCtr = useContext(ExpensesContext);

  const recentExpense = expenseCtr.expenses.filter((expense) => {
    const today = new Date();
    const days7daysAgo = getDateMinusDays(today, 7);
    return expense.date > days7daysAgo;
  });

  return (
    <>
      <ExpensesOutPut
        expenses={recentExpense}
        expensesPeriodName="last 7 days"
        fallBackText="no expense available for last 7 days"
      />
    </>
  );
};

export default RecentExpense;
