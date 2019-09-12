const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collections("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next();
  }
}

module.exports = User;
