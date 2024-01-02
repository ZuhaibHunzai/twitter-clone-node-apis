const Tweets = require("../../models/tweet");

module.exports = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const tweet = await Tweets.findById({ _id: tweetId });
    res.status(200).send({ tweet });
  } catch (err) {
    res.status(500).json({ message: err.message || "something went   wrong" });
  }
};
