const https = require("https");
const axios = require("axios");
const config = require("config");

const key = config.get("API_KEY");
const url = config.get("METEOR_URL");

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const anyMeteorsHazardous = (meteros) => {
  for (let i = 0; i < meteros.length; i++) {
    if (meteros[i].is_potentially_hazardous_asteroid) {
      return true;
    }
  }
  return false;
};

const extractMeteorsData = (rawData) => {
  return Object.entries(rawData).flatMap(([key, value]) =>
    value.map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      diameter_in_meters: {
        estimated_diameter_min:
          meteor.estimated_diameter.meters.estimated_diameter_min.toFixed(2),
        estimated_diameter_max:
          meteor.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
      },
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        meteor.close_approach_data[0].close_approach_date_full,
      relative_velocity_in_kilometers_per_second: parseFloat(
        meteor.close_approach_data[0].relative_velocity.kilometers_per_second
      ).toFixed(2),
    }))
  );
};

const getMeteorsData = async (
  start_date,
  end_date,
  count,
  were_dangerous_meteors
) => {
  const fullUrl = `${url}feed?start_date=${start_date}${
    end_date ? "&end_date=" + end_date : ""
  }&api_key=${key}`;

  let total, is_dangerous;

  const { data } = await axios.get(fullUrl, { httpsAgent });

  const meteors = extractMeteorsData(data["near_earth_objects"]);

  if (were_dangerous_meteors) is_dangerous = anyMeteorsHazardous(meteors);

  if (count) total = data.element_count;
  
  return { meteors, total, is_dangerous };
};

module.exports = { getMeteorsData };
