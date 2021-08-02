import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login/Login';
import Registration from "./components/Registration/Registration";
import Home from "./components/HomePage/Home";
import LandingPage from "./components/HomePage/LandingPage";


const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: undefined;
  LandingPage:undefined
 
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration}/>
        <Stack.Screen name="Home" component={Home}/>
        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
