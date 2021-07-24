import React, {useState}  from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialStackedLabelTextbox1 from "../components/MaterialStackedLabelTextbox1";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";

function Index() {
    const [fname, setfname] = useState<string>("");
    const [lname, setlname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [cpassword, setcPassword] = useState<string>();
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.signUp}>Sign Up</Text>
        <MaterialStackedLabelTextbox
          label="First Name"
          inputStyle="Enter Your First Name"
          value={fname}
          onChangeText={setfname}
          style={styles.materialStackedLabelTextbox}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Last Name"
          inputStyle="Enter Your Last Name"
          value={lname}
          onChangeText={setlname}
          style={styles.materialStackedLabelTextbox2}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Email "
          value={email}
          onChangeText={setEmail}
          inputStyle="Enter Your Email Address"
          style={styles.materialStackedLabelTextbox3}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox1
          label="Password"
          inputStyle="Please set a password"
          value={password}
          onChangeText={setPassword}
          style={styles.materialStackedLabelTextbox1}
        ></MaterialStackedLabelTextbox1>
        <MaterialStackedLabelTextbox1
          label="Confirm Password"
          inputStyle="Please confirm set password"
          value={cpassword}
          onChangeText={setcPassword}
          style={styles.materialStackedLabelTextbox12}
        ></MaterialStackedLabelTextbox1>
        <MaterialButtonSuccess
          caption="Register"
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 351,
    height: 520,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 351,
    height: 700,
    backgroundColor: "rgba(255,255,255,1)"
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
    marginLeft: 115
  },
  materialStackedLabelTextbox: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 21,
    marginLeft: 17
  },
  materialStackedLabelTextbox2: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 15,
    marginLeft: 17
  },
  materialStackedLabelTextbox3: {
    height: 70,
    width: 298,
    backgroundColor: "#fff",
    marginTop: 22,
    marginLeft: 17
  },
  materialStackedLabelTextbox1: {
    height: 70,
    width: 298,
    marginTop: 18,
    marginLeft: 17
  },
  materialStackedLabelTextbox12: {
    height: 70,
    width: 298,
    marginTop: 19,
    marginLeft: 16
  },
  materialButtonSuccess: {
    height: 36,
    width: 100,
    backgroundColor: "rgba(103,171,24,1)",
    marginTop: 29,
    marginLeft: 115
  }
});

export default Index;
