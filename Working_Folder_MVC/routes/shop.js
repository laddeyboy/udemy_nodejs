// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const { getProducts } = productsController;

router.get('/', getProducts);

module.exports = router;