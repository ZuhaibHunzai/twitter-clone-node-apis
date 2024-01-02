const tweetRouter = require("express").Router();
const useAuth = require("../middleware/useAuth");
const {
  postTweet,
  deleteTweet,
  getTweets,
  userTweets,
} = require("../controllers/tweets/index");

tweetRouter
  .get("/all", getTweets)
  .get("/:userId", userTweets)
  .post("/post-tweet", useAuth, postTweet)
  .delete("/delete/:tweetId", useAuth, deleteTweet);

module.exports = tweetRouter;
