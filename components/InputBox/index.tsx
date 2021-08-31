import React, { useState, useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import styles from "./styles";
import WS from "../../context/websocket/ws";

import AuthContext from "../../context/auth/context";

type InputProps = {
	messages: string[];

	setMessages: (messages: any[]) => void;
};

const InputBox = (props: InputProps) => {
	const auth = React.useContext(AuthContext);
	const [message, setMessage] = useState("");
	const route = useRoute();
	console.log("Input", route.params);

	const onPress = async () => {
		if (message) {
			const response = await fetch("http://localhost:8000/chat/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					Message: message,
					ConversationID: route.params?.id,
					From: auth.User.ID,
				}),
			});

			if (response.ok && response.status === 201) {
				await response.text();
				props.setMessages([...props.messages, message]);
				setMessage("");
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<TextInput
					placeholder={"Type a message"}
					style={styles.textInput}
					multiline
					value={message}
					onChangeText={setMessage}
				/>
			</View>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.buttonContainer}>
					<MaterialIcons name="send" size={28} color="white" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default InputBox;
