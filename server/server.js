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
// let message = document.getElementById('inputField').value;

// io.on('connection', (socket) => {
//     counter++;
//     console.log(counter + ' someone connected');

//     socket.on('sendToAll', (message) => {
//         io.emit("displayMessage", (message));
//     });

//     socket.on('displayMessage', (message) => {
//         console.log();
//         let target = document.getElementById('target');
//         target.innerHTML += '<br>' + message;
//     });

// });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});
