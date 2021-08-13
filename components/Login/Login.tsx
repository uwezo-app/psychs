import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import styles from './styles'
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Fontisto, MaterialIcons} from '@expo/vector-icons';

import AuthContext from "../../context/auth/context";

interface FormData {
    Email: string;
    Password: string;
}

const Login = () => {
    const {control, formState: {errors}, handleSubmit} = useForm({
        defaultValues: {
            Email: "",
            Password: ""
        }
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [_, setServerErrors] = useState<Array<string>>([]);
    const navigation = useNavigation();
    const authContext = React.useContext(AuthContext)

    const onSubmit = async (authInfo: FormData) => {
        await authContext.login({isSubmitting, authInfo, navigation, setIsSubmitting, setServerErrors});
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>

            <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 25}}>Login</Text>

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

            <TouchableOpacity style={styles.commandButton} disabled={isSubmitting} onPress={handleSubmit(onSubmit)}>
                {isSubmitting ? <ActivityIndicator animating={isSubmitting} color="#00ff00"/> :
                    <Text style={styles.panelButtonTitle}>Submit</Text>}
            </TouchableOpacity>
        </View>
    );
}
export default Login;