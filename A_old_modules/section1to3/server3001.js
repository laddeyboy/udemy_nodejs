// Creating a Node Server
const http = require('http');

const routes = require('./routes');


// 2nd attempt -> this is same as above w/ anonymous function instead a well defined.
const server = http.createServer(routes.handler);

server.listen(3001);