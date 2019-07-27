const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
  console.log('In the next middleware!');
  res.send('<h1>Hello from Assignment 2 Users!</h1>')  
});

app.use('/', (req, res, next) => {
  console.log('In the default middleware!');
    res.send('<h1>Hello from Node Assignment 2!</h1>')
});

app.listen(3000);