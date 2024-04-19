const extractMeteorsData = (rawData) => {
    return Object.entries(rawData).flatMap(([key, value]) =>
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
  };

  module.exports = extractMeteorsData