var express = require('express');
var app = require('express');
var socket = require('socket.io')

//App setup
var app = express();
var server = app.listen(4000, () => {
  console.log('Server is running on port 4000');
})

app.use(express.static('public'));

var io = socket(server);
//websocket will be working on this server
io.on('connection', (socket) => { //Setting up connection(event) between the browser(client) and server
  console.log('Made connection',socket.id);
  socket.on('chat',(data) => { //connection between the server and the client that is sending the message
   io.sockets.emit('chat',data); //emitting data to all the clients that is being received from the one-client side
  });

  socket.on('typing', (data) => {
   sockets.broadcast.emit('typing',data); //sending message to all the clients except the sender
  });
})



