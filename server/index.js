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