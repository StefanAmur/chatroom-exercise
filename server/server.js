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

let users = [];

io.on('connection', (socket) => {
    socket.on('sendToAll', (user, msg) => {
        io.emit('sendToAll', user, msg);
    });

    socket.on('sendToMe', (msg) => {
        socket.emit('sendToMe', msg);
    });

    socket.on('login', (user) => {
        if (!users.includes(user)) {
            users.push(user);
        }
        socket.emit('userList', users)
    })
});
