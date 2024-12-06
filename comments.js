// Create web server
// Create a web server that listens on port 3000 and logs a message to the console when it's ready.

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('Server is running on port 3000');
});

server.listen(port);