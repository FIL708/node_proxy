const extractMeteorsData = require("../../helpers/extract-meteors");
const meteorsService = require("../services/meteors.services");

const getMeteors = async (req, res) => {
  try {
    const rawMeteorsData = await meteorsService();
    const extractedMeteorsData = extractMeteorsData(rawMeteorsData);
    return res.json(extractedMeteorsData);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { getMeteors };
