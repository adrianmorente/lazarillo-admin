import { WebSocketServer } from "ws";
import { heartbeat } from "../../src/heartbeat";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, req) {
    ws.isAlive = true;
    ws.on("pong", heartbeat);

    const ip = req.socket.remoteAddress;
    console.log("New connection from " + ip);
});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping();
    });
}, 30000);

wss.on("close", function close() {
    clearInterval(interval);
});

/*
function CreateWebsocketServer(setData) {
    const wss = new WebSocketServer({ port: 8080 });

    wss.on("connection", function connection(ws, req) {
        ws.isAlive = true;
        ws.on("pong", heartbeat);

        const ip = req.socket.remoteAddress;
        console.log("New connection from " + ip);

        // Add new connection to devices list
        setData((oldData) => {
            return {
                ...oldData, ip: {
                    "name": req.socket.deviceName,
                    "version": req.socket.version
                }
            };
        })
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false) return ws.terminate();

            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    wss.on("close", function close() {
        console.log("Device disconnected");
        clearInterval(interval);
    });

    return wss;
}
*/
