// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html')); // path.join builds the absolute path
});

module.exports = router;