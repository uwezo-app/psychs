import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialStackedLabelTextbox from "../MaterialStackedLabelTextbox/MaterialStackedLabelTextbox";
import MaterialButtonSuccess from "../MaterialButtonSuccess/MaterialButtonSuccess";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
// import { color } from "react-native-reanimated";

type LgoinScreenRouteProp = RouteProp<RootStackParamList, "Registration">;

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Registration"
>;

type Props = {
  route: LgoinScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

function Registration({ navigation }: Props) {
  const [fname, setfname] = useState<string>("");
  const [lname, setlname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setcPassword] = useState<string>("");

  const navigate = () => {
    navigation.navigate("Login");
  };

  const validateInputs = () => {
    // Will disable the button if any of the fields are empty and password and confirm password don't match
    return (
      !fname ||
      !lname ||
      !email ||
      !password ||
      !cpassword ||
      password != cpassword
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.signUp}>Sign Up</Text>
        <MaterialStackedLabelTextbox
          label="First Name"
          placeholder="Enter Your First Name"
          value={fname}
          onChangeText={setfname}
          style={styles.materialStackedLabelTextbox}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Last Name"
          placeholder="Enter Your Last Name"
          value={lname}
          onChangeText={setlname}
          style={styles.materialStackedLabelTextbox2}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Email "
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Your Email Address"
          style={styles.materialStackedLabelTextbox3}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          secureTextEntry
          label="Password"
          placeholder="Please set a password"
          value={password}
          onChangeText={setPassword}
          style={styles.materialStackedLabelTextbox1}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          secureTextEntry
          label="Confirm Password"
          placeholder="Please confirm set password"
          value={cpassword}
          onChangeText={setcPassword}
          style={styles.materialStackedLabelTextbox12}
        ></MaterialStackedLabelTextbox>
        <MaterialButtonSuccess
          title="Register"
          disabled={validateInputs()}
          style={styles.materialButtonSuccess}
          onPress={() => {}}
        ></MaterialButtonSuccess>

        <Text style={styles.text}>
          Already have an account?
          <Text onPress={navigate} style={styles.navigation}>
            click here
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rect: {
    width: 351,
    height: 700,
    backgroundColor: "rgba(255,255,255,1)",
  },
  signUp: {
    color: "rgba(80,126,33,1)",
    fontSize: 24,
    textAlign: "center",
    width: 102,
    height: 39,
    lineHeight: 50,
    letterSpacing: 0,
    marginTop: 50,
    marginLeft: 115,
  },
  materialStackedLabelTextbox: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 21,
    marginLeft: 17,
  },
  materialStackedLabelTextbox2: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 15,
    marginLeft: 17,
  },
  materialStackedLabelTextbox3: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 22,
    marginLeft: 17,
  },
  materialStackedLabelTextbox1: {
    height: 70,
    width: 298,
    marginTop: 18,
    marginLeft: 17,
  },
  materialStackedLabelTextbox12: {
    height: 70,
    width: 298,
    marginTop: 19,
    marginLeft: 16,
  },
  materialButtonSuccess: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(103,171,24,1)",
    marginTop: 29,
    marginLeft: 115,
  },
  text: {
    textAlign: "center",
  },
  navigation: {
    color: "rgba(103,171,24,1)",
    marginLeft: 5,
  },
});

export default Registration;
