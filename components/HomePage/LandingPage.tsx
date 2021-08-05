
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { StackNavigationProp} from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';




const LandingPage =()=> {
     
  const navigation =useNavigation();
  const onClick=()=>{
    navigation.navigate('Registration')
 }
 const onClick1=()=>{
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
            onPress={onClick}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClick1}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      
    );
  }
export default LandingPage;

const styles = StyleSheet.create({
    
    logo:{
      width: 280,
      height: 280,
      marginLeft: '35%',
      marginTop: '10%'
    },
   
    signup: {
      backgroundColor: 'white',
      color: '#12AD2B',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    },
    login: {
      backgroundColor: '#12AD2B',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});
