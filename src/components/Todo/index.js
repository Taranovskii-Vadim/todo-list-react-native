import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 3,
    marginBottom: 10,
  },
});

export const Todo = ({ text, onDelete }) => {
  return (
    <View style={styles.root}>
      <Text>{text}</Text>
      <Button title='удалить' onPress={onDelete} />
    </View>
  );
};
