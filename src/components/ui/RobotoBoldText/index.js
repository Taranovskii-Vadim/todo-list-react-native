import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    fontFamily: "roboto-bold",
  },
});

export const RobotoBoldText = ({ style, children }) => (
  <Text style={{ ...styles.root, ...style }}>{children}</Text>
);
