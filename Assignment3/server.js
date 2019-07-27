const path = require('path');

const express = require('express');
const app = express();

const mainRoute = require('./routes/main');
const userRoute = require('./routes/users');

// add static file use
app.use(express.static(path.join(__dirname, 'public')));

// handle site routes
app.use(userRoute);
app.use(mainRoute);

// handle 404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);