import React, { useState}  from "react";
import { StyleSheet, View, Text, TextInput} from "react-native";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";






function Registration(props) {
    const [fname, setfname] = useState<string>("");
    const [lname, setlname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [cpassword, setcPassword] = useState<string>();
    
    
   
    
        let errors = {};
        let isValid = true;
        if (password!== "undefined" && cpassword !== "undefined") {
          
            if (password!=cpassword) {
              isValid = false;
              errors["password"] = "Passwords don't match.";
              var erry= errors["password"]
            }
            else{
                errors["password"] = "Passwords match.";
                var erry= errors["password"]
            }
          } 
        

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.signUp}>Sign Up</Text>
        <MaterialStackedLabelTextbox
          label="First Name"
          inputStyle="Enter your First Name"
          value={fname}
          onChangeText={setfname}
          style={styles.materialStackedLabelTextbox}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Last Name"
          inputStyle="Enter your Last Name"
          value={lname}
          onChangeText={setlname}
          style={styles.materialStackedLabelTextbox2}
        ></MaterialStackedLabelTextbox>
        <MaterialStackedLabelTextbox
          label="Email "
          value={email}
          onChangeText={setEmail}
          inputStyle="Enter your Email Address"
          style={styles.materialStackedLabelTextbox3}
        ></MaterialStackedLabelTextbox>
       
      <View style={[styles.container1]}>
      <Text style={styles.label}>{props.label || "Password"}</Text>
      <TextInput
       placeholder={"Enter your Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      ></TextInput>

    </View>
        
    <View style={[styles.container1]}>
      <Text style={styles.label}>{props.label || "Confirm Password"}</Text>
      <TextInput
       placeholder={"Confirm your Password"}
        value={cpassword}
        onChangeText={setcPassword}
        secureTextEntry={true}
      ></TextInput>
      <Text style={styles.label}>{props.label || erry}</Text>
    </View>
        <MaterialButtonSuccess
          caption="Register"
          style={styles.materialButtonSuccess}
        ></MaterialButtonSuccess>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        width: 300,
        height:90,
        marginLeft: 17,
        backgroundColor: "transparent"
      },
      label: {
        fontSize: 12,
        textAlign: "left",
        color: "#000",
        opacity: 0.6,
        paddingTop: 30,
        marginBottom:10
        
      },
      inputStyle: {
        color: "#000",
        height: 40,
        fontSize: 16,
        alignSelf: "flex-start",
        flex: 2,
        lineHeight: 16,
        paddingTop: 20,
        paddingBottom: 8
      },
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

export default Registration;
