const https = require("https");
const { Router } = require("express");
const config = require("config");
const axios = require("axios");

const key = config.get("API_KEY");
const url = config.get("API_URL");
const fullUrl = `${url}feed?start_date=2024-04-01&end_date=2024-04-05&api_key=${key}`;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const extractMeteorsData = (obj) => {
  const meteors = obj["near_earth_objects"];

  const result = Object.entries(meteors).flatMap(([key, value]) =>
    value.map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      diameter_in_meters: meteor.estimated_diameter.meters,
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        meteor.close_approach_data[0].close_approach_date_full,
      relative_velocity_in_kilometers_per_second:
        meteor.close_approach_data[0].relative_velocity.kilometers_per_second,
    }))
  );

  return result;
};

const getMeteors = async (req, res) => {
  try {
    const response = await axios.get(fullUrl, { httpsAgent });

    const meteorData = extractMeteorsData(response.data)

    return res.json(meteorData);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = Router().get("/", getMeteors);
