const http = require("http"),
  express = require("express"),
  helmet = require("helmet"),
  socketIO = require("socket.io"),
  socketHandler = require("./socket");

const PORT = 5020;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(helmet());

server.listen(PORT, () =>
  console.log(`✅ Server running on localhost:${PORT}`)
);

io.on("connection", socket => socketHandler(socket, io));
