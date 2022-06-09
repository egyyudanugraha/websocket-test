const WebSocketServer = require('ws');

const port = process.env.PORT
const wss = new WebSocketServer.Server({ port });
wss.on("connection", ws => {
    console.log("new client connected");
    ws.send(`Hello`);
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 8080");