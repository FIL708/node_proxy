const roversService = require("../services/rover.service");

const getForm = (req, res) => {
  return res.render("pages/rover-form");
};

const postRover = async (req, res, next) => {
  try {
    const { userName, userId, apiKey } = req.body;
    console.log(userName, userId, apiKey);

    const photos = await roversService.getLastRoverPhotos();

    return res.render("pages/rover", { photos, userName });
  } catch (error) {
    next(error);
  }
};

module.exports = { getForm, postRover };
