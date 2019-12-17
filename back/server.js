const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const socketHandler = require("./socket");

const PORT = 5020;
const app = express();

const server = http
  .createServer(app)
  .listen(PORT, () => console.log(`✅ Server running on localhost:${PORT}`));

const io = socketIO.listen(server);

io.on("connection", socketHandler);
