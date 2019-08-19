// Creating a Node Server
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// this is the 'pool'
// const db = require("./util/database");
const sequelize = require("./util/database");
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

// adminRoutes is the exported object from admin.js
app.use("/admin", adminRoutes); // the first parameter becomes a filter so only paths that start with '/admin'
// will be handled here.
app.use(shopRoutes);

app.use(get404);

// this syncs my sequelize models to the database by creating appropriate tables.
sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log(`Sync Error ${err}`));
