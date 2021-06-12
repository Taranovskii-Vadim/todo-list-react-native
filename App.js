import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Alert } from "react-native";

import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

import { Navbar } from "./src/components/Navbar";

const App = () => {
  const [todoId, setTodoId] = useState(() => null);
  const [todos, setTodos] = useState(() => []);

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
            setTodos(prev => prev.filter(item => item.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const onHandleAdd = title =>
    setTodos(prev => [...prev, { id: prev.length + 1, title }]);

  return (
    <View style={{ flex: 1 }}>
      <Navbar title='список задач' />
      {todoId ? (
        <TodoScreen
          todo={todos.find(item => item.id === todoId)}
          resetTodo={() => setTodoId(null)}
          onHandleDelete={onHandleDelete}
        />
      ) : (
        <MainScreen
          todos={todos}
          onHandleAdd={onHandleAdd}
          onHandleDelete={onHandleDelete}
          onChooseTodo={setTodoId}
        />
      )}
      <StatusBar style='auto' />
    </View>
  );
};

export default App;
