import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const LandingPage = () => {

    const navigation = useNavigation();
    const signupNavigationHandler = () => {
        navigation.navigate('Registration')
    }
    const loginNavigationHandler = () => {
        navigation.navigate('Login');
    }

    return (

        <View>
            <Image
                source={require('./assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>

            <TouchableOpacity
                onPress={signupNavigationHandler}
            >
                <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={loginNavigationHandler}
            >
                <Text style={styles.login}>Log In</Text>
            </TouchableOpacity>
        </View>

    );
}
export default LandingPage;

const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 280,
        marginLeft: '22%',
        marginTop: '10%'
    },

    signup: {
        backgroundColor: 'white',
        color: '#12AD2B',
        width: "100%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '0%',
        padding: "2%",
        fontSize: 25,
        marginTop: '10%'
    },
    login: {
        backgroundColor: '#12AD2B',
        color: 'white',
        width: "100%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '0%',
        padding: "2%",
        fontSize: 25,
        marginTop: '10%'
    }
});
