const { model, Schema } = require("mongoose");

const User = model(
  "User",
  new Schema({
    userName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    tweets: [
      {
        tweetId: {
          type: Schema.Types.ObjectId,
          ref: "tweets",
          required: true,
        },
      },
    ],
  })
);

module.exports = User;
