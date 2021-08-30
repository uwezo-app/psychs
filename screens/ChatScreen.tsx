import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatListItem";
// import NewMessageButton from "../components/NewMessageButton";

import AuthContext from "../context/auth/context";

export default function ChatScreen() {
	const authContext = React.useContext(AuthContext);

	const [connections, setConnections] = React.useState<any[]>([]);
	const [isLoading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	React.useEffect(() => {
		if (!isLoading) {
			setLoading(true);

			const fecthConnections = async () => {
				let ids: any[] = [];
				let response = await fetch(
					`${process.env.REACT_NATIVE_GC_APP_URL}/conversations?psychologistID=${authContext.User.ID}`
				);

				if (response.ok && response.status === 200) {
					const conns = await response.json();
					setConnections(conns);
					console.log(conns);
				} else {
					setError(response.statusText);
				}
			};

			fecthConnections();
		}

		setLoading(false);
	}, []);

	return (
		<View style={styles.container}>
			{isLoading ? (
				<Text>Loading...</Text>
			) : connections.length === 0 ? (
				<Text>No conselling request yet</Text>
			) : (
				<FlatList
					style={{ width: "100%" }}
					data={connections}
					renderItem={({ item }) => <ChatListItem chatRoom={item} />}
					keyExtractor={(item) => item.PairID.toString()}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
