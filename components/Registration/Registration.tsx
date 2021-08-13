import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import styles from './styles'
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Fontisto, Ionicons, MaterialIcons} from '@expo/vector-icons';

interface FormData {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Cpassword: string;
}

export default function Registration() {
    const navigation = useNavigation();
    const {control, formState: {errors}, handleSubmit} = useForm<FormData>({
        defaultValues: {
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            Cpassword: ""
        }
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [_, setServerErrors] = useState<Array<string>>([]);

    const onSubmit = async ({Cpassword, ...rest}: FormData) => {
        if (!isSubmitting) {
            setIsSubmitting(true);
            setServerErrors([]);

            const response = await fetch(
                `https://uwezoapp-321219.el.r.appspot.com/register`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({...rest}),
                }
            );
            if (response.ok && response.status === 201) {
                await response.json();
                navigation.navigate('Login');
            } else {
                console.log(response.statusText);
            }
        }
        setIsSubmitting(false);
    }

    return (

        <View style={styles.container}>
            <Image
                source={require('../assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>
            <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 25}}>Register</Text>


            <View style={styles.action}>
                <Ionicons name="person" color={'black'} size={15}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput placeholder="First Name" style={styles.textInput} autoCompleteType="name"
                                   onChangeText={onChange} onBlur={onBlur}
                        />
                    )}
                    name="FirstName"
                    defaultValue=""
                />

                {errors.FirstName && <Text>Required</Text>}
            </View>


            <View style={styles.action}>
                <Ionicons name="person" color={'black'} size={15}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput placeholder="LastName" style={styles.textInput} autoCompleteType="name"
                                   onChangeText={onChange} onBlur={onBlur} value={value}
                        />
                    )}
                    name="LastName"
                    defaultValue=""
                />

                {errors.FirstName && <Text>Required</Text>}
            </View>


            <View style={styles.action}>
                <MaterialIcons name="email" color={'black'} size={15}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput placeholder="Email" style={styles.textInput} autoCompleteType="email"
                                   onChangeText={onChange} onBlur={onBlur} value={value}
                        />
                    )}
                    name="Email"
                    defaultValue=""
                />

                {errors.Email && <Text>Required</Text>}
            </View>


            <View style={styles.action}>
                <Fontisto name="user-secret" color={'black'} size={15}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: {value: 8, message: "must be 8 char"},
                        validate: (value: string) => {
                            return [/[A-Z]/, /[a-z]/, /[0-9]/, /[^a-zA-z0-9]/,].every((pattern) => pattern.test(value)) || "must include lower, upper, number and special characters";
                        },

                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput placeholder="Password" style={styles.textInput} autoCompleteType="password"
                                   onChangeText={onChange} onBlur={onBlur} secureTextEntry={true} value={value}
                        />
                    )}
                    name="Password"
                    defaultValue=""
                />

                {errors.Password && <Text>Required</Text>}
            </View>


            <View style={styles.action}>
                <Fontisto name="user-secret" color={'black'} size={15}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput placeholder="Confirm Password" style={styles.textInput} autoCompleteType="password"
                                   onChangeText={onChange} onBlur={onBlur} secureTextEntry={true} value={value}
                        />
                    )}
                    name="Cpassword"
                    defaultValue=""
                />

                {errors.Cpassword && <Text>Required</Text>}
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
}
