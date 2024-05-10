const roversService = require('../services/rover.service.js');

const getForm = (req, res) => res.render('pages/rover-form');

const postRover = async (req, res, next) => {
    try {
        const { userName } = req.body;

        const photos = await roversService.getLastRoverPhotos();

        return res.render('pages/rover', { photos, userName });
    } catch (error) {
        next(error);
    }
};

module.exports = { getForm, postRover };
