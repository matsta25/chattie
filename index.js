const funConsoleLog = false;

// implement express
const express = require('express')
const app = express()

//implement http server
const server = require('http').Server(app);
const port = process.env.PORT || 3000;

// implement express
const io = require('socket.io')(server);

// implement colors
var colors = require('colors');


app.use(express.static(__dirname));

app.get('/', function (req, res){
    res.sendFile(__dirname + 'index.html');
});

app.get('/onlineusers', function(reqest, response){
    response.send(io.sockets.adapter.rooms);
});

//just listener:
server.listen(port, () => console.log(('Em listening on port localhost:' + port).rainbow));

/* 
socket io functions:
*/

// console log as user connected, left, joined
io.on('connection', function(socket){
    console.log(('User connected from adress : ' + socket.handshake.address + '. Id: ' + socket.id).green);

    //tell all clients that someone connected
    io.emit('user joined', socket.id);

    //client send message
    socket.on('chat.message', function(message){
        //emit to all
        io.emit('chat.message', message);
    });

    //clinet sends "user typing" event to server
    socket.on('user typing', function(username){
        io.emit('user typing', username);
    });

    //client sends 'stopped typing' event
    socket.on('stopped typing', function(username){
        io.emit('stopped typing', username);
    });

    socket.on('disconnect', function(){
        console.log(('User disconnected from adress : ' + socket.handshake.address + '. Id: ' + socket.id).red);

        //tell all clients that someone disconnected
        //broadcast <=> wszyscy oprocz ciebie
        socket.broadcast.emit('user left', socket.id);
    })
});






/*
nice console log part:
*/

if(funConsoleLog){
var string = "Chattie.";
var i = 0 ;

function niceConsoleLog() {
    console.log('\033c');
    console.log(string);
    if(i == 0){
        string = "Chattie./";
    }else if(i == 1){
        string = "cHattie.\\";
    }else if(i == 2){
        string = "chAttie.-";
    }else if(i == 3){
        string = "chaTtie./";
    }else if(i == 4){
        string = "chatTie.\\";
    }else if(i == 5){
        string = "chattIe.-";
    }else if(i == 6){
        string = "chattiE.|";
        i = -1;
    }
    i++;
}

setInterval(niceConsoleLog, 250);
}