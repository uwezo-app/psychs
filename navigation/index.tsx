/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { View, Image } from 'react-native';
import {Octicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen'
import ContactsScreen from '../screens/ContactsScreen';
import LandingPage from '../components/HomePage/LandingPage';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DefaultTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="LandingPage" screenOptions={{
      headerStyle:{
        backgroundColor:'#12AD2B',
        shadowOpacity:0,
        elevation:0,
      },
      headerTintColor: '#fff',
      headerTitleAlign:'left',
      headerTitleStyle:{
        fontWeight:'bold',
      }
     }}>
       
      <Stack.Screen name="Root" component={MainTabNavigator}
      options=
      {{  
        title:"Uwezo App",
        headerRight: () => {
          return <View style={{
            flexDirection:'row', 
            width:60, 
            justifyContent:'space-between', 
            marginRight:10,
            backgroundColor:'#12AD2B'
            }}>
            <Octicons name="search" size={22} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
          </View>;
        }   
        }} />
      

      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({ route})=>({title:route.params.name,})} 
    
      />
      <Stack.Screen 
      name="ContactsScreen" 
      component={ContactsScreen} 
         
      />
      
      <Stack.Screen 
      name="LandingPage" 
      component={LandingPage}   
      />
      <Stack.Screen 
      name="Login" 
      component={Login}   
      />
      <Stack.Screen 
      name="Registration" 
      component={Registration}   
      />
    </Stack.Navigator>
  );
}
