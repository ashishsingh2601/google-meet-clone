import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    console.log("called")
  if (res.socket.server.io) {
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("socket connected");
    });
  }
  res.end();
};

export default SocketHandler;
