import React, {useState}  from 'react';
import { Controller, useForm } from "react-hook-form";
import styles from'./styles'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,Text, View, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';





interface FormData{
  Password:string;
  Cpassword:string;
 }

const PasswordReset = () => {
 
  
    const { control,formState: { errors }, handleSubmit, getValues}= useForm({
      defaultValues:{
        Password:"",
        Cpassword: ""
      }
    });

     const[submitting, setSubmitting]= useState<boolean>(false);
     const navigation =useNavigation();

    
    
     const onSubmit= async ({Cpassword,...rest}: FormData)=>{
      if(!submitting){
        setSubmitting(true);
        setServerErrors([]);

        const response=await fetch(
          `https://uwezoapp-321219.el.r.appspot.com`,{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({...rest}),
          }
        );
        const data= await response.json();

        if(data.status===200){
          navigation.navigate('Root');
        }else{
          console.log(" Error");
         
        }
      }
      setSubmitting(false);
      navigation.navigate('Root');
}
    
     
    
    
     return(
           
  <View style={styles.container}>
         <Image
            source={require('../assets/logo.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>

         
         
        
     <Text style={{ alignSelf:'center', marginTop: 40, fontSize: 15}}></Text>
       
     
          
     <View style={styles.action}>
    <Fontisto name="user-secret" color={'black'} size={15} />
    <Controller
        control={control}
        rules={{
         required: true,
         minLength:{value: 8, message:"Must have at least 8 characters"},
         validate:(value: string)=>{
           return[/[A-Z]/,/[a-z]/,/[0-9]/,/[^a-zA-z0-9]/,].every((pattern)=>pattern.test(value))|| "Must have: lower, upper, number & special characters";
          }
         
        }}
        render={({ field: { onChange, onBlur } }) => (
          <TextInput placeholder="Set new password" style={styles.textInput} autoCompleteType="password" onChangeText={onChange} onBlur={onBlur} secureTextEntry={true}
          />
         )}
         name="Password" 
         defaultValue=""
        />
       
       
        </View>
        {errors.Password &&  <Text style={styles.forgot}> {errors.Password.message}</Text>}
      
   
   
    <View style={styles.action}>
    <Fontisto name="user-secret" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: true,
         validate: value => {
          if (value === getValues()["Password"]) {
            return true;
          } else {
            return "The passwords do not match";
          }
        }

        }}
        render={({ field: { onChange, onBlur } }) => (
          <TextInput placeholder="Confirm new Password" style={styles.textInput} autoCompleteType="password" onChangeText={onChange} onBlur={onBlur} secureTextEntry={true}
          />
         )}
         name="Cpassword" 
         defaultValue=""
        />
       
        {errors.Cpassword &&  <Text >{errors.Cpassword.message}</Text>}
        
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>

      
      </View>
  
 
    );
}
export default PasswordReset;

function setServerErrors(arg0: never[]) {
  throw new Error('Function not implemented.');
}
function getValues() {
  throw new Error('Function not implemented.');
}

