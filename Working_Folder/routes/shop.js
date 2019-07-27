// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')
const adminData = require('./admin');

// get ensures that you're using the 'exact' path.  so /lslsls wouldn't work.
router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>')
  
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // path.join builds the absolute path
  
  const products = adminData.products;
  res.render('shop', { 
    prods: products, 
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true});
});

module.exports = router;