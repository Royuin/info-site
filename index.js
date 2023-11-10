const http = require('http');
const fs = require('fs');
const { hostname } = require('os');

const port = 8000;

const indexHtml = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(indexHtml);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
