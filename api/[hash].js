const { mongoConnect, collectionName } = require("./_utils/mongodb");
const mongo = require("mongodb");

module.exports = async (req, res) => {
  const db = await mongoConnect();
  const collection = await db.collection(collectionName());
  try {
    const id = new mongo.ObjectID(req.query.hash);
    const post = await collection.find({ _id: id }).toArray();
    if (post) {
      const data = {
        author: post[0].author,
        message: post[0].message,
        id: post[0]._id
      };
      res.status(200).json({ data });
    } else {
      res.status(404).json({ data: {} });
    }
  } catch (ex) {
    res.status(404).json({ data: {} });
  }
};
