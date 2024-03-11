import { io } from "socket.io-client";
import { createContext, useState, useEffect } from "react";

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props) => {
  const { children } = props;

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    console.log("csd", connection)
    setSocket(connection);
  }, []);

  socket?.on('connection_error', async (err) => {
    console.log("Error establishing socket connection", err);
    await fetch('/api/socket')
  })

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
