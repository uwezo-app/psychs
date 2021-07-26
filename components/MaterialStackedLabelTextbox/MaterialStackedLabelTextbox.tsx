import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props extends TextInputProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

function MaterialStackedLabelTextbox({ label, ...props }: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default MaterialStackedLabelTextbox;
