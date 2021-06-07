import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Navbar } from "./src/components/Navbar";
import { AddForm } from "./src/components/AddForm";
import { Todo } from "./src/components/Todo";

const App = () => {
  const [todos, setTodos] = useState(() => [
    { id: 0, title: "test" },
    { id: 1, title: "test" },
  ]);

  const onHandleDelete = id =>
    setTodos(prev => prev.filter(item => item.id !== id));

  const onHandleAdd = title =>
    setTodos(prev => [...prev, { id: prev.length + 1, title }]);

  return (
    <View>
      <Navbar title='список задач' />
      <View style={styles.root}>
        <AddForm addTodo={onHandleAdd} />
        {todos.map(item => (
          <Todo
            key={item.id}
            text={item.title}
            onDelete={() => onHandleDelete(item.id)}
          />
        ))}
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
  },
});

export default App;
