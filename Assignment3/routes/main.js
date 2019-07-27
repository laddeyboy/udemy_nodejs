// this should be the route that handles the creation of products which admin can use
const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'main.html'));
});

module.exports = router;