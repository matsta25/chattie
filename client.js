new Vue({
  el: '#app',
  data: {
    connectedUsers: ["User a", "User b"],
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

  },
  methods: {
   send: function () {

   },
   userIsTyping: function (username) {

   },
   usersAreTyping: function () {

   },
   stoppedTyping: function () {

   }
 }
})
