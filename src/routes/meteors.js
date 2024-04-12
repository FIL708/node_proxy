const { Router } = require('express')

const getSomeMeteors = () => console.log("Meteors");

module.exports = Router().get('/', getSomeMeteors)