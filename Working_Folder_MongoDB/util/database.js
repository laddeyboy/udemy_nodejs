// connect to MongoDB
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://jladdy:anewstart@laddeyboy-ucg5j.mongodb.net/shop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(client => {
      console.log("CONNECTED");
      // storing a connection to our mongoDB in the _db variable
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log("[database.js] Mongo Connection", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
