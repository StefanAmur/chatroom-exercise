let socket = io.connect();

let form = document.getElementById('chat-form');
let input = document.getElementById('inputField');
let btnAll = document.getElementById('btnAll');
let btnMe = document.getElementById('btnMe');
let target = document.getElementById('target');

// let users = [];
let user = prompt('Please enter a user name');

var clients = io.sockets;
console.log(clients);

// if (user != null) {
//     users.push(user);
//     console.log(users);
// }

btnAll.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('sendToAll', user, input.value);
        input.value = '';
    }
});

// send to all
socket.on('sendToAll', function (user, msg) {
    target.innerHTML += '<br>' + user + ': ' + msg;
});

btnMe.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('sendToMe', input.value);
        input.value = '';
    }
});


//send to me
socket.on('sendToMe', function (msg) {
    target.innerHTML += '<br>' + msg
});

// users list?
socket.on('userList', function (users) {
    console.log(users);
})