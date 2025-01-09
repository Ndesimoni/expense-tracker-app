import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangedHandler() {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>your expense</Text>
      <View style={styles.rowDiv}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />

        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "yyyy-mm-dd",
            onChangeText: () => {},
            maxLength: 10,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "words",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: "bold",
    color: "white",
    textTransform: "capitalize",
    marginVertical: 24,
    textAlign: "center",
  },
  rowDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
