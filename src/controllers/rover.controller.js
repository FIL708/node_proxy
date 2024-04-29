const { getLastRoverPhotos } = require("../services/rover.service");

const getRoverPage = (req, res) => {
  return res.render("pages/rover");
};

const postUserData = async (req, res, next) => {
  try {
    const { userId, apiKey, userName } = req.body;
    console.log(userId, apiKey, userName);

    const photos = await getLastRoverPhotos();

    return res.render("pages/rover", { photos });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRoverPage, postUserData };
