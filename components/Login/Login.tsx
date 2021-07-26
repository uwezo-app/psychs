import React, { useState } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../App";
import getMoviesFromApi from "../../api/dummy";
import { StyleSheet } from "react-native";
import MaterialRightIconTextbox from "..//MaterialRightIconTextbox/MaterialRightIconTextbox";
import MaterialStackedLabelTextbox from "../MaterialStackedLabelTextbox/MaterialStackedLabelTextbox";
import MaterialButtonSuccess from "../MaterialButtonSuccess/MaterialButtonSuccess";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const navigate = () => {
    navigation.navigate("Registration");
  };

  const onPress = () => {
    getMoviesFromApi().then((data: any) => {
      console.log(data);
    });
    console.log();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.title}>Login</Text>
        <MaterialStackedLabelTextbox
          label="Email"
          placeholder={"Enter your Email address"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCompleteType="email"
          style={styles.materialStackedLabelTextbox}
        />

        <MaterialRightIconTextbox
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
          style={styles.materialStackedLabelTextbox}
        />

        <MaterialButtonSuccess
          title="Login"
          onPress={onPress}
          style={styles.materialButtonSuccess}
        />

        <Text style={styles.text}>
          Don't have an account yet?
          <Text onPress={navigate} style={styles.navigation}>
            click here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  //   width: 351,
  //   height: 520,
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
  title: {
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
  materialButtonSuccess: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(103,171,24,1)",
    marginTop: 29,
    marginLeft: 115,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
  },
  navigation: {
    color: "rgba(103,171,24,1)",
    marginLeft: 5,
  },
});
