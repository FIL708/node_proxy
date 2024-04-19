const anyMeteorsHazardous = (meteros) => {
  for (let i = 0; i < meteros.length; i++) {
    if (meteros[i].is_potentially_hazardous_asteroid) {
      return true;
    }
  }
  return false;
};
module.exports = anyMeteorsHazardous;
