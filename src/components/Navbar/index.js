import React from "react";
import { View, StyleSheet } from "react-native";

import { RobotoBoldText } from "../ui/RobotoBoldText";

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 20,
  },
});

export const Navbar = ({ title }) => (
  <View style={styles.container}>
    <RobotoBoldText style={styles.text}>{title}</RobotoBoldText>
  </View>
);
