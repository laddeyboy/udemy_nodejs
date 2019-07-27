// Creating a Node Server
const http = require('http');

const routes = require('./routes');

// 1 handle two routes
// '/' -> returns a greeting
// '/users' -> returns a list of dummy users
// e.g. <ul><li>User 1</li></ul> 
// 2 Add a form with "username" <input> to the '/' page a submit a POST request to
//  "/create-user" upon a button click
// 3 Add '/create-user' route and parse the incoming data and simply log it to the console.
const server = http.createServer(routes.handler);

server.listen(3000);