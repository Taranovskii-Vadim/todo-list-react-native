import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { TodosState } from "./src/context/todosContext/todosState";
import { TodoState } from "./src/context/todoContext/todoState";

import { ProtectedScreens } from "./src/screens";
import { Navbar } from "./src/components/Navbar";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

const App = () => {
  const [isReady, setIsReady] = useState(() => false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar title='список задач' />
      <TodosState>
        <TodoState>
          <ProtectedScreens />
        </TodoState>
      </TodosState>
      <StatusBar style='auto' />
    </View>
  );
};

export default App;
