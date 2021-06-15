import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import { THEME } from "../../constants";

import { RobotoBoldText } from "../ui/RobotoBoldText";

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerIos: {
    backgroundColor: THEME.MAIN_BORDER_COLOR,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 20,
  },
});

export const Navbar = ({ title }) => (
  <View
    style={{
      ...styles.container,
      ...Platform.select({
        android: styles.containerAndroid,
        ios: styles.containerIos,
      }),
    }}
  >
    <RobotoBoldText style={styles.text}>{title}</RobotoBoldText>
  </View>
);
