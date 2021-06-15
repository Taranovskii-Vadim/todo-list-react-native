import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { THEME } from "../../../constants";

import { RobotoBoldText } from "../RobotoBoldText";

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textTransform: "uppercase",
  },
});

export const CustomButton = ({
  children,
  onPress,
  style,
  color = THEME.GREY,
}) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.root, ...style, backgroundColor: color }}>
        <RobotoBoldText style={styles.text}>{children}</RobotoBoldText>
      </View>
    </Wrapper>
  );
};
