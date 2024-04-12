const axios = require('axios')
const https = require('https')

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });

const URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-04-01&end_date=2024-04-05&api_key=8myaceLy6jnnDfZjLKb610ktfDpPc9ZKGcKMJbeX"

axios.get(URL, { httpsAgent })
    .then(res => console.log(res))
    .catch(error => console.error(error))