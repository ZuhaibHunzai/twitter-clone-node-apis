const { model, Schema } = require("mongoose");

const Tweets = model(
  "Tweets",
  new Schema({
    tweetText: {
      type: "string",
      required: true,
    },
  })
);

module.exports = Tweets;
