const Tweet = require("../../models/tweet");

module.exports = async (req, res) => {
  try {
    const { tweetId } = req.params;

    const tweet = await Tweet.findOne({ _id: tweetId });

    if (!tweet) {
      return res.status(404).json({ message: "Tweet not found" });
    }

    if (tweet.userId.toString() !== req.user.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Unauthorized: You can only delete your own tweets" });
    }

    await Tweet.deleteOne({ _id: tweetId });

    res.status(200).json({ message: "Tweet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
