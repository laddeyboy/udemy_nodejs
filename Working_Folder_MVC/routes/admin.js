// this should be the route that handles the creation of products which admin can use
const path = require('path');

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const { getAddProduct, postAddProduct } = productsController;

router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct );

module.exports = router;