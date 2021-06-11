import React from "react";
import { View, FlatList } from "react-native";

import { AddForm } from "../../components/AddForm";
import { Todo } from "../../components/Todo";

import { THEME } from "../../constants";

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
      <FlatList
        style={THEME.COMMON_PADDING}
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Todo
            text={item.title}
            onDelete={() => onHandleDelete(item.id)}
            onChooseTodo={() => onChooseTodo(item.id)}
          />
        )}
      />
    </>
  );
};
