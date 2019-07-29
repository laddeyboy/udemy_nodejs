// this should be the route that handles the creation of products which admin can use
const path = require('path');

const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
const { getAddProduct, postAddProduct, getProducts } = adminController;

router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct );

router.get('/products', getProducts);

module.exports = router;