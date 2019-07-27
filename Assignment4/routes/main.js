// this should be the route that handles the creation of products which admin can use
const path = require('path');

const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('main.ejs', {
    pageTitle: 'Assignment 4 wEJS',
    formLabel: 'Enter User Name'
  })
});

router.post('/', (req, res, next) => {
  users.push({ name: req.body.user })
  res.redirect('/users');
});

exports.routes = router;
exports.users = users;