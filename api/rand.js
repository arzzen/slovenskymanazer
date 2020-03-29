const { mongoConnect, collectionName } = require("./_utils/mongodb");

module.exports = async (req, res) => {
  const db = await mongoConnect();
  const collection = await db.collection(collectionName());
  const post = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
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
};
