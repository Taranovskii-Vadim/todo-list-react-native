import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { THEME } from "../../../constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const AppLoader = () => (
  <View style={styles.root}>
    <ActivityIndicator color={THEME.MAIN_BORDER_COLOR} size={50} />
  </View>
);
