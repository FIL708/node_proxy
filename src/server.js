const express = require('express')
const config = require('config')
const meteors = require('./routes/meteors')

const PORT = config.get('PORT')

express()
    .use('/meteors', meteors)
    .listen(PORT, () => console.log(`Server started at: ${PORT}`))