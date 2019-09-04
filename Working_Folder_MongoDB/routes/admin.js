// this should be the route that handles the creation of products which admin can use
const path = require("path");

const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  postDeleteProduct
} = adminController;

router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);
router.get("/products", getProducts);
router.get("/edit-product/:productId", getEditProduct);
router.post("/edit-product/", postEditProduct);
router.post("/delete-product", postDeleteProduct);

module.exports = router;
