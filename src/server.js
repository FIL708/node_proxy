const express = require('express')
const config = require('config')

const PORT = config.get('PORT')

express().listen(PORT, () => console.log(`Server started at: ${PORT}`))