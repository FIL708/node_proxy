const meteorsService = require("../services/meteors.service.js");

const getMeteors = async (req, res, next) => {
  try {
    const { start_date, end_date, count, were_dangerous_meteors } = req.query;

    const meteorsData =
      await meteorsService.getMeteorsData(
        start_date,
        end_date,
        count,
        were_dangerous_meteors
      );

    return res.render("pages/meteors", meteorsData);
  } catch (error) {
    next(error);
  }
};

module.exports = { getMeteors };
