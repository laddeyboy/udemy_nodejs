// the route of what the user sees -> this is what we're going to be building over the course
const path = require("path");

const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");
const {
  getProducts,
  getCart,
  postCart,
  getCheckout,
  getIndex,
  getOrders,
  postOrder,
  getProduct,
  postCartDeleteProduct
} = shopController;

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/products/:productId", getProduct);
router.get("/cart", getCart);
router.post("/cart", postCart);
router.post("/cart-delete-item", postCartDeleteProduct);
router.get("/orders", getOrders);
router.post("/create-order", postOrder);

module.exports = router;
