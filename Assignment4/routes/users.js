// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const mainData = require('./main');
const rootDir = require('../util/path')

const users = mainData.users;

router.get('/users', (req, res, next) => {
  res.render('users.ejs', { pageTitle: 'Users', users })
});

module.exports = router;