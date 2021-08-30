import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import AuthProvider from "./context/auth/provider";
import WebSocketsProvider from "./context/websocket/provider";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<AuthProvider>
					<WebSocketsProvider>
						<Navigation colorScheme={colorScheme} />
						<StatusBar />
					</WebSocketsProvider>
				</AuthProvider>
			</SafeAreaProvider>
		);
	}
}
