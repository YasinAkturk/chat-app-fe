import { io } from "socket.io-client";

// Sunucunun URL'sini belirleyin, burası geliştirme ortamında localhost olabilir
const SOCKET_SERVER_URL = "http://localhost:5001";

// Socket.IO istemcisini başlatın
export const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket"], // WebSocket üzerinden bağlantıyı tercih ediyoruz
});
