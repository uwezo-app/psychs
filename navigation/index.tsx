/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import {Alert, ColorSchemeName, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {AntDesign, Ionicons} from "@expo/vector-icons";

import {RootStackParamList} from "../types";

import LinkingConfiguration from "./LinkingConfiguration";
import MainTabNavigator from "./MainTabNavigator";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LandingPage from "../components/HomePage/LandingPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

import AuthContext from "../context/auth/context"

type Scheme = {
    colorScheme: ColorSchemeName;
}

export default function Navigation({colorScheme}: Scheme) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "light" ? DefaultTheme : DefaultTheme}
        >
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const authContext = useContext(AuthContext);

    // @ts-ignore
    return (
        <Stack.Navigator
            initialRouteName="LandingPage"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#12AD2B",
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerTintColor: "#fff",
                headerTitleAlign: "left",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={({navigation}) => ({
                    title: "Uwezo App",
                    headerRight: () => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 60,
                                    justifyContent: "space-between",
                                    marginRight: 10,
                                    backgroundColor: "#12AD2B",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ProfileScreen")}
                                >
                                    <Ionicons name="person" size={22} color={"white"}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => authContext.logout({isSubmitting, setIsSubmitting, navigation})}>
                                    <AntDesign name="logout" size={22} color={"white"}/>
                                </TouchableOpacity>
                            </View>
                        );
                    },
                })}
            />

            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => ({title: route.params.name})}
            />
            <Stack.Screen name="ContactsScreen" component={ContactsScreen}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                options={() => ({
                    title: "Edit Profile",
                    headerRight: () => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 60,
                                    justifyContent: "space-between",
                                    marginRight: 10,
                                    backgroundColor: "#12AD2B",
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <Text style={styles.modalText}>
                                                    Are you sure you want to delete this account?
                                                </Text>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => setModalVisible(!modalVisible)}
                                                >
                                                    <Text style={styles.textStyle}>I'd rather not</Text>
                                                </Pressable>
                                                <Pressable style={[styles.button, styles.buttonDelete]}>
                                                    <Text style={styles.textStyle}>Yes I do.</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>

                                    <TouchableOpacity>
                                        <AntDesign
                                            name="deleteuser"
                                            color={"white"}
                                            size={30}
                                            onPress={() => setModalVisible(true)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    },
                })}
            />

            <Stack.Screen name="LandingPage" component={LandingPage}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        marginBottom: 10,
    },
    buttonOpen: {
        backgroundColor: "#12AD2B",
    },
    buttonClose: {
        backgroundColor: "#12AD2B",
    },
    buttonDelete: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
