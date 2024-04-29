const https = require("https");
const axios = require("axios");
const config = require("config");

const key = config.get("API_KEY");
const url = config.get("ROVER_URL");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const getLastRoverPhotos = async () => {
  const fullUrl = `${url}photos?sol=1000&camera=fhaz&api_key=${key}`;

  const response = await axios.get(fullUrl, { httpsAgent });
  
  const lastDate = await response.data.photos[0].rover.max_date;
  const latestDataUrl = `${url}photos?earth_date=${lastDate}&camera=fhaz&api_key=${key}`;

  const { data } = await axios.get(latestDataUrl, { httpsAgent });

  return data.photos;
};

module.exports = { getLastRoverPhotos };
