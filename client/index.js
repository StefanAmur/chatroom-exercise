let socket = io.connect();

console.log('hi from the index.js file');

let form = document.getElementById('chat-form');
let input = document.getElementById('inputField');
let btnAll = document.getElementById('btnAll');
let btnMe = document.getElementById('btnMe');
let target = document.getElementById('target');

btnAll.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('sendToAll', input.value);
        input.value = '';
    }
});

socket.on('sendToAll', function (msg) {
    target.innerHTML += '<br>' + msg
});

btnMe.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('sendToMe', input.value);
        input.value = '';
    }
});

socket.on('sendToMe', function (msg) {
    target.innerHTML += '<br>' + msg
});