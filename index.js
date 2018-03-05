const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))


//just listener:

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//nice console log part:

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
