import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import  {MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const navigation =useNavigation();
  const onPress=()=>{
    navigation.navigate('EditProfileScreen')
 }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <TouchableOpacity style={styles.row} onPress={onPress}>
       
       <AntDesign name="edit" color="#777777" size={20}/>
       <Text style={{color:"#777777", marginLeft: 10}}>Edit</Text>
     </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userInfo}>
      <View style={styles.row}>
      <Ionicons name="person" color={'gray'} size={15} />
          <Text style={{color:"gray", marginLeft: 20, fontSize:16}}>John</Text>
        </View>
        <View style={styles.row}>
        <Ionicons name="person" color={'gray'} size={15} />
          <Text style={{color:"gray", marginLeft: 20, fontSize:16}}>Doe</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" color="gray" size={20}/>
          <Text style={{color:"gray", marginLeft: 20, fontSize:16}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="gray" size={20}/>
          <Text style={{color:"gray", marginLeft: 20,fontSize:16}}>john_doe@email.com</Text>
        </View>
        <View style={styles.row}>
         <MaterialIcons  name="category" color="gray" size={20} />
          <Text style={{color:"gray", marginLeft: 20, fontSize:16}}>General</Text>
        </View>
        <View style={styles.row}>
         <MaterialIcons  name="description" color="gray" size={20} />
          <Text style={{color:"gray", marginLeft: 20, fontSize:16}}>My Description</Text>
        </View>
       
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'10%',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop:30,
    textAlign:'center',
    fontSize:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});