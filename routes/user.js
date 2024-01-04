const userRouter = require("express").Router();
const { userData } = require("../controllers/user/index");

userRouter.get("/:userId", userData);

module.exports = userRouter;
