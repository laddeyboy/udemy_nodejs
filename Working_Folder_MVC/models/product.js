const Sequelize = require("sequelize");

const sequelize = require("../util/database");

// defining our Product Model
const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageurl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;

// THIS CODE IS FOR USING POSTGRES DIRECTLY WITHOUT SEQUELIZE
// const db = require("../util/database");

// const Cart = require("./cart");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     const insertQuery =
//       "INSERT INTO products(title, price, description, imageurl) VALUES ($1,$2,$3,$4)";
//     const queryValues = [
//       this.title,
//       this.price,
//       this.description,
//       this.imageUrl
//     ];
//     return db.query(insertQuery, queryValues);
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     // fetch all needs to reach out to the database
//     return db.query("SELECT * FROM products");
//   }

//   static findById(id) {
//     const findQuery = "SELECT * FROM products WHERE id = $1";
//     console.log("findById", id);
//     return db.query(findQuery, [id]);
//   }
// };
