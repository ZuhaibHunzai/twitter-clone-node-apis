require("dotenv").config({});
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const { connect } = require("./configs/dbConnection");
const app = express();

connect();

// json request => parse -> request.body attach
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", require("./routes"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "path not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
