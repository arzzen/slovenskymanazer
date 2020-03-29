const url = require("url");
const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;
async function mongoConnect() {
  const uri = process.env.mongodb_uri;
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

function collectionName() {
  return "manazer";
}

module.exports = {
  mongoConnect,
  collectionName
};
