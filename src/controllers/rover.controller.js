const roversService = require("../services/rover.service");

const getForm = (req, res) => {
  return res.render("pages/rover-form");
};

const postRover = async (req, res, next) => {
  try {
    const { userId, apiKey, userName } = req.body;
    console.log(userId, apiKey, userName);

    const photos = await roversService.getLastRoverPhotos();

    return res.render("pages/rover", { photos });
  } catch (error) {
    next(error);
  }
};

module.exports = { getForm, postRover };
