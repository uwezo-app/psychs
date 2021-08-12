import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox=()=>{
    const [message, setMessage]=useState('');
    const onSendPress=()=>{
        console.warn(`Sending: ${message}`),

        //send message to backend
        setMessage('');
    }
    const onPress=()=>{
        if (message){
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            
            <TextInput placeholder={"Type a message"} style={styles.textInput} multiline value={message} onChangeText={setMessage}/>
            </View> 
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <MaterialIcons name="send" size={28} color="white"/>
            </View>
            </TouchableOpacity>
           
        </View>
        
    )
}

export default InputBox;