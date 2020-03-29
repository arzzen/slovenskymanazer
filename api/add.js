const { mongoConnect, collectionName } = require("./_utils/mongodb");

module.exports = async (req, res) => {
  const db = await mongoConnect();
  const collection = await db.collection(collectionName());
  const { body } = req;

  try {
    var doc = {
        author: body.author,
        message: body.message
    };
    collection.insertOne(doc, function (err, result) {
        if (err) {
            res.status(404).json({ data: {} });
        } else {
            res.status(200).json({ data: 'inserted' })
        }
    });
  } catch(e) {
    res.status(404).json({ data: {} });
  }
};
