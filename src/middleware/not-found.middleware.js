const notFound = (req, res) => {
    const { originalUrl } = req;
    res.status(404).render('pages/not-found', { url: originalUrl });
};

module.exports = notFound;
