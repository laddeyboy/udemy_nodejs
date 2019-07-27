const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>')
    res.write('<h1>Enter a User Name</h1>')
    res.write('<body><form action="/create-user" method="POST">');
    res.write('<label>UserName: </label><input type="text" name="username">');
    res.write('<button type="submit">Send</button></form></body>');
    res.write('</html>')
    // don't RETURN res.end unless you are DONE using 'write'
    return res.end; 
  }
  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User Names</title></head>')
    res.write('<body><h1>These are my Recorded Users</h1>');
    res.write('<ul><li>User 1</li><li>User 2</li><ul>');
    res.write('</body>')
    res.write('</html>')
    return res.end;
  }
  if(url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      res.statusCode = 302;
      res.setHeader("Location", '/create-user');
      return res.end();
    });
  }

}

module.exports = {
  handler: requestHandler
}