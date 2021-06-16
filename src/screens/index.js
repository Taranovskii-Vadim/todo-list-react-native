import React, { useContext } from "react";
import { Alert } from "react-native";
import { TodosContext } from "../context/todosContext";
import { TodoContext } from "../context/todoContext";

import { MainScreen } from "./MainScreen";
import { TodoScreen } from "./TodoScreen";

export const ProtectedScreens = () => {
  const { todos, onDeleteTodo } = useContext(TodosContext);

  const { todoId, setTodoId } = useContext(TodoContext);

  const onHandleDelete = ({ id, title }) => {
    Alert.alert(
      "Удаление",
      `Вы уверены что хотите удалить "${title}" ?`,
      [
        {
          text: "Нет",
          style: "cancel",
        },
        {
          text: "Да",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            onDeleteTodo(id);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      {todoId ? (
        <TodoScreen
          todo={todos.find(item => item.id === todoId)}
          resetTodo={() => setTodoId(null)}
          onHandleDelete={onHandleDelete}
        />
      ) : (
        <MainScreen
          todos={todos}
          onHandleDelete={onHandleDelete}
          onChooseTodo={setTodoId}
        />
      )}
    </>
  );
};
