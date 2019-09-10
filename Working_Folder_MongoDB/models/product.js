const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class Product {
  constructor(title, price, description, imageurl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageurl = imageurl;
    this._id = id ? mongodb.ObjectID(id) : null;
  }

  save() {
    const db = getDb(); // connect to mondoDB and save product
    let dbOp;
    if (this._id) {
      // update the product
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log("[product.js] save", err);
      });
  }

  static fetchAll() {
    const db = getDb();
    // find returns a 'cursor' (like an iterator/pagination)
    return db
      .collection("products")
      .find()
      .toArray()
      .then(products => {
        return products;
      })
      .catch(err => console.log("[product.js] fetchAll", err));
  }
  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: mongodb.ObjectID(prodId) })
      .next()
      .then(product => {
        return product;
      })
      .catch(err => console.log("[product.js] findById", err));
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectID(prodId) })
      .then(result => {
        console.log("DELETED PRODUCT");
      })
      .catch(err => console.log("[product.js] deleteById", err));
  }
}

module.exports = Product;
