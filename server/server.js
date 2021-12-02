const express = require('express');
const http = require('http');

const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);

server.listen(8080, () => {
    console.log("server running on " + 8080);
});

const io = require('socket.io')(server);

let counter = 0;

io.on('connection', (socket) => {
    socket.on('sendToAll', (msg) => {
        io.emit('sendToAll', msg);
        console.log('message: ' + msg);
    });

    socket.on('sendToMe', (msg) => {
        socket.emit('sendToMe', msg);
        console.log('message: ' + msg);
    });
});
