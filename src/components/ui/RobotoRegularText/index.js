import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    fontFamily: "roboto-regular",
  },
});

export const RobotoRegularText = ({ style, children }) => (
  <Text style={{ ...styles.root, ...style }}>{children}</Text>
);
