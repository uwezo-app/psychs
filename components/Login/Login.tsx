import React, {useRef, useState}  from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import { useNavigation } from '@react-navigation/native';




interface FormData{
  Email:string;
  Password:string;
  Cpassword:string;
  

}

export default function Login() {
    const { register,formState: { errors }, handleSubmit, watch}= useForm<FormData>({
      defaultValues:{
        Email: "",
        Password:"",
        Cpassword:""
      }
    });

     const[submitting, setSubmitting]= useState<boolean>(false);
     const [serverErrors, setServerErrors] = useState<Array<string>>([]);
     const navigation =useNavigation();

      

    const password = useRef({});
    password.current = watch("Password", "");
    
    const onSubmit= async ({Cpassword,...rest}: FormData)=>{
          if(!submitting){
            setSubmitting(true);
            setServerErrors([]);

            const response=await fetch(
              `${process.env.REACT_NATIVE_GC_APP_URL}/register`,{
                method:"POST",
                headers:{
                  "Content-type":"application/json"
                },
                body:JSON.stringify({...rest}),
              }
            );
            const data= await response.json();

            if(!data.errors){
              setServerErrors(data.errors);
            }else{
              console.log(data);
            }
          }
          setSubmitting(false);
          navigation.navigate('Root');
    }
     
    
    
     return(
      <form onSubmit={handleSubmit(onSubmit)}>
      
     
    

    {serverErrors && (
      <ul>
        {serverErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    )}

      <div>
          <h1>Login</h1>
        
     
       
     
        <label htmlFor="email"> Email Address</label>
        <input {...register('Email',{required:true})} type="text" id="email" name="email"/>
        {errors.Email ? <div>{errors.Email.message}</div>:null}
     

      
        <label htmlFor="password"> Password</label>
        <input {...register('Password',{required:true, minLength:{value: 8, message:"must be 8 char"},
         validate:(value: string)=>
         {return[/[A-Z]/,/[a-z]/,/[0-9]/,/[^a-zA-z0-9]/,].every((pattern)=>pattern.test(value))|| "must include lower, upper, number and special characters";},
         })} type="password" id="password" name="password"/>
        {errors.Password ? <div>{errors.Password.message}</div>:null}
    
     
       <button type="submit" disabled={submitting}>Login</button>
      </div>
    </form>
    );
}




