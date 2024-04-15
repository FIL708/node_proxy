const https = require('https')
const { Router } = require('express')
const config = require('config')
const axios = require('axios')

const key = config.get("API_KEY")
const url = config.get("API_URL")
const fullUrl = `${url}feed?start_date=2024-04-01&end_date=2024-04-05&api_key=${key}`

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });
const getMeteors = async (req, res) => {
    try {
        const response = await axios.get(fullUrl, {httpsAgent})

        return res.json(response.data)
    } catch (error) {
        return res.status(500).json({error})
    }
};

module.exports = Router().get('/', getMeteors)