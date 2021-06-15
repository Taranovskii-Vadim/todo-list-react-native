import React, { useState } from "react";
import { View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

import { Navbar } from "./src/components/Navbar";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

const App = () => {
  const [isReady, setIsReady] = useState(() => false);
  const [todoId, setTodoId] = useState(() => null);
  const [todos, setTodos] = useState(() => []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    );
  }

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

  const onHandleChange = (id, title) =>
    setTodos(prev =>
      prev.map(item => {
        if (item.id === id) {
          item.title = title;
        }
        return item;
      })
    );

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
          onHandleChange={onHandleChange}
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
