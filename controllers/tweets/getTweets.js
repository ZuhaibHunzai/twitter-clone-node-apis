const Tweet = require("../../models/tweet");

module.exports = async (req, res, next) => {
  try {
    const tweets = req;
    if (!tweets) {
      return res
        .status(404)
        .json({ message: err.message || "Tweets not found" });
    }
    const allTweets = await Tweet.find({});
    res.status(200).json({ allTweets });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "something went wrong" });
  }
};
