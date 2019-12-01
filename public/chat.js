
var socket = io.connect('http://localhost:4000');
//Connecting front-end side

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

btn.addEventListener(
    'click', () => {
        socket.emit('chat',
        {
            message : message.value,
            handle : handle.value 
        })
        message.value = "";
    })
btn.addEventListener(
    'keypress' ,() => {
        socket.emit('typing',handle);
    }
)

//Listening for events
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    console.log(data.message);
});

socket.on('typing', (data) => {
    feedback.innerHTML += '<p>' + data + 'is typing....</p>';
    console.log(feedback.innerHTML)
})