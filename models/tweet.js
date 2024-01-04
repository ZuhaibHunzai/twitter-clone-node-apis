const { model, Schema } = require("mongoose");

const Tweets = model(
  "Tweet",
  new Schema({
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    name: {
      type: "string",
      ref: "User",
    },
    userName: {
      type: "string",
      ref: "User",
    },
    tweet: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
  })
);

module.exports = Tweets;
