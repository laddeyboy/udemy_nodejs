// Creating a Node Server
const http = require('http');
const fs = require('fs');

/* 1st attempt
function rqListener(req, res) {
}
// createServer takes a requestListener -> function that is executed each time the server gets a request.
// So rqListener will run for every ping to our/this server
http.createServer(rqListener);  
*/


// 2nd attempt -> this is same as above w/ anonymous function instead a well defined.
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end;  
  }
  if(url === '/message' && method === 'POST') {
    const body = [];
    // get request data
    req.on('data', (chunk) => {
      console.log('logging...', chunk)
      body.push(chunk);
    });  // data will fire whenever a new data 'chunk' is ready in the buffer.
    // redirect the user back to '/' && create new file and store message into it.
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();
      });
    }); // at this point all the data chunks have been read and stored in the body.

  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>Hello from my Node.js Server</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(3000);