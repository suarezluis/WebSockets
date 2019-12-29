const WebSocket = require("ws");

const wss = new WebSocket.Server(
  {
    port: 9876
  },
  () => {
    console.log(`Say Hi to websocket on port 9876`);
  }
);

wss.on("connection", connection => {
  console.log("New Connection");
  connection.send("Hello From the server");
  connection.on("message", data => {
    console.log(data);
    connection.send("Message received: " + data);
  });
});
