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
  const imageurl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user
    .createProduct({
      title,
      price,
      imageurl,
      description
    })
    .then(result => {
      console.log("CREATED PRODUCT");
      res.redirect("/admin/products");
    })
    .catch(err => console.log(err));
  // pre Sequelize
  // const product = new Product(null, title, imageUrl, description, price);
  // product
  //   .save()
  //   .then(result => {
  //     console.log("RESULT->", result);
  //     res.redirect("/");
  //   })
  //   .catch(err => console.log("[admin.js] postAddProduct", err));
  // res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  // getting a query parameter
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  // getting a passed parameter
  const prodId = req.params.productId;
  req.user
    .getProducts({ where: { id: prodId } })
    // Product.findByPk(prodId)
    .then(products => {
      const product = products[0];
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log("[admin.js] getEditProducts", err));

  //This code if pre-sequelize
  //   product => {
  //   if (!product) {
  //     return res.redirect("/");
  //   }
  //   res.render("admin/edit-product", {
  //     pageTitle: "Edit Product",
  //     path: "/admin/edit-product",
  //     editing: editMode,
  //     product: product
  //   });
  // });
};

exports.postEditProduct = (req, res, next) => {
  // fetch information for the product
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updateImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  // create new Product instance and call save
  Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imageurl = updateImageUrl;
      return product.save();
    })
    .then(result => {
      console.log("UPDATED PRODUCT");
      res.redirect("/admin/products");
    })
    .catch(err => console.log("[admin.js] postEditProduct", err));

  // code for pre-Sequelize
  // const updatedProduct = new Product(
  //   prodId,
  //   updatedTitle,
  //   updateImageUrl,
  //   updatedDescription,
  //   updatedPrice
  // );
  // updatedProduct.save();
  // res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    // Product.findAll()
    .then(products => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products"
      });
    })
    .catch(err => console.log("[admin.js] getProducts", err));
  // pre Sequelize
  // Product.fetchAll(products => {
  //   res.render("admin/products", {
  //     prods: products,
  //     pageTitle: "Admin Products",
  //     path: "/admin/products",
  //     hasProducts: products.length > 0,
  //     activeShop: true,
  //     productCSS: true
  //   });
  // });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/admin/products");
    })
    .catch(err => console.log("[admin.js] postDeleteProduct", err));
  // code pre-Sequelize
  // Product.deleteById(prodId);
  // res.redirect("/admin/products");
};
