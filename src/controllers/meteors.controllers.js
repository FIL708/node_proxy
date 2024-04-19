const meteorsService = require("../services/meteors.service.js");

const getMeteors = async (req, res, next) => {
  try {
    const meteorsData = await meteorsService.getByDateRange();

    return res.json(meteorsData);
  } catch (error) {
    next(error)
  }
};

module.exports = { getMeteors };
