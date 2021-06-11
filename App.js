import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

import { Navbar } from "./src/components/Navbar";

const App = () => {
  const [todoId, setTodoId] = useState(() => null);
  const [todos, setTodos] = useState(() => []);

  const onHandleDelete = id =>
    setTodos(prev => prev.filter(item => item.id !== id));

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
