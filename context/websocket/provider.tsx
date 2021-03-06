import React, { useContext } from "react";

import WebSocketsContext from "./context";
import AuthContext from "../auth/context";

interface WebSocketsProviderProps {
	children: JSX.Element | JSX.Element[];
}

const WebSocketsProvider = (props: WebSocketsProviderProps) => {
	const [connection, setConnection] = React.useState<WebSocket>(
		new WebSocket(`ws://http://localhost:8000/chat?tokenString=`)
	);
	const [wsInfo, setwsInfo] = React.useState<{
		ConversationID: string;
		UserID: string;
		UserName: string;
		UserAvatar: string;
	}>({ ConversationID: "", UserID: "", UserName: "", UserAvatar: "" });

	const setwsInfoState = (wsInfo: {
		ConversationID: string;
		UserID: string;
		UserName: string;
		UserAvatar: string;
	}) => {
		setwsInfo(wsInfo);
	};

	const setConn = (connection: WebSocket) => {
		setConnection(connection);
	};

	const onmessage = () => {
		connection.onmessage = (event) => {
			const { data } = event;
			const { type, payload } = JSON.parse(data);

			if (type === "ping") {
				connection.send(JSON.stringify({ type: "pong", payload: payload }));
			}
		};
	};

	const onopen = () => {
		connection.onopen = () => {
			console.log(`WebSocket connection opened`);
			// connection.send(JSON.stringify({ type: "ping", payload: "ping" }));
		};
	};
	const onerror = () => {
		connection.onerror = (event) => {
			console.log(`WebSocket connection error: ${event}`);
		};
	};
	const onclose = () => {
		connection.onclose = (event) => {
			console.log(`WebSocket connection closed: ${event}`);
		};
	};

	const send = (message: any) => {
		connection.send(JSON.stringify(message));
	};

	return (
		<WebSocketsContext.Provider
			value={{
				wsInfo,
				connection,

				onopen,
				onclose,
				onmessage,
				onerror,

				send,
				setwsInfoState,
				setConn,
			}}
		>
			{props.children}
		</WebSocketsContext.Provider>
	);
};

export default WebSocketsProvider;
