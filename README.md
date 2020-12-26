# socket-node-65456064
Socket demo for [Stack Overflow Question](https://stackoverflow.com/questions/65456064/post-http-localhost3000-socket-io-eio-3transport-pollingt-nquney3-400-bad)

### Socket Version 3.0.4

---

### NPM Install:
```
/server> npm install
```

### Run Project: 
```
/server> node index.js
```

### Server Side: (server/index.js)
```
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var socketIO = require("socket.io")(http);
var socketID = "";

socketIO.on("connection", function (socket) {
    console.log("User is conneected ", socket.id);
    socketID = socket.id;
});

http.listen(3000, function () {
    console.log("Server has started running!!");
})
```

## Client Side (client/index.html)
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js"></script>
<script>
    var socketIO = io("http://localhost:3000", { transports: ['websocket'] });
</script>
```
