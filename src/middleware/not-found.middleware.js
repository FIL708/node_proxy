const notFound = (req, res) => {
    const { originalUrl } = req;
    return res.status(404).render('pages/not-found', { url: originalUrl });
};

module.exports = notFound;
