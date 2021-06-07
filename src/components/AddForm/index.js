import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";

const styles = StyleSheet.create({
  root: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.9,
    borderBottomWidth: 1,
    borderBottomColor: "#5750e6",
    paddingLeft: 5,
  },
});

export const AddForm = ({ addTodo }) => {
  const [val, setVal] = useState(() => "");

  const onHandlePress = () => {
    if (val.trim()) {
      addTodo(val);
      setVal("");
    } else {
      Alert.alert("Введите значение");
    }
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder='type here'
        value={val}
        onChangeText={setVal}
      />
      <Button title='Добавить' onPress={onHandlePress} />
    </View>
  );
};
