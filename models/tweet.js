const { model, Schema } = require("mongoose");

const Tweets = model(
  "Tweet",
  new Schema({
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    tweet: {
      type: "string",
      required: true,
    },
  })
);

module.exports = Tweets;
