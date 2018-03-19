const funConsoleLog = false;

// implement express
const express = require('express')
const app = express()

//implement http server
const server = require('http').Server(app);
const port = process.env.PORT || 3000;

// implement express
const io = require('socket.io')(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + 'index.html'));

// console log as user connected
io.on('connection', function(socket){
    console.log('User connected from adress : ' + socket.handshake.address + '. Id: ' + socket.id);
});

//just listener:
server.listen(port, () => console.log('Em listening on port localhost:' + port));

//nice console log part:
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