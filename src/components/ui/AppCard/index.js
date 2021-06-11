import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});

export const AppCard = ({ children, style }) => {
  return <View style={{ ...styles.default, ...style }}>{children}</View>;
};
