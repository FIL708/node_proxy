const https = require('https');
const axios = require('axios');
const config = require('config');

const apiKey = config.get('API_KEY');
const url = config.get('METEOR_URL');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

const anyMeteorsHazardous = (meteros) =>
    meteros.some((meteor) => meteor.is_potentially_hazardous_asteroid);

const extractMeteorsData = (rawData) =>
    Object.entries(rawData).flatMap(([_, value]) =>
        value.map((meteor) => ({
            id: meteor.id,
            name: meteor.name,
            diameter_in_meters: {
                estimated_diameter_min:
                    meteor.estimated_diameter.meters.estimated_diameter_min.toFixed(
                        2
                    ),
                estimated_diameter_max:
                    meteor.estimated_diameter.meters.estimated_diameter_max.toFixed(
                        2
                    )
            },
            is_potentially_hazardous_asteroid:
                meteor.is_potentially_hazardous_asteroid,
            close_approach_date_full:
                meteor.close_approach_data[0].close_approach_date_full,
            relative_velocity_in_kilometers_per_second: parseFloat(
                meteor.close_approach_data[0].relative_velocity
                    .kilometers_per_second
            ).toFixed(2)
        }))
    );

const getMeteorsData = async (
    startDate,
    endDate,
    count,
    wereDangerousMeteors
) => {
    const fullUrl = `${url}feed?start_date=${startDate}${
        endDate ? `&end_date=${endDate}` : ''
    }&api_key=${apiKey}`;

    let total;
    let isDangerous;

    const { data } = await axios.get(fullUrl, { httpsAgent });

    const meteors = extractMeteorsData(data.near_earth_objects);

    if (wereDangerousMeteors) isDangerous = anyMeteorsHazardous(meteors);

    if (count) total = data.element_count;

    return { meteors, total, isDangerous };
};

module.exports = { getMeteorsData };
