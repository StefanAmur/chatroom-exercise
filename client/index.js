let socket = io.connect();

let form = document.getElementById('chat-form');
let input = document.getElementById('inputField');
let btnAll = document.getElementById('btnAll');
let btnMe = document.getElementById('btnMe');
let target = document.getElementById('target');
let list = document.getElementById('list');

let user = prompt('Please enter a user name');
socket.emit('login', user);

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
    users.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element;
        // document.getElementById('list').innerHTML += '<br>' + element;
        list.appendChild(li);
    });
})