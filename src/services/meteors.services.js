const https = require("https");
const axios = require("axios");
const config = require("config");

const key = config.get("API_KEY");
const url = config.get("API_URL");
const fullUrl = `${url}feed?start_date=2024-04-01&end_date=2024-04-05&api_key=${key}`;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const meteorsService = async () => {
  const response = await axios.get(fullUrl, { httpsAgent });
  
  return response.data["near_earth_objects"];
};

module.exports = meteorsService;
