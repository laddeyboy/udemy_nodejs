// connect to MongoDB
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://jladdy:anewstart@laddeyboy-ucg5j.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("CONNECTED");
      callback(client);
    })
    .catch(err => console.log("[database.js] Mongo Connection", err));
};

module.exports = mongoConnect;
