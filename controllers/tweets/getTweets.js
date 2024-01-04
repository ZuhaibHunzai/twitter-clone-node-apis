const Tweet = require("../../models/tweet");

module.exports = async (req, res, next) => {
  try {
    const tweets = req;
    if (!tweets) {
      return res
        .status(404)
        .json({ message: err.message || "Tweets not found" });
    }

    // Find all tweets and sort by createdAt field in descending order
    const allTweets = await Tweet.find({}).sort({ date: -1 });

    res.status(200).json({ allTweets });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "Something went wrong" });
  }
};
