import io from "socket.io-client";

let socket = null;

export const connect = (username, namespace) => {
  socket = io("http://localhost:5020", {
    query: `username=${username}&namespace=${namespace}`
  });
};

export const getSocket = () => socket;
