const meteorsService = require("../services/meteors.service.js");
const anyMeteorsHazardous = require("../utils/any-meteors-hazardous.js");

const getMeteors = async (req, res, next) => {
  try {
    const { start_date, end_date, count, were_dangerous_meteors } = req.query;

    let total, is_dangerous;
    const meteors = await meteorsService.getByDateRange(start_date, end_date);

    if (were_dangerous_meteors) is_dangerous = anyMeteorsHazardous(meteors);

    if (count) total = meteors.length;
    
    return res.render("pages/meteors", { total, is_dangerous, meteors });
  } catch (error) {
    next(error);
  }
};

module.exports = { getMeteors };
