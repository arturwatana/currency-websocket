import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://currency-front.vercel.app/"
    }
});

app.get("/", (req,res)=> {
    res.send()
})

io.of("/").on("connection", (socket) => {
    console.log(socket.id)
    console.log(socket.data)
  console.log('a user connected');

})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});