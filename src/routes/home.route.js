const { Router } = require('express');
const dayjs = require('dayjs');

module.exports = Router().get('/', (req, res) =>
    res.render('pages/home', {
        maxDate: dayjs().format('YYYY-MM-DD')
    })
);
