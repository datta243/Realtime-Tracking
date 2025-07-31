import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on("locationUpdate", (data) => {
        io.emit("receive-location",{id: socket.id, ...data});
    });

    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
    });
    console.log('A user connected');
});

app.get('/', (req, res) => {
    res.render('index'); 
});

server.listen(3000);