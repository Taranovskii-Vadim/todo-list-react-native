import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../../constants";

import { RobotoBoldText } from "../RobotoBoldText";

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
  },
});

export const CustomButton = ({ children, onPress, color = THEME.GREY }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.root, backgroundColor: color }}>
        <RobotoBoldText style={styles.text}>{children}</RobotoBoldText>
      </View>
    </TouchableOpacity>
  );
};
