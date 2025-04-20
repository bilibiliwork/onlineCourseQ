var websocket = null;

class WebSocketService {
    constructor(url) {
        this.websocket = new WebSocket(url);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.websocket.onerror = (error) => {
            console.log("websocket连接错误", error);
        };

        this.websocket.onopen = () => {
            console.log("websocket连接成功");
        };

        this.websocket.onclose = () => {
            console.log("websocket连接关闭");
        };
    }

    // 提供一个公共方法来设置消息处理的回调函数
    setMessageHandler(handler) {
        this.websocket.onmessage = handler;
    }
}

export default WebSocketService;