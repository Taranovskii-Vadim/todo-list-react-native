import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    <Text style={styles.text}>{title}</Text>
  </View>
);
