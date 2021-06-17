import React from "react";
import { View, StyleSheet } from "react-native";

import { RobotoBoldText } from "../RobotoBoldText";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const AppError = ({ error }) => (
  <View style={styles.root}>
    <RobotoBoldText style={{ color: "red" }}>{error}</RobotoBoldText>
  </View>
);
