import React from "react";
import { FlatList, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import InputBox from "../components/InputBox";
import ChatMessage from "../components/ChatMessage";

import WSContext from "../context/websocket/context";
import AuthContext from "../context/auth/context";

import WS from "../context/websocket/ws";

const ChatRoomScreen = () => {
	const route = useRoute();
	const authContext = React.useContext(AuthContext);
	const wsContext = React.useContext(WSContext);

	const [messages, setMessages] = React.useState([]);
	console.log(route.params);

	React.useEffect(() => {
		const fetchConversation = async () => {
			const response = await fetch(
				`${process.env.REACT_NATIVE_GC_APP_URL}/chats?PatientID=${wsContext.wsInfo.UserID}&PsychologistID=${authContext.User.ID}`
			);

			if (response.ok) {
				const data = await response.json();
				setMessages(data);
			}
		};

		fetchConversation();
	}, []);

	return (
		<>
			{messages.length > 0 ? (
				<FlatList
					data={messages}
					renderItem={({ item }) => <ChatMessage message={item} />}
				/>
			) : (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Text>Start the conversation</Text>
				</View>
			)}

			<View style={{}}>
				<InputBox />
			</View>
		</>
	);
};

export default ChatRoomScreen;
