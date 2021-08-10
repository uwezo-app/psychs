import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface FormData {
  Email: string;
  Password: string;
  Cpassword: string;
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      Email: "",
      Password: "",
      Cpassword: "",
    },
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);
  const navigation = useNavigation();

  const password = useRef({});
  password.current = watch("Password", "");

  const onSubmit = async ({ Cpassword, ...rest }: FormData) => {
    if (!submitting) {
      setSubmitting(true);
      setServerErrors([]);

      const response = await fetch(
        `${process.env.REACT_NATIVE_GC_APP_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...rest }),
        }
      );
      const data = await response.json();

      if (!data.errors) {
        setServerErrors(data.errors);
      } else {
        console.log(data);
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
        <Text>Email Address</Text>
      </View>
      <View style={styles.action}>
        <TextInput
          {...register("Email", { required: true })}
          placeholder="Email"
          style={styles.textInput}
        />
        {errors.Email ? <Text>{errors.Email.message}</Text> : null}
      </View>

      <View style={styles.action}>
        <Text> Password</Text>
      </View>
      <View style={styles.action}>
        <TextInput
          {...register("Password", {
            required: true,
            minLength: { value: 8, message: "must be 8 char" },
            validate: (value: string) => {
              return (
                [/[A-Z]/, /[a-z]/, /[0-9]/, /[^a-zA-z0-9]/].every((pattern) =>
                  pattern.test(value)
                ) || "must include lower, upper, number and special characters"
              );
            },
          })}
          placeholder="Password"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
        {errors.Password ? <Text>{errors.Password.message}</Text> : null}
      </View>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
