// Creating a Node Server
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// this is the 'pool'
// const db = require("./util/database");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");

const { get404 } = errorController;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // not needed as this is default

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// this needs to be here to parse the body
// bodyParser.urlencoded -> registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // this is granting access to read only access to these files.

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      // this is a sequelized object NOT a standard JS object
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});
// adminRoutes is the exported object from admin.js
app.use("/admin", adminRoutes); // the first parameter becomes a filter so only paths that start with '/admin'
// will be handled here.
app.use(shopRoutes);
app.use(get404);

// this syncs my sequelize models to the database by creating appropriate tables.
// association my models together check out: https://sequelize.org/master/manual/associations.html

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" }); // this is the 'user' created the 'product'
User.hasMany(Product); // this is optional and shows 'bi-directionality'
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    // create a user
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: "Josh", email: "test@test.com" });
    }
    return Promise.resolve(user);
  })
  .then(user => {
    return user.createCart();
  })
  .then(cart => app.listen(3000))
  .catch(err => console.log(`Sync Error ${err}`));
