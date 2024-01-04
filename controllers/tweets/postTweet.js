const Tweet = require("../../models/tweet");

module.exports = async (req, res, next) => {
  try {
    const { tweetText } = req.body;
    const { user } = req.user;
    if (!tweetText) {
      return res.status(400).json({
        message: "invalid  payload",
      });
    }

    const tweet = new Tweet({
      tweet: tweetText,
      userId: user._id,
      name: user.name,
      userName: user.userName,
      date: Date.now(),
    });
    await tweet.save();
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};
