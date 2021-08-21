import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Caption, Text, Title } from "react-native-paper";

import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Context from "../context/auth/context";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("EditProfileScreen");
  };

  const context = useContext(Context);

  return (
    <SafeAreaView>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {context.User.FirstName + " " + context.User.LastName}
            </Title>
            <TouchableOpacity style={styles.row} onPress={onPress}>
              <AntDesign name="edit" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 10 }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userInfo}>
        <View style={styles.row}>
          <Ionicons name="person" color={"gray"} size={15} />
          <Text style={{ color: "gray", marginLeft: 20, fontSize: 16 }}>
            {context.User.FirstName}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="person" color={"gray"} size={15} />
          <Text style={{ color: "gray", marginLeft: 20, fontSize: 16 }}>
            {context.User.LastName}
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="map-marker" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {context.User.Profile.Address}
          </Text>
        </View>

        <View style={styles.row}>
          <FontAwesome name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {context.User.Profile.Telephone}
          </Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {context.User.Email}
          </Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name="text" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {context.User.Profile.Description}
          </Text>
        </View>

        <TouchableOpacity style={styles.row} onPress={onPress}>
          <AntDesign name="edit" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
