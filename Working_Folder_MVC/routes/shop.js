// the route of what the user sees -> this is what we're going to be building over the course
const path = require('path');

const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const { getProducts, getCart, getCheckout, getIndex } = shopController;

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);



module.exports = router;