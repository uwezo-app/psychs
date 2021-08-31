import React from "react";
import { FlatList, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import InputBox from "../components/InputBox";
import ChatMessage from "../components/ChatMessage";

import AuthContext from "../context/auth/context";

const ChatRoomScreen = () => {
	const route = useRoute();
	const authContext = React.useContext(AuthContext);

	const [messages, setMessages] = React.useState<any>([]);
	console.log(route.params);

	React.useEffect(() => {
		const fetchConversation = async () => {
			const response = await fetch(
				`${process.env.REACT_NATIVE_GC_APP_URL}/chats?ConversationID=${route.params?.id}`
			);
			console.log(
				`${process.env.REACT_NATIVE_GC_APP_URL}/chats?ConversationID=${route.params?.id}`
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
			{!!messages && messages.length > 0 ? (
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
				<InputBox messages={messages} setMessages={setMessages} />
			</View>
		</>
	);
};

export default ChatRoomScreen;
