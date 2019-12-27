const userList = [];

const EVENT_TYPE = {
  WELCOME: "WELCOME",
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED"
};

const getUsername = socket => socket.handshake.query.username;
const socketHandler = (socket, io) => {
  const username = getUsername(socket);
  const namespace = socket.handshake.query.namespace;

  const others = [];
  io.in(namespace).clients((err, clients) => {
    if (err) throw err;

    clients.forEach(clientId =>
      others.push(getUsername(io.sockets.sockets[clientId]))
    );

    io.to(socket.id).emit(EVENT_TYPE.WELCOME, others);
  });

  socket.broadcast.to(namespace).emit(EVENT_TYPE.CONNECTED, username);

  userList.push({
    id: socket.id,
    username
  });

  socket.join(namespace);

  console.log(userList);

  socket.on("disconnect", () => {
    userList.splice(
      userList.findIndex(
        user => user.id === socket.id && user.username === username
      ),
      1
    );
    socket.broadcast.emit(EVENT_TYPE.DISCONNECTED, username);
    socket.leave(namespace);
  });
};

module.exports = socketHandler;
