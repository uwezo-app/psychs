import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, View } from "react-native";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";

import ButtonWithSpinner from "../ButtonWithSpinner/ButtonWithSpinner";
import AuthContext from "../../context/auth/context";

import styles from "./styles";

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Cpassword: string;
}

export default function Registration() {
  const authContext = React.useContext(AuthContext);
  const navigation = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Cpassword: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [_, setServerErrors] = useState<Array<string>>([]);

  const onSubmit = async ({ Cpassword, ...rest }: FormData) => {
    const body = { ...rest };
    await authContext.register({
      isSubmitting,
      setIsSubmitting,
      setServerErrors,
      body,
      navigation,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      ></Image>
      <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 25 }}>
        Register
      </Text>

      <View style={styles.action}>
        <Ionicons name="person" color={"black"} size={15} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First Name"
              style={styles.textInput}
              autoCompleteType="name"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="FirstName"
          defaultValue=""
        />

        {errors.FirstName && <Text>Required</Text>}
      </View>

      <View style={styles.action}>
        <Ionicons name="person" color={"black"} size={15} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="LastName"
              style={styles.textInput}
              autoCompleteType="name"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="LastName"
          defaultValue=""
        />

        {errors.FirstName && <Text>Required</Text>}
      </View>

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
              autoCompleteType="email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
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
            minLength: { value: 8, message: "must be 8 char" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              autoCompleteType="password"
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
              value={value}
            />
          )}
          name="Password"
          defaultValue=""
        />

        {errors.Password && <Text>{errors.Password.message}</Text>}
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
              placeholder="Confirm Password"
              style={styles.textInput}
              autoCompleteType="password"
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
              value={value}
            />
          )}
          name="Cpassword"
          defaultValue=""
        />

        {errors.Cpassword && <Text>Required</Text>}
      </View>

      <ButtonWithSpinner
        isSubmitting={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
