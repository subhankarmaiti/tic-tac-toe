const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

let app = express();
let server = http.Server(app);
let io = socketIO(server);

app.get('/api/hello', (req, res) => {
  res.send('Welcome');
});
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
  //Express will serve up the index.html file
  // if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
server.listen(port);
