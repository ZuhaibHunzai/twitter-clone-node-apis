const tweetRouter = require("express").Router();
const useAuth = require("../middleware/useAuth");
const postTweet = require("../controllers/tweets/postTweet");
const deleteTweet = require("../controllers/tweets/deleteTweet");

tweetRouter
  .post("/post-tweet", useAuth, postTweet)
  .delete("/delete/:tweetId", useAuth, deleteTweet);

module.exports = tweetRouter;
