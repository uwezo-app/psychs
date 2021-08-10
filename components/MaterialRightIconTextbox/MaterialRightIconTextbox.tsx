import React from "react";
import {
  StyleSheet,
  StyleProp,
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

function MaterialRightIconTextbox({ label, ...props }: Props) {
  return (
    <View style={[props.style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput {...props} style={styles.inputStyle}></TextInput>
        <Ionicons name="eye" style={styles.iconStyle}></Ionicons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
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
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8,
  },
});

export default MaterialRightIconTextbox;
