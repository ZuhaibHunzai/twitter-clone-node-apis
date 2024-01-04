const User = require("../../models/user");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(404).json({ message: err.message || "user not found" });
    }
    const user = await User.find({ _id: userId });
    res.status(200).json({ user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "something went wrong" });
  }
};
