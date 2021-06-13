import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_BORDER_COLOR,
    borderBottomWidth: 2,
    width: "100%",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export const EditModal = ({ visible, todoTitle, onClose, updateTodo }) => {
  const [newTitle, setNewTitle] = useState(() => todoTitle);

  const onHandleSave = () => {
    if (newTitle.trim()) {
      updateTodo(newTitle);
      onClose();
    } else {
      Alert.alert("Введите значение");
    }
  };

  return (
    <Modal animationType='slide' visible={visible}>
      <View style={{ ...styles.root, ...THEME.COMMON_PADDING }}>
        <TextInput
          style={styles.input}
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <View style={styles.footer}>
          <Button title='отмена' color={THEME.DANGER} onPress={onClose} />
          <Button title='сохранить' onPress={onHandleSave} />
        </View>
      </View>
    </Modal>
  );
};
