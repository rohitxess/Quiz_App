import http from http;
import { Server } from "socket.io";
import { IoManager } from "./managers/IoManager";
const server = http.createServer();

const io = IoManager.getIo();
io.listen(3000);

io.on('connection', (client) => {
  client.on('event', data => {
    const type = data.type;
    // catch 3 admin events 
    // 2 clients events 
    // userManager => QuizManager => Quiz => broadcast
  });

  client.on('disconnet', () => {

  });
});

