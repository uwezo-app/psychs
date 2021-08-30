export default class WS {
    static ws: WebSocket;
    static reconnect: boolean = true;
    static url: string;

    static init(url: string) {
        this.ws = new WebSocket(url);
        this.url = url;
    }

    static onMessage(callback: (data: any) => void) {
        this.ws.addEventListener('message', callback);
    }

    static onOpen(callback: () => void) {
        this.ws.addEventListener('open', callback);
    }

    static onClose(callback: () => void) {
        console.log("close");
        this.reconnect ? this.init(this.url) : this.ws.addEventListener('close', callback);
    }

    static onError(callback: (error: any) => void) {
        this.ws.addEventListener('error', callback);
    }

    static send(data: any) {
        this.ws.send(data);
    }

    static sendJSON(data: any) {
        console.log("sent");
        this.ws.send(JSON.stringify(data));
    }

    static close() {
        this.ws.close();
    }

    static getReadyState() {
        return this.ws.readyState;
    }

    static getBufferedAmount() {
        return this.ws.bufferedAmount;
    }

    static getExtensions() {
        return this.ws.extensions;
    }

    static getProtocol() {
        return this.ws.protocol;
    }

    static getUrl() {
        return this.ws.url;
    }
}
