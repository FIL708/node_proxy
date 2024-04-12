const https = require('https')
const config = require('config')
const axios = require('axios')

const key = config.get("API_KEY")
const url = config.get("NASA_URL")
const fullUrl = `${url}feed?start_date=2024-04-01&end_date=2024-04-05&api_key=${key}`

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });


axios.get(fullUrl, { httpsAgent })
    .then(res => console.log(res))
    .catch(error => console.error(error))