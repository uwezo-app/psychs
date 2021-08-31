import React from "react";
import { Message } from "../../types";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";

import AuthContext from "../../context/auth/context";

export type ChatMessageProps = {
	message: any;
};

const ChatMessage = (props: ChatMessageProps) => {
	const { message } = props;
	const authCtx = React.useContext(AuthContext);

	const isMyMessage = () => {
		return message.From == authCtx.User.ID;
	};

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.messageBox,
					{
						backgroundColor: isMyMessage() ? "#DCF8C5" : "#e5e5e5",
						marginLeft: isMyMessage() ? 50 : 0,
						marginRight: isMyMessage() ? 0 : 50,
					},
				]}
			>
				{!isMyMessage() && (
					<Text style={styles.name}>
						{authCtx.User.FirstName + " " + authCtx.User.LastName}
					</Text>
				)}
				<Text style={styles.message}>{message.Message}</Text>
				<Text style={styles.time}>{moment(message.SentAt).fromNow()}</Text>
			</View>
		</View>
	);
};

export default ChatMessage;
