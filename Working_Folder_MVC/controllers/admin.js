const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  // getting a query parameter
  const editMode = req.query.edit;
  // getting a passed parameter
  const prodId = req.params.productId;
  if (!editMode) {
    return res.redirect("/");
  }
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect("/");
    }
    console.log("what is editMode:", editMode);
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  // fetch information for the product
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updateImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  // create new Product instance and call save
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updateImageUrl,
    updatedDescription,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
