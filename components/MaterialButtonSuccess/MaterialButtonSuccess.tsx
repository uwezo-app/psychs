import React from "react";
import {
  StyleSheet,
  StyleProp,
  TouchableOpacity,
  Text,
  TextStyle,
  ButtonProps,
} from "react-native";

interface Props extends ButtonProps {
  disabled?: boolean;
  style?: StyleProp<TextStyle>;
}

function MaterialButtonSuccess(props: Props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.container, props.style]}
    >
      <Text style={styles.caption}>{props.title || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
  },
});

export default MaterialButtonSuccess;
