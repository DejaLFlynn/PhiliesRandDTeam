const db = require("./db");
const getAllPlayers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * from players ORDER BY salary");
    res.status(200).json({
      users,
      status: "Success",
      message: "Players Fetched",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllPlayers };
