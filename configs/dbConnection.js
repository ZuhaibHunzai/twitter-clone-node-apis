const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to DB Successfully");
  } catch (e) {
    console.log("Error connecting databse", e);
  }
};

module.exports = { connect };
