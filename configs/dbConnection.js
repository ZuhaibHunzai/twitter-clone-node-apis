const mongoose = require("mongoose");

const URL = process.env.MONGDB_URL;

const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connected to DB Successfully");
  } catch (e) {
    console.log("Error connecting databse", e);
  }
};

module.exports = {
  connect,
};
