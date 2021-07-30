import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp} from "@react-navigation/stack"

import { RootStackParamList } from "../../App";
import getMoviesFromApi from "../../api/dummy";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>();

    const navigate = () => {
        navigation.navigate("Registration");
    }

    const onPress = () => {
        getMoviesFromApi().then((data: any) => {
                console.log(data);
            })
        console.log();
    }

    return (
      <View>
          <Text>Login</Text>
          <TextInput
            placeholder={"Enter your Email address"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCompleteType="email"
          />
          <TextInput
            placeholder={"Enter your Password"}
            value={password}
            onChangeText={setPassword}
            // secureTextEntry
            secureTextEntry={true}
            autoCompleteType="password"
          />
          <Button
              title="Login"
              onPress={onPress}
          />

          <Text>
              Don't have an account yet?
              <Text onPress={navigate}>click here</Text>
          </Text>
      </View>
    );
}

export default Login;
