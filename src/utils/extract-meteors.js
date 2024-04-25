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

module.exports = extractMeteorsData;
