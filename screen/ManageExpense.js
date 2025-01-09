import React, { useContext, useLayoutEffect } from "react";

import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../components/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/useContext";
import ExpenseForm from "../components/Expenses/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtr = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpense() {
    console.log(editedExpenseId);
    expenseCtr.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expenseCtr.updateExpense(editedExpenseId, {
        description: "test",
        amount: 29.99,
        date: new Date("2022-05-19"),
      });
    } else {
      expenseCtr.addExpense({
        description: "test !!!!!",
        amount: 29.99,
        date: new Date("2022-05-19"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={confirmHandler}>
          cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={34}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
