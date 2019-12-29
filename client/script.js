const server = new WebSocket(`ws://localhost:9876/websocket`);

const message = document.getElementById("messages");
const input = document.getElementById("message");
const button = document.getElementById("send");

button.disabled = true;
sendMessage = () => {
  const text = input.value;
  server.send(text);
};

button.addEventListener("click", sendMessage, true);

server.onopen = () => {
  button.disabled = false;
};

server.onmessage = event => {
  const { data } = event;
  const newMessage = document.createElement("div");
  newMessage.innerText = `Server says: ${data}`;
  message.appendChild(newMessage);
};
