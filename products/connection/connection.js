const { database } = require("../../config/database");

const { MongoClient } = require("mongodb");
const client = new MongoClient(database);

const dotenv = require("dotenv");
dotenv.config();

async function productCollectionDb() {
  const connect = await client.connect();
  const db = connect.db(process.env.DB_NAME);
  const collection = db.collection(process.env.DB_COLLECTION);
  return collection;
}

module.exports = {
  databaseConnect,
};