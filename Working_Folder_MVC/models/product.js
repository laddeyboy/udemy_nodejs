const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const insertQuery =
      "INSERT INTO products(title, price, description, imageurl) VALUES ($1,$2,$3,$4)";
    const queryValues = [
      this.title,
      this.price,
      this.description,
      this.imageUrl
    ];
    return db.query(insertQuery, queryValues);
  }

  static deleteById(id) {}

  static fetchAll() {
    // fetch all needs to reach out to the database
    return db.query("SELECT * FROM products");
  }

  static findById(id) {}
};
