import { createContext } from "react";

interface WebSocketContextProps {
    wsInfo: { ConversationID: string, UserID: string, UserName: string, UserAvatar: string };
    connection: WebSocket;

    onmessage: () => void;
    onopen: () => void;
    onerror: () => void;
    onclose(): void;
    
    setConn: (connection: WebSocket) => void;
    setwsInfoState: (wsInfo: { ConversationID: string, UserID: string, UserName: string, UserAvatar: string }) => void;
    send(message: any): void;
}

const defaultWebSocket: WebSocketContextProps = {
    wsInfo: { ConversationID: "", UserID: "", UserName: "", UserAvatar: "" },
    connection: new WebSocket("wss://localhost:8080/chat"),

    onmessage: () => {},
    onopen: () => {},
    onerror: () => {},
    onclose: () => {},
    
    setConn: () => {},
    setwsInfoState: () => {},
    send: () => {},
};

export default createContext<WebSocketContextProps>(defaultWebSocket);
