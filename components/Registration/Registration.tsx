import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Cpassword: string;
}

export default function Registration() {
  const navigation = useNavigation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Cpassword: "",
    },
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);

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
    navigation.navigate("Login");
  };

  return(
      
<View style={styles.container}>
<Image
            source={require('../assets/logo.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={{ alignSelf:'center', marginTop: 10, fontSize: 25}}>Register</Text>

       

<View style={styles.action}>
       <Ionicons name="person" color={'black'} size={15} />
        <TextInput {...register('FirstName',{required:true})} placeholder="First Name" style={styles.textInput} autoCompleteType="name"/>
        {errors.FirstName ? <Text>{errors.FirstName.message}</Text>:null}
</View> 

     

<View style={styles.action}>
        <Ionicons name="person" color={'black'} size={15} />
        <TextInput {...register('LastName',{required:true})} placeholder="Last Name" style={styles.textInput} autoCompleteType="name"/>
        {errors.LastName ? <Text>{errors.LastName.message}</Text>:null}
</View>    
     

      <View style={styles.action}>
      <MaterialIcons name="email" color={'black'} size={15} />
        <TextInput {...register('Email',{required:true})} placeholder="Email" style={styles.textInput} autoCompleteType="email"
         />
        {errors.Email ? <Text>{errors.Email.message}</Text>:null}
     </View>

     
   
    <View style={styles.action}>
    <Fontisto name="user-secret" color={'black'} size={15} />
        <TextInput {...register('Password',{required:true, minLength:{value: 8, message:"must be 8 char"},
         validate:(value: string)=>
         {return[/[A-Z]/,/[a-z]/,/[0-9]/,/[^a-zA-z0-9]/,].every((pattern)=>pattern.test(value))|| "must include lower, upper, number and special characters";},
         })} placeholder="Set Password" style={styles.textInput} autoCompleteType="password"
         secureTextEntry={true} />
        {errors.Password ? <Text>{errors.Password.message}</Text>:null}
        </View>

      
   
   
    <View style={styles.action}>
    <Fontisto name="user-secret" color={'black'} size={15} />
        <TextInput {...register('Cpassword',{required:true,
          validate: (value: {})=>
            value === password.current|| "The passwords do not match",
            })}  placeholder="Confirm Password" style={styles.textInput} autoCompleteType="password"
            secureTextEntry={true}/>
        {errors.Cpassword ? <Text>{errors.Cpassword.message}</Text>:null}
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      
        </View>
     
       
    );
}
