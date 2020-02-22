const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const port = process.env.PORT || 5000;
server.listen(port);
