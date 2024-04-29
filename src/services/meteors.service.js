const https = require("https");
const axios = require("axios");
const config = require("config");
const extractMeteorsData = require("../utils/extract-meteors.js");

const key = config.get("API_KEY");
const url = config.get("METEOR_URL");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const getByDateRange = async (start_date, end_date) => {
  const fullUrl = `${url}feed?start_date=${start_date}${
    end_date ? "&end_date=" + end_date : ""
  }&api_key=${key}`;

  const response = await axios.get(fullUrl, { httpsAgent });

  const extractedMeteorsData = extractMeteorsData(
    response.data["near_earth_objects"]
  );

  return extractedMeteorsData;
};

module.exports = { getByDateRange };
