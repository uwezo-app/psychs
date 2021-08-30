import { createContext } from "react";

interface WebSocketContextProps {
    connection: WebSocket;

    onmessage: () => void;
    onopen: () => void;
    onerror: () => void;
    onclose(): void;
    
    setConn: (connection: WebSocket) => void;
    send(message: any): void;
}

const defaultWebSocket: WebSocketContextProps = {
    connection: new WebSocket("wss://localhost:8080/chat"),

    onmessage: () => {},
    onopen: () => {},
    onerror: () => {},
    onclose: () => {},
    
    setConn: () => {},
    send: () => {},
};

export default createContext<WebSocketContextProps>(defaultWebSocket);
