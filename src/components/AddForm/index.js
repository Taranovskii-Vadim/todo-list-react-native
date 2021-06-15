import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.9,
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_BORDER_COLOR,
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
        placeholder='Введите значение'
        value={val}
        onChangeText={setVal}
        autoCorrect={false}
        autoCapitalize='none'
      />
      <AntDesign.Button onPress={onHandlePress} name='pluscircleo'>
        Добавить
      </AntDesign.Button>
    </View>
  );
};
