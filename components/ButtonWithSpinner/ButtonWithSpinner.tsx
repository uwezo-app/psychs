import React from "react";
import {
  Text,
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonWithSpinnerProps {
  isSubmitting: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export default (props: ButtonWithSpinnerProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.commandButton}
        disabled={props.isSubmitting}
        onPress={props.onPress}
      >
        {props.isSubmitting ? (
          <ActivityIndicator animating={props.isSubmitting} color="#00ff00" />
        ) : (
          <Text style={styles.panelButtonTitle}>Submit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#12AD2B",
    alignItems: "center",
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
