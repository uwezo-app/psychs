import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  GestureResponderEvent,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

interface FormData {
  Email: string;
  Password: string;
  Cpassword: string;
}

const Login = () => {
  const HandleResetPassword = () => {
    navigation.navigate("GetEmail");
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);
  const navigation = useNavigation();

  const onSubmit = async ({ Cpassword, ...rest }: FormData) => {
    if (!submitting) {
      setSubmitting(true);
      setServerErrors([]);

      const response = await fetch(
        `https://uwezoapp-321219.el.r.appspot.com/register`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...rest }),
        }
      );
      const data = await response.json();

      if (data.status === 200) {
        navigation.navigate("Root");
      } else {
        console.log(" Email or Password is Incorrect");
      }
    }
    setSubmitting(false);
    navigation.navigate("Root");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      ></Image>

      <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 25 }}>
        Login
      </Text>

      <View style={styles.action}>
        <MaterialIcons name="email" color={"black"} size={15} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={value}
              autoCompleteType="email"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name="Email"
          defaultValue=""
        />

        {errors.Email && <Text>Required</Text>}
      </View>

      <View style={styles.action}>
        <Fontisto name="user-secret" color={"black"} size={15} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              value={value}
              autoCompleteType="password"
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
            />
          )}
          name="Password"
          defaultValue=""
        />

        {errors.Password && <Text>Required</Text>}
      </View>

      <TouchableOpacity
        style={styles.commandButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.forgot}>
        <Text> Forgot your password?</Text>
        <Text onPress={HandleResetPassword}> Click Here</Text>
      </View>
    </View>
  );
};
export default Login;
