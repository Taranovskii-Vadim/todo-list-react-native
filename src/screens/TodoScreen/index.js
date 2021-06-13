import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { THEME } from "../../constants";

import { EditModal } from "../../components/EditModal";
import { AppCard } from "../../components/ui/AppCard";

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    ...THEME.COMMON_PADDING,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 21,
  },
});

export const TodoScreen = ({
  todo,
  resetTodo,
  onHandleDelete,
  onHandleChange,
}) => {
  const [isModal, setIsModal] = useState(() => false);

  const updateTodo = title => onHandleChange(todo.id, title);

  return (
    <View style={styles.root}>
      <EditModal
        visible={isModal}
        todoTitle={todo.title}
        onClose={() => setIsModal(false)}
        updateTodo={updateTodo}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='редактировать' onPress={() => setIsModal(true)} />
      </AppCard>
      <View style={styles.footer}>
        <View style={styles.button}>
          <Button title='на главную' color={THEME.GREY} onPress={resetTodo} />
        </View>
        <View style={styles.button}>
          <Button
            title='удалить'
            color={THEME.DANGER}
            onPress={() => onHandleDelete(todo)}
          />
        </View>
      </View>
    </View>
  );
};
