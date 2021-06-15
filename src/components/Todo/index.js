import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { RobotoRegularText } from "../ui/RobotoRegularText";

import { THEME } from "../../constants";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: THEME.GREY_BORDER,
    borderRadius: 3,
    marginBottom: 10,
  },
});

export const Todo = ({ text, onDelete, onChooseTodo }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onChooseTodo}
    onLongPress={onDelete}
  >
    <View style={styles.root}>
      <RobotoRegularText style={styles.title}>{text}</RobotoRegularText>
    </View>
  </TouchableOpacity>
);
