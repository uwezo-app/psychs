import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login/Login';
import Registration from "./components/Registration/Registration";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration}/>
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
