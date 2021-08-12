import React from 'react';
import { Text,View,Image,TouchableWithoutFeedback,Button, TouchableOpacity } from 'react-native';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps={
    user : User;
}

const ChatListItem= (props: ContactListItemProps)=>{
    const {user}= props;
   
    const navigation =useNavigation();

    const onClick=()=>{
       //navigate to chatroom with this user
    }
   
  return(
      <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            
            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name} </Text>            
            </View>
           
          </View>
          <View style={styles.buttonContainer}>
              <View style={{marginRight:10}}>
          <TouchableOpacity style={styles.acceptButton}>
                <Text style={styles.panelButtonTitle}>Accept</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.acceptButton1}>
                <Text style={styles.panelButtonTitle}>Decline</Text>
            </TouchableOpacity>
            </View>
                

      </View>
      </TouchableWithoutFeedback>
  )
};

export default ChatListItem;