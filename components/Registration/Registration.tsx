import React, {useRef, useState}  from 'react';
import { useForm } from "react-hook-form";
import './Registration.css'





interface FormData{
  FirstName:string;
  LastName:string;
  Email:string;
  Password:string;
  Cpassword:string;

}

export default function Registration() {
    const { register,formState: { errors }, handleSubmit, watch}= useForm<FormData>({
      defaultValues:{
        FirstName: "",
        LastName: "",
        Email: "",
        Password:"",
        Cpassword:""

      }
    });

     const[submitting, setSubmitting]= useState<boolean>(false);
     const [serverErrors, setServerErrors] = useState<Array<string>>([]);

      

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
          <h1>Sign Up</h1>
        <label htmlFor="fname" > First Name</label>
        <input {...register('FirstName',{required:true})} type="text" id="fname" name="fname"/>
        {errors.Email ? <div>{errors.Email.message}</div>:null}
     

     
        <label htmlFor="lname"> Last Name</label>
        <input {...register('LastName',{required:true})} type="text" id="lname" name="lname"/>
        {errors.Email ? <div>{errors.Email.message}</div>:null}
     
     
        <label htmlFor="email"> Email Address</label>
        <input {...register('Email',{required:true})} type="text" id="email" name="email"/>
        {errors.Email ? <div>{errors.Email.message}</div>:null}
     

      
        <label htmlFor="password"> Password</label>
        <input {...register('Password',{required:true, minLength:{value: 8, message:"must be 8 char"},
         validate:(value: string)=>
         {return[/[A-Z]/,/[a-z]/,/[0-9]/,/[^a-zA-z0-9]/,].every((pattern)=>pattern.test(value))|| "must include lower, upper, number and special characters";},
         })} type="password" id="password" name="password"/>
        {errors.Password ? <div>{errors.Password.message}</div>:null}
    

      
        <label htmlFor="cpassword"> Confirm Password</label>
        <input {...register('Cpassword',{required:true,
          validate: (value: {})=>
            value === password.current|| "The passwords do not match",
            })} type="password" id="cpassword" name="cpassword"/>
        {errors.Cpassword ? <div>{errors.Cpassword.message}</div>:null}
     
     
       <button type="submit" disabled={submitting}>Register</button>
      </div>
    </form>
    );
}




