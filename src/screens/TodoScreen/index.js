import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { THEME } from "../../constants";

import { RobotoBoldText } from "../../components/ui/RobotoBoldText";
import { AppCard } from "../../components/ui/AppCard";
import { CustomButton } from "../../components/ui/CustomButton";

import { EditModal } from "../../components/EditModal";

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    ...THEME.COMMON_PADDING,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
  },
  button: {
    width: Dimensions.get("window").width / 3,
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
        <RobotoBoldText style={styles.title}>{todo.title}</RobotoBoldText>
        <CustomButton onPress={() => setIsModal(true)} color='blue'>
          <FontAwesome name='edit' size={20} />
        </CustomButton>
      </AppCard>
      <View style={styles.footer}>
        <CustomButton style={styles.button} onPress={resetTodo}>
          назад
        </CustomButton>
        <CustomButton
          style={styles.button}
          onPress={() => onHandleDelete(todo)}
          color={THEME.DANGER}
        >
          удалить
        </CustomButton>
      </View>
    </View>
  );
};
