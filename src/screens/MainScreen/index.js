import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

import { AddForm } from "../../components/AddForm";
import { Todo } from "../../components/Todo";
import { RobotoBoldText } from "../../components/ui/RobotoBoldText";

import { THEME } from "../../constants";

const styles = StyleSheet.create({
  imgWrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  noData: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export const MainScreen = ({
  todos,
  onHandleAdd,
  onHandleDelete,
  onChooseTodo,
}) => {
  return (
    <>
      <View style={THEME.COMMON_PADDING}>
        <AddForm addTodo={onHandleAdd} />
      </View>
      {todos.length ? (
        <FlatList
          style={THEME.COMMON_PADDING}
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Todo
              text={item.title}
              onDelete={() => onHandleDelete(item)}
              onChooseTodo={() => onChooseTodo(item.id)}
            />
          )}
        />
      ) : (
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={require("../../../assets/noData.png")}
          />
          <RobotoBoldText style={styles.noData}>
            Пока что задач нет :(
          </RobotoBoldText>
        </View>
      )}
    </>
  );
};
