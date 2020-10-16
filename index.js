const { dirname } = require('path');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    console.log("new user is connected");


    socket.on('disconnect', () => {
        console.log('a user is disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});


http.listen(2000, () => {
    console.log('listening to 2000');
});