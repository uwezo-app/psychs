import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {useTheme} from 'react-native-paper';
import  {MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import * as ImagePicker from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';
 interface FormData{
   
  FirstName:string;
  LastName:string;
  Email:string;
  Description:string;
  Phone:string;
  Category:string;
 }


  const EditProfileScreen = () => {
    const {control,formState: { errors }, handleSubmit}= useForm<FormData>({
      defaultValues:{
        FirstName: "",
        LastName: "",
        Email: "",
        Description:"",
        Phone:"",
        Category:"General",

      }
    });

    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    const camera = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
    const {colors} = useTheme();
  
    

  

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={camera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = useRef<BottomSheet>(null);
  const fall = new Animated.Value(1);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            John Doe
          </Text>
        </View>

        <View style={styles.action}>
       <Ionicons name="person" color={'black'} size={15} />
       <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="First Name" style={styles.textInput} autoCompleteType="name" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="FirstName" 
         defaultValue=""
        />
       
        {errors.FirstName &&  <Text>Required</Text>}
</View> 

     

<View style={styles.action}>
        <Ionicons name="person" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Last Name" style={styles.textInput} autoCompleteType="name" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="LastName" 
         defaultValue=""
        />
       
        {errors.FirstName &&  <Text>Required</Text>}
</View>    
     

      <View style={styles.action}>
      <MaterialIcons name="email" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Email" style={styles.textInput} autoCompleteType="email" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="Email" 
         defaultValue=""
        />
       
        {errors.Email &&  <Text>Required</Text>}
     </View>
     <View style={styles.action}>
      <MaterialIcons name="phone" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Phone Number" style={styles.textInput} autoCompleteType="cc-number" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="Phone" 
         defaultValue=""
        />
       
        {errors.Email &&  <Text>Required</Text>}
     </View>
     <View style={styles.action}>
      <MaterialIcons name="category" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput placeholder="Category" style={styles.textInput} autoCompleteType="name" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="Category" 
         defaultValue="General"
        />
       
        {errors.Category &&  <Text>Required</Text>}
     </View>
    
     
     <View style={styles.action}>
      <MaterialIcons name="description" color={'black'} size={15} />
        <Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput multiline numberOfLines={2} placeholder="Description" style={styles.textInput} autoCompleteType="name" onChangeText={onChange} onBlur={onBlur}
          />
         )}
         name="Description" 
         defaultValue=""
        />
       
        {errors.Description &&  <Text>Required</Text>}
     </View>
        
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
       
       
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#12AD2B',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#12AD2B',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

function onFileSeleceted(images: ImagePicker.ImageOrVideo) {
  throw new Error('Function not implemented.');
}
