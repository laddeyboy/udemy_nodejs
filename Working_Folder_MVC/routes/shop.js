// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const { getProducts, getCart, getCheckout, getIndex, getOrders, getProduct } = shopController;

router.get('/', getIndex);
router.get('/products', getProducts);
// ':' signals to express that productId is a variable name to be extracted.
router.get('/products/:productId', getProduct );
router.get('/cart', getCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);



module.exports = router;