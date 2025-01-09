import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../styles";

const ExpensesOutPut = ({ expenses, expensesPeriodName, fallBackText }) => {
  let context = <Text style={styles.fallBackText}>{fallBackText}</Text>;

  if (expenses.length > 0) {
    context = (
      <ExpensesSummary expenses={expenses} periodName={expensesPeriodName} />
    );
  }
  return (
    <View style={styles.container}>
      {context}

      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutPut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallBackText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});
