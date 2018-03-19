var socket = io();

new Vue({
  el: '#app',
  data: {
    connectedUsers: [],
    messages: [],
    message: {
      "type": "",
      "action": "",
      "user": "",
      "text": "",
      "timestamp": ""
    },
    areTyping: []
  },
  created: function () {
    socket.on('user joined', function (socketId){

        axios.get('onlineusers').then(function(response){
            for( var key in response.data){
                if(this.connectedUsers.indexOf(key) <= -1){
                    this.connectedUsers.push(key);
                }
            }
        }.bind(this));
    }.bind(this));
    
    //add messages load here like up for onlineusers
         /*
         
         here!!
         
         */

    //if server emits 'chat.message', update messages array
    socket.on('chat.message', function(message){
        this.messages.push(message);
    }.bind(this));


    //if server broadcasts 'user left', remove leaving user from connectedUsers array
    socket.on('user left', function(socketId){
        var index = this.connectedUsers.indexOf(socketId);
        if(index >= -1) {
            //slice deletes from list
            this.connectedUsers.splice(index,1);
        }
    }.bind(this));
  },
  methods: {
   send: function () {
       this.message.type = "chat";
       this.message.user = socket.id;
       this.message.timestamp = "Today";
       socket.emit('chat.message', this.message);
       this.message.type = '';
       this.message.user = '';
       this.message.text = '';
       this.message.timestamp = '';
   },
   userIsTyping: function (username) {

   },
   usersAreTyping: function () {

   },
   stoppedTyping: function () {

   }
 }
})
