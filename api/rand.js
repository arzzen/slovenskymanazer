const url = require("url");
const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;
async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.mongodb_uri);
  const collection = await db.collection("manazer");

//  const post = await collection.find({}).toArray();
  const post = await collection.aggregate(
    [ { $sample: { size: 1 } } ]
  ).toArray();

  var data = {};
  if(post) {
    data.author = post[0].author;
    data.message = post[0].message;
    data.id = post[0].id
  }

  res.status(200).json({ data });
};
