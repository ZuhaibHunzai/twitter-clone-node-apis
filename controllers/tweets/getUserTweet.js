const Tweets = require("../../models/tweet");

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;
    const tweets = await Tweets.find({ userId: userId });
    res.status(200).send({ tweets });
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
