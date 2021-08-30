import moment from "moment";
import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
	chatRoom: any;
};

const ChatListItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;
	const navigation = useNavigation();

	const imageURi =
		"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg";

	const onClick = () => {
		navigation.navigate("ChatRoom", {
			id: chatRoom.PairID,
			UserID: chatRoom.ID,
			name: chatRoom.Name,
			imageURi: imageURi,
		});
	};

	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image
						source={{
							uri: imageURi,
						}}
						style={styles.avatar}
					/>

					<View style={styles.midContainer}>
						<Text style={styles.username}>{chatRoom.Name} </Text>
						<Text ellipsizeMode={"tail"} style={styles.lastmessage}>
							last messages
						</Text>
					</View>
				</View>
				<Text style={styles.time}>
					{moment(chatRoom.PairedAt).format("DD/MM/YYYY")}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ChatListItem;
