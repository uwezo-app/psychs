import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {Octicons} from "@expo/vector-icons";
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';



const NewMessageButton =()=>{
    const navigation=useNavigation();

    const onPress=()=>{
        navigation.navigate('ContactsScreen');
    }
    return(
        
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Octicons name="request-changes" size={25} color="#12AD2B"/>
            </TouchableOpacity>
        </View>
    )
}
export default NewMessageButton;