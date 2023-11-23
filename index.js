const http = require('http');
const fs = require('fs');
const { hostname } = require('os');
const url = require('url');

const indexHtml = fs.readFileSync('index.html');
const aboutHtml = fs.readFileSync('about.html');
const contactHtml = fs.readFileSync('contact-me.html');
const html404 = fs.readFileSync('404.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl == '/about') {
    res.end(aboutHtml);
  } else if (reqUrl == '/' || reqUrl == 'index') {
    res.end(indexHtml);
  } else if (reqUrl == '/contact-me') {
    res.end(contactHtml);
  } else {
    res.end(html404);
  }
});

server.listen(8080, hostname, () => {
  console.log(`Server running at http://${hostname}:8080/`);
});
