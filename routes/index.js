const indexRouter = require("express").Router();

// api/auth
indexRouter.use("/auth", require("./auth"));
// api/tweets
indexRouter.use("/tweets", require("./tweets"));

module.exports = indexRouter;
