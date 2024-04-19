const meteorsService = require("../services/meteors.service.js");

const getMeteors = async (req, res) => {
  try {
    const meteorsData = await meteorsService.getByDateRange();

    return res.json(meteorsData);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { getMeteors };
