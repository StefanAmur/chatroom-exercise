let socket = io.connect();

console.log('hi from the index.js file');

let form = document.getElementById('chat-form');
let input = document.getElementById('inputField');
let btnAll = document.getElementById('btnAll');
let target = document.getElementById('target');
// btnAll.addEventListener('click', () => {
//     socket.emit('sendToAll', message);
// })

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});


// let target = document.getElementById('target');

socket.on('chat message', function (msg) {
    target.innerHTML += '<br>' + msg
    // messages.appendChild(item);
    // window.scrollTo(0, document.body.scrollHeight);
});

// socket.on('displayMessage', (message) => {
//     target.innerHTML += '<br>' + message;
// });