import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import styles from "./styles";
import WSContext from "../../context/websocket/context";

const InputBox = () => {
	const [message, setMessage] = useState("");
	const wsContext = useContext(WSContext);

	const onPress = () => {
		if (message) {
			wsContext.send(JSON.stringify({ Flag: "targerted", message }));
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
